"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Send, Paperclip, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { trackFBEvent } from "@/components/FacebookPixel";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [trafficSource, setTrafficSource] = useState<any>(null);
  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFormLoadedAt(Date.now());
      // Load traffic source from localStorage
      const sourceData = localStorage.getItem('trafficSource');
      if (sourceData) {
        setTrafficSource(JSON.parse(sourceData));
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    // Industry standard: Max 3 files
    if (selectedFiles.length + files.length > 3) {
      setError('Maximum 3 files allowed');
      e.target.value = '';
      return;
    }

    // Check individual file sizes (10 MB each)
    const maxSize = 10 * 1024 * 1024;
    for (const file of files) {
      if (file.size > maxSize) {
        setError(`File "${file.name}" exceeds 10 MB limit`);
        e.target.value = '';
        return;
      }
    }

    // Check total size (25 MB total)
    const totalSize = [...selectedFiles, ...files].reduce((sum, f) => sum + f.size, 0);
    const maxTotalSize = 25 * 1024 * 1024;
    if (totalSize > maxTotalSize) {
      setError('Total file size cannot exceed 25 MB');
      e.target.value = '';
      return;
    }

    setSelectedFiles([...selectedFiles, ...files]);
    setError(null);
    e.target.value = ''; // Reset input to allow adding more files
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);

      // Time-based bot trap: if submitted in under 3 seconds, fake success
      const elapsed = Date.now() - formLoadedAt;
      if (elapsed < 3000) {
        setIsSubmitted(true);
        setTimeout(() => { setIsSubmitted(false); setIsLoading(false); setSelectedFiles([]); onClose(); }, 3000);
        return;
      }

      // Honeypot check: if hidden field is filled, fake success
      const honeypot = formData.get('website_url_confirm');
      if (honeypot) {
        setIsSubmitted(true);
        setTimeout(() => { setIsSubmitted(false); setIsLoading(false); setSelectedFiles([]); onClose(); }, 3000);
        return;
      }

      formData.append('_t', String(formLoadedAt));

      // Add all selected files to formData
      selectedFiles.forEach((file) => {
        formData.append('file', file);
      });

      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track Facebook conversion event
      trackFBEvent('Lead', {
        content_name: 'Quote Request',
        content_category: 'Contact Form',
        value: 0,
        currency: 'USD',
      });

      setIsSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setIsLoading(false);
        setSelectedFiles([]);
        onClose();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. BLURRED BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-9998"
          />

          {/* 2. THE MODAL CONTAINER */}
          <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-stone-200 w-full max-w-lg rounded-3xl shadow-elevated overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
            >

              {/* SUCCESS STATE */}
              {isSubmitted ? (
                <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <motion.div
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600"
                    >
                        <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Request Received!</h3>
                    <p className="text-stone-600">Imran will review your details and get back to you within 2 hours.</p>
                </div>
              ) : (
                /* FORM STATE */
                <div className="relative p-8">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-stone-100 rounded-full text-gray-500 hover:text-charcoal hover:bg-stone-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charcoal mb-1">Get a Quote</h2>
                    <p className="text-stone-600 text-sm">Tell us what you need. We move fast.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* NAME (Required) */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full bg-background border border-stone-200 rounded-xl px-4 py-3 text-charcoal placeholder:text-gray-400 focus:outline-hidden focus:border-cognac focus:ring-1 focus:ring-cognac transition-all"
                        />
                    </div>

                    {/* EMAIL & PHONE GRID (Required) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="john@company.com"
                                className="w-full bg-background border border-stone-200 rounded-xl px-4 py-3 text-charcoal placeholder:text-gray-400 focus:outline-hidden focus:border-cognac focus:ring-1 focus:ring-cognac transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                placeholder="+1 (555) 000-0000"
                                className="w-full bg-background border border-stone-200 rounded-xl px-4 py-3 text-charcoal placeholder:text-gray-400 focus:outline-hidden focus:border-cognac focus:ring-1 focus:ring-cognac transition-all"
                            />
                        </div>
                    </div>

                    {/* SERVICE (Optional) */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            Service Interested In (Optional)
                        </label>
                        <div className="relative">
                             <select name="service" className="w-full bg-background border border-stone-200 rounded-xl px-4 py-3 text-charcoal focus:outline-hidden focus:border-cognac appearance-none">
                                 <option className="bg-white">Select a service...</option>
                                 <option className="bg-white">WordPress Migration</option>
                                 <option className="bg-white">Web Apps & Dashboards</option>
                                 <option className="bg-white">High Performance Stores</option>
                                 <option className="bg-white">Other</option>
                             </select>
                            {/* Custom Arrow */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </div>
                    </div>

                    {/* DETAILS (Optional) */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            Project Details (Optional)
                        </label>
                        <textarea
                            rows={3}
                            name="details"
                            placeholder="Briefly describe what you are looking to build..."
                            className="w-full bg-background border border-stone-200 rounded-xl px-4 py-3 text-charcoal placeholder:text-gray-400 focus:outline-hidden focus:border-cognac focus:ring-1 focus:ring-cognac transition-all resize-none"
                        />
                    </div>

                    {/* FILE UPLOAD (Optional) - Up to 3 files */}
                    <div className="space-y-3">
                        {/* Selected Files List */}
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="flex items-center gap-3 w-full p-3 border border-stone-200 rounded-xl bg-stone-50">
                            <div className="p-2 bg-cognac/10 rounded-lg text-cognac">
                              <Paperclip className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-charcoal font-medium truncate">
                                {file.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatFileSize(file.size)}
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="p-1.5 hover:bg-stone-100 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}

                        {/* Add Files Button */}
                        {selectedFiles.length < 3 && (
                          <label className="flex items-center gap-3 w-full p-3 border border-dashed border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
                             <div className="p-2 bg-stone-50 rounded-lg text-gray-400 group-hover:text-cognac transition-colors">
                                 <Paperclip className="w-4 h-4" />
                             </div>
                             <div className="text-sm text-stone-600 flex-1">
                                 <span className="text-charcoal font-medium">
                                   {selectedFiles.length === 0 ? 'Attach files' : 'Add another file'}
                                 </span> (Max 3 allowed &bull; Optional)
                                 <div className="text-xs text-gray-400 mt-0.5">
                                   PDF, DOC, PNG, JPG, ZIP &bull; 10 MB each &bull; 25 MB total
                                 </div>
                             </div>
                             <input
                               type="file"
                               onChange={handleFileChange}
                               accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                               className="hidden"
                             />
                         </label>
                        )}
                    </div>

                    {/* ERROR MESSAGE */}
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    {/* HONEYPOT - invisible to humans, bots fill it */}
                    <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                      <label htmlFor="website_url_confirm">Leave this empty</label>
                      <input type="text" id="website_url_confirm" name="website_url_confirm" tabIndex={-1} autoComplete="off" />
                    </div>

                    {/* HIDDEN SOURCE TRACKING FIELDS */}
                    {trafficSource && (
                      <>
                        <input type="hidden" name="trafficSource" value={trafficSource.source || 'Unknown'} />
                        <input type="hidden" name="trafficMedium" value={trafficSource.medium || 'Unknown'} />
                        <input type="hidden" name="trafficCampaign" value={trafficSource.campaign || 'None'} />
                        <input type="hidden" name="landingPage" value={trafficSource.landingPage || '/'} />
                        <input type="hidden" name="firstVisit" value={trafficSource.timestamp || ''} />
                      </>
                    )}

                    {/* SUBMIT */}
                     <button
                       type="submit"
                       disabled={isLoading}
                       className="w-full py-4 bg-charcoal text-white font-bold text-lg rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                         {isLoading ? (
                           <>
                             <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                             Sending...
                           </>
                         ) : (
                           <>
                             <Send className="w-5 h-5" /> Send Request
                           </>
                         )}
                     </button>

                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
