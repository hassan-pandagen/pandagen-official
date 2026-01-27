"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Send, Paperclip, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend (e.g., Formspree, EmailJS)
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
        setIsSubmitted(false);
        onClose();
    }, 3000);
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998]"
          />

          {/* 2. THE MODAL CONTAINER */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0A0A0A] border border-white/10 w-full max-w-lg rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              
              {/* SUCCESS STATE */}
              {isSubmitted ? (
                <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} 
                        className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500"
                    >
                        <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                    <p className="text-gray-400">Imran will review your details and get back to you within 2 hours.</p>
                </div>
              ) : (
                /* FORM STATE */
                <div className="relative p-8">
                  {/* Close Button */}
                  <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-1">Get a Quote</h2>
                    <p className="text-gray-400 text-sm">Tell us what you need. We move fast.</p>
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
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
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
                                placeholder="john@company.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input 
                                required 
                                type="tel" 
                                placeholder="+1 (555) 000-0000"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                            />
                        </div>
                    </div>

                    {/* SERVICE (Optional) */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            Service Interested In (Optional)
                        </label>
                        <div className="relative">
                            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon appearance-none">
                                <option className="bg-[#0A0A0A]">Select a service...</option>
                                <option className="bg-[#0A0A0A]">WordPress Migration</option>
                                <option className="bg-[#0A0A0A]">Web Apps & Dashboards</option>
                                <option className="bg-[#0A0A0A]">High-Performance Stores</option>
                                <option className="bg-[#0A0A0A]">Other</option>
                            </select>
                            {/* Custom Arrow */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
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
                            placeholder="Briefly describe what you are looking to build..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all resize-none"
                        />
                    </div>

                    {/* FILE UPLOAD (Optional) */}
                    <div>
                        <label className="flex items-center gap-3 w-full p-3 border border-dashed border-white/10 rounded-xl cursor-pointer hover:bg-white/5 transition-colors group">
                            <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-neon">
                                <Paperclip className="w-4 h-4" />
                            </div>
                            <div className="text-sm text-gray-400">
                                <span className="text-white font-medium">Attach file</span> (RFP, Designs, etc)
                            </div>
                            <input type="file" className="hidden" />
                        </label>
                    </div>

                    {/* SUBMIT */}
                    <button className="w-full py-4 bg-neon text-black font-bold text-lg rounded-xl hover:bg-neon/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-[1.02]">
                        <Send className="w-5 h-5" /> Send Request
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
