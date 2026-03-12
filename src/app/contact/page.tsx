"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Code2, Search, FileText, Rocket, ChevronDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function ContactPage() {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     message: ""
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const [submitError, setSubmitError] = useState<string | null>(null);
   const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.pandacodegen.com/contact#webpage",
        "url": "https://www.pandacodegen.com/contact",
        "name": "Contact PandaCodeGen - Let's Talk Engineering",
        "description": "Get in touch with PandaCodeGen for custom web development, WordPress migration, or Shopify optimization. Free discovery call. Response within 2 hours.",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/#organization" },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "url": "https://www.pandacodegen.com",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "email": "info@pandacodegen.com",
        "telephone": "+13022504340",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Missouri City",
            "addressLocality": "Missouri City",
            "addressRegion": "TX",
            "postalCode": "77459",
            "addressCountry": "US",
            "name": "Headquarters"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "info@pandacodegen.com",
          "telephone": "+13022504340",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.pandacodegen.com/contact" }
        ]
      }
    ]
  };

  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Global Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      <Header />

      <section className="relative pt-40 pb-20 px-6 bg-paper overflow-hidden">
        {/* Decorative orb */}
        <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-stone-200/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">

           {/* LEFT: INFO & TRUST */}
           <div className="space-y-12">
              <div>
                 <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6">
                    Let&apos;s Talk <br />
                    <span className="font-serif italic text-stone-500">
                       Engineering.
                    </span>
                 </h1>
                 <p className="text-xl text-stone-600 leading-relaxed">
                    Ready to get started? Fill out the form and our team will review your stack personally within 2 hours.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {/* Email */}
                 <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all"
                 >
                    <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center border border-stone-200 flex-shrink-0">
                       <Mail className="w-5 h-5 text-charcoal" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-1">Email</div>
                       <a href="mailto:info@pandacodegen.com" className="text-sm font-medium text-charcoal hover:text-stone-600 transition-colors break-all">info@pandacodegen.com</a>
                    </div>
                 </motion.div>

                 {/* Phone */}
                 <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all"
                 >
                    <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center border border-stone-200 flex-shrink-0">
                       <Phone className="w-5 h-5 text-charcoal" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-1">Call</div>
                       <a href="tel:+13022504340" className="text-sm font-medium text-charcoal hover:text-stone-600 transition-colors">+1 (302) 250-4340</a>
                    </div>
                 </motion.div>

                 {/* HQ */}
                 <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all"
                 >
                    <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center border border-stone-200 flex-shrink-0">
                       <MapPin className="w-5 h-5 text-charcoal" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-1">HQ</div>
                       <div className="text-sm font-medium text-charcoal">Missouri, USA</div>
                       <div className="text-xs text-stone-400 mt-0.5">Clients in UK · AU · CA · EU</div>
                    </div>
                 </motion.div>

              </div>

              {/* International notice */}
              <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-start gap-3"
              >
                 <div className="text-lg leading-none mt-0.5">🌍</div>
                 <div>
                    <div className="text-sm font-bold text-charcoal mb-1">We work with clients worldwide</div>
                    <div className="text-xs text-stone-500 leading-relaxed">
                       All projects are managed async with weekly video demos. No timezone issues. Currently serving businesses in the <span className="text-charcoal font-medium">United Kingdom, Australia, Canada, Europe</span>, and the United States. US-registered LLC. Contracts in English under US law.
                    </div>
                 </div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-3"
              >
                 {/* Why work with us - 2x2 Grid */}
                 <div className="p-5 bg-white border border-stone-200 rounded-xl">
                    <h3 className="text-charcoal font-bold mb-4 flex items-center gap-2 text-base">
                       <CheckCircle2 className="text-charcoal w-5 h-5" /> Why work with us?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="flex items-start gap-2 text-sm text-stone-600">
                          <span className="text-charcoal font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                          <span>US-Registered LLC</span>
                        </div>
                       <div className="flex items-start gap-2 text-sm text-stone-600">
                          <span className="text-charcoal font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                          <span>US Law Contracts</span>
                        </div>
                       <div className="flex items-start gap-2 text-sm text-stone-600">
                          <span className="text-charcoal font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                          <span>100% IP Transfer</span>
                        </div>
                       <div className="flex items-start gap-2 text-sm text-stone-600">
                          <span className="text-charcoal font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                          <span>Fixed Pricing</span>
                        </div>
                    </div>
                 </div>

                 {/* Risk-Free Guarantee - 2x2 Grid */}
                 <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                    <h3 className="text-charcoal font-bold mb-4 flex items-center gap-2 text-base">
                       <CheckCircle2 className="text-charcoal w-5 h-5" /> Risk-Free Guarantee
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="flex items-start gap-2">
                          <span className="text-charcoal font-bold flex-shrink-0 text-sm mt-0.5">&#10003;</span>
                          <div>
                             <div className="font-semibold text-charcoal text-sm">30-Day Guarantee</div>
                             <div className="text-stone-500 text-xs">Refund if unsatisfied</div>
                           </div>
                        </div>
                       <div className="flex items-start gap-2">
                          <span className="text-charcoal font-bold flex-shrink-0 text-sm mt-0.5">&#10003;</span>
                          <div>
                             <div className="font-semibold text-charcoal text-sm">1-Month Support</div>
                             <div className="text-stone-500 text-xs">Free technical support</div>
                          </div>
                       </div>
                       <div className="flex items-start gap-2 col-span-2">
                          <span className="text-charcoal font-bold flex-shrink-0 text-sm mt-0.5">&#10003;</span>
                          <div>
                             <div className="font-semibold text-charcoal text-sm">100% Code Ownership</div>
                             <div className="text-stone-500 text-xs">Full source code & assets immediately</div>
                           </div>
                        </div>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* RIGHT: FORM OR SUCCESS STATE */}
           <div className="bg-white border border-stone-200 rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-card">

              {isSuccess ? (
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-charcoal" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal">Message Received!</h3>
                  <p className="text-stone-600 text-lg max-w-sm">We&apos;ll review your stack within 2 hours. Check your inbox.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 bg-stone-100 text-charcoal font-medium rounded-xl hover:bg-stone-200 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
              <form className="relative z-10 space-y-6" onSubmit={async (e) => {
                 e.preventDefault();
                 setIsSubmitting(true);

                 const newErrors: {name?: string; email?: string; message?: string} = {};
                 if (!formData.name.trim()) newErrors.name = "Name is required";
                 if (!formData.email.trim()) newErrors.email = "Email is required";
                 if (!formData.message.trim()) newErrors.message = "Message is required";

                 setErrors(newErrors);

                 if (Object.keys(newErrors).length === 0) {
                    try {
                       // Submit to your existing Resend API
                       const formDataToSend = new FormData();
                       formDataToSend.append('name', formData.name);
                       formDataToSend.append('email', formData.email);
                       formDataToSend.append('phone', 'Not provided'); // Contact form doesn't have phone field
                       formDataToSend.append('details', formData.message);

                       const response = await fetch("/api/submit-quote", {
                          method: "POST",
                          body: formDataToSend,
                       });

                       const result = await response.json();

                       if (response.ok && result.success) {
                          setIsSuccess(true);
                          setSubmitError(null);
                          setFormData({ name: "", email: "", message: "" });
                       } else {
                          setSubmitError("Something went wrong. Please email us directly at info@pandacodegen.com");
                       }
                    } catch (error) {
                       console.error("Form submission error:", error);
                       setSubmitError("Something went wrong. Please email us directly at info@pandacodegen.com");
                    }
                 }

                 setIsSubmitting(false);
              }}>
                 {/* Name */}
                 <div className="space-y-2">
                    <label className="text-base font-bold text-charcoal">Name *</label>
                    <input
                       type="text"
                       placeholder="John Doe"
                       value={formData.name}
                       onChange={(e) => {
                          setFormData({...formData, name: e.target.value});
                          if (errors.name) setErrors({...errors, name: undefined});
                       }}
                       required
                       className={`w-full bg-white border rounded-xl p-4 text-base text-charcoal placeholder:text-stone-400 outline-none transition-colors ${
                          errors.name ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-stone-200 focus:border-cognac focus:ring-1 focus:ring-cognac"
                       }`}
                    />
                    {errors.name && <p className="text-sm text-red-700">{errors.name}</p>}
                 </div>

                 {/* Email */}
                 <div className="space-y-2">
                    <label className="text-base font-bold text-charcoal">Email *</label>
                    <input
                       type="email"
                       placeholder="john@company.com"
                       value={formData.email}
                       onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: undefined});
                       }}
                       required
                       className={`w-full bg-white border rounded-xl p-4 text-base text-charcoal placeholder:text-stone-400 outline-none transition-colors ${
                          errors.email ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-stone-200 focus:border-cognac focus:ring-1 focus:ring-cognac"
                       }`}
                    />
                    {errors.email && <p className="text-sm text-red-700">{errors.email}</p>}
                 </div>

                 {/* Message */}
                 <div className="space-y-2">
                    <label className="text-base font-bold text-charcoal">What can we help you with? *</label>
                    <textarea
                       className={`w-full bg-white border rounded-xl p-4 text-charcoal placeholder:text-stone-400 outline-none h-40 resize-none transition-colors text-base ${
                          errors.message ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-stone-200 focus:border-cognac focus:ring-1 focus:ring-cognac"
                       }`}
                       placeholder="e.g., 'Need to migrate WordPress site with 50 pages' or 'Looking to build custom e-commerce platform'"
                       value={formData.message}
                       onChange={(e) => {
                          setFormData({...formData, message: e.target.value});
                          if (errors.message) setErrors({...errors, message: undefined});
                       }}
                       required
                    />
                    {errors.message && <p className="text-sm text-red-700">{errors.message}</p>}
                 </div>

                 {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                       {submitError}
                    </div>
                 )}

                 <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-charcoal text-white font-bold text-lg rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                    <Send className="w-5 h-5" /> {isSubmitting ? "Sending..." : "Get Free Quote"}
                 </motion.button>

                 <p className="text-center text-sm text-stone-500 mt-4">
                    &#10003; 2-hour response &bull; &#10003; No obligation &bull; &#10003; Free consultation
                 </p>
              </form>
              )}
           </div>

        </div>
      </section>

      {/* 2. THE ENGAGEMENT PROTOCOL (Architectural Version) */}
      <section className="container mx-auto px-6 py-32 overflow-hidden">
         <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">How We Work</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
               No complex jargon. Just a straight line from problem to solution.
            </p>
         </div>

         <div className="relative">
            {/* THE PIPELINE (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-stone-200">
                {/* The Moving Beam */}
                <div className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-transparent via-stone-400 to-transparent animate-shimmer" />
                <style jsx>{`
                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(600%); }
                    }
                    .animate-shimmer {
                        animation: shimmer 3s infinite linear;
                    }
                `}</style>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {/* STEP 1 */}
                <ProtocolCard
                   step="01"
                   title="Review"
                   desc="We audit your current stack to find the bleeding."
                   icon={Search}
                />

                {/* STEP 2 */}
                <ProtocolCard
                   step="02"
                   title="Plan"
                   desc="15-min strategy call. No sales pitch, just engineering."
                   icon={Phone}
                />

                {/* STEP 3 */}
                <ProtocolCard
                   step="03"
                   title="Quote"
                   desc="Fixed price. Guaranteed delivery. No hourly nonsense."
                   icon={FileText}
                />

                {/* STEP 4 */}
                <ProtocolCard
                   step="04"
                   title="Launch"
                   desc="We build, test, and deploy. You own 100% of the code."
                   icon={Rocket}
                />
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

// --- SUB COMPONENTS ---

function ProtocolCard({ step, title, desc, icon: Icon }: any) {
   return (
      <div className="relative flex flex-col items-center text-center group">

         {/* The Icon Container */}
         <div className="relative z-10 w-24 h-24 mb-8 flex items-center justify-center">
            {/* The Big Architectural Number (Behind) */}
            <span className="absolute text-8xl font-bold text-stone-100 select-none z-0 group-hover:text-stone-200 transition-colors duration-500 scale-125">
               {step}
            </span>

            {/* The Icon Circle (Front) */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-stone-200 flex items-center justify-center group-hover:border-stone-400 group-hover:shadow-md transition-all duration-300">
                <Icon className="w-6 h-6 text-stone-500 group-hover:text-charcoal transition-colors" />
            </div>
         </div>

         {/* The Text */}
         <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-stone-700 transition-colors">{title}</h3>
         <p className="text-stone-600 leading-relaxed text-sm px-4">
            {desc}
         </p>
      </div>
   )
}
