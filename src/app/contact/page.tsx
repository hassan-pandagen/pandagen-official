"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Code2, Search, FileText, Rocket, ChevronDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function ContactPage() {
   const [selectedType, setSelectedType] = useState("migration");
   const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     company: "",
     email: "",
     phone: "",
     budget: "",
     description: ""
   });
   const [errors, setErrors] = useState<{name?: string; email?: string; phone?: string}>({});

   const budgetOptions = [
     { value: "2.5k-5k", label: "$2.5k - $5k" },
     { value: "5k-10k", label: "$5k - $10k" },
     { value: "10k-25k", label: "$10k - $25k" },
     { value: "25k-50k", label: "$25k - $50k" },
     { value: "50k+", label: "$50k+" },
     { value: "custom", label: "Custom Budget" },
   ];

  return (
    <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <Header />

      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
           
           {/* LEFT: INFO & TRUST */}
           <div className="space-y-12">
              <div>
                 <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                    Let's Talk <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-500">
                       Engineering.
                    </span>
                 </h1>
                 <p className="text-xl text-gray-400 leading-relaxed">
                    Ready to migrate? Fill out the form, and our team will review your stack personally within 2 hours.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {/* Email */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-xl hover:bg-white/10 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                 >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/[0.15] flex-shrink-0">
                       <Mail className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Email</div>
                       <a href="mailto:info@pandacodegen.com" className="text-sm font-medium text-white hover:text-neon transition-colors break-all">info@pandacodegen.com</a>
                    </div>
                 </motion.div>

                 {/* Phone */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-xl hover:bg-white/10 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                 >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/[0.15] flex-shrink-0">
                       <Phone className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Call</div>
                       <a href="tel:+15551234567" className="text-sm font-medium text-white hover:text-neon transition-colors">+1 (555) 123-4567</a>
                    </div>
                 </motion.div>
                 
                 {/* HQ */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-xl hover:bg-white/10 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                 >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/[0.15] flex-shrink-0">
                       <MapPin className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">HQ</div>
                       <div className="text-sm font-medium text-white">Missouri, USA</div>
                    </div>
                 </motion.div>
                 
                 {/* Code Lab */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-xl hover:bg-white/10 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                 >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/[0.15] flex-shrink-0">
                       <Code2 className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Lab</div>
                       <div className="text-sm font-medium text-white">Karachi, Pakistan</div>
                    </div>
                 </motion.div>
              </div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-3"
              >
                 {/* Why work with us - 2x2 Grid */}
                 <div className="p-5 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-base">
                       <CheckCircle2 className="text-neon w-5 h-5" /> Why work with us?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-neon font-bold flex-shrink-0 mt-0.5">✓</span> 
                          <span>US-Registered LLC</span>
                        </div>
                       <div className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-neon font-bold flex-shrink-0 mt-0.5">✓</span> 
                          <span>US Law Contracts</span>
                        </div>
                       <div className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-neon font-bold flex-shrink-0 mt-0.5">✓</span> 
                          <span>100% IP Transfer</span>
                        </div>
                       <div className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-neon font-bold flex-shrink-0 mt-0.5">✓</span> 
                          <span>Fixed Pricing</span>
                        </div>
                    </div>
                 </div>

                 {/* Risk-Free Guarantee - 2x2 Grid */}
                 <div className="p-5 bg-gradient-to-br from-neon/10 to-neon/5 border border-neon/30 rounded-xl">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-base">
                       <CheckCircle2 className="text-neon w-5 h-5" /> Risk-Free Guarantee
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="flex items-start gap-2">
                          <span className="text-neon font-bold flex-shrink-0 text-sm mt-0.5">✓</span> 
                          <div>
                             <div className="font-semibold text-white text-sm">30-Day Guarantee</div>
                             <div className="text-gray-400 text-xs">Refund if unsatisfied</div>
                           </div>
                        </div>
                       <div className="flex items-start gap-2">
                          <span className="text-neon font-bold flex-shrink-0 text-sm mt-0.5">✓</span> 
                          <div>
                             <div className="font-semibold text-white text-sm">1-Month Support</div>
                             <div className="text-gray-400 text-xs">Free technical support</div>
                          </div>
                       </div>
                       <div className="flex items-start gap-2 col-span-2">
                          <span className="text-neon font-bold flex-shrink-0 text-sm mt-0.5">✓</span> 
                          <div>
                             <div className="font-semibold text-white text-sm">100% Code Ownership</div>
                             <div className="text-gray-400 text-xs">Full source code & assets immediately</div>
                           </div>
                        </div>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* RIGHT: THE HIGH-TECH FORM */}
           <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 blur-[80px] pointer-events-none" />
              
              <form className="relative z-10 space-y-6" onSubmit={(e) => {
                 e.preventDefault();
                 const newErrors: {name?: string; email?: string; phone?: string} = {};
                 if (!formData.name.trim()) newErrors.name = "Name is required";
                 if (!formData.email.trim()) newErrors.email = "Email is required";
                 if (!formData.phone.trim()) newErrors.phone = "Phone is required";
                 setErrors(newErrors);
                 if (Object.keys(newErrors).length === 0) {
                    console.log("Form submitted", formData);
                 }
              }}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <InputGroup 
                       label="Name *" 
                       placeholder="John Doe" 
                       value={formData.name}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFormData({...formData, name: e.target.value});
                          if (errors.name) setErrors({...errors, name: undefined});
                       }}
                       error={errors.name}
                       required
                    />
                    <InputGroup 
                       label="Company" 
                       placeholder="TechFlow Inc." 
                       value={formData.company}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, company: e.target.value})}
                    />
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                    <InputGroup 
                       label="Email *" 
                       placeholder="john@company.com" 
                       type="email" 
                       value={formData.email}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFormData({...formData, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: undefined});
                       }}
                       error={errors.email}
                       required
                    />
                    <InputGroup 
                       label="Phone Number *" 
                       placeholder="+1 (555) 123-4567" 
                       type="tel"
                       value={formData.phone}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFormData({...formData, phone: e.target.value});
                          if (errors.phone) setErrors({...errors, phone: undefined});
                       }}
                       error={errors.phone}
                       required
                    />
                 </div>
                 
                 <div className="space-y-3">
                    <label className="text-base font-bold text-white">Project Type</label>
                    <div className="grid grid-cols-2 gap-3">
                       <SelectButton 
                          text="Migration" 
                          active={selectedType === "migration"}
                          onClick={() => setSelectedType("migration")}
                       />
                       <SelectButton 
                          text="Custom SaaS" 
                          active={selectedType === "saas"}
                          onClick={() => setSelectedType("saas")}
                       />
                       <SelectButton 
                          text="E-Commerce" 
                          active={selectedType === "ecommerce"}
                          onClick={() => setSelectedType("ecommerce")}
                       />
                       <SelectButton 
                          text="Other" 
                          active={selectedType === "other"}
                          onClick={() => setSelectedType("other")}
                       />
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="text-base font-bold text-white">Budget Range (USD)</label>
                    
                    {/* Custom Dropdown */}
                    <div className="relative">
                       <button 
                          type="button"
                          onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}
                          className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white hover:border-white/20 focus:border-neon outline-none transition-all flex items-center justify-between group"
                       >
                          <span className={formData.budget ? "text-white" : "text-gray-500"}>
                             {formData.budget 
                                ? budgetOptions.find(opt => opt.value === formData.budget)?.label 
                                : "Select budget..."}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-neon transition-all ${budgetDropdownOpen ? "rotate-180" : ""}`} />
                       </button>

                       {/* Dropdown Menu */}
                       {budgetDropdownOpen && (
                          <motion.div 
                             initial={{ opacity: 0, y: -10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="absolute top-full left-0 right-0 mt-2 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl"
                          >
                             {budgetOptions.map((option) => (
                                <button
                                   key={option.value}
                                   type="button"
                                   onClick={() => {
                                      setFormData({...formData, budget: option.value});
                                      setBudgetDropdownOpen(false);
                                   }}
                                   className={`w-full px-4 py-3 text-left text-sm font-medium transition-all flex items-center justify-between group ${
                                      formData.budget === option.value 
                                         ? "bg-neon/10 text-neon border-l-2 border-neon" 
                                         : "text-gray-300 hover:bg-white/5 hover:text-neon"
                                   }`}
                                >
                                   <span>{option.label}</span>
                                   {formData.budget === option.value && (
                                      <span className="text-neon text-sm">✓</span>
                                   )}
                                </button>
                             ))}
                          </motion.div>
                       )}

                       {/* Custom Input (if custom selected) */}
                       {formData.budget === "custom" && (
                          <motion.input
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: "auto" }}
                             exit={{ opacity: 0, height: 0 }}
                             type="text"
                             placeholder="Enter your budget (e.g., $100k - $150k)"
                             onChange={(e) => {
                                // Keep the value in formData for submission
                                setFormData({...formData, description: (formData.description || "") + (e.target.value ? ` | Custom Budget: ${e.target.value}` : "")});
                             }}
                             className="w-full mt-2 bg-black/50 border border-neon/30 rounded-xl p-4 text-white focus:border-neon outline-none transition-colors text-sm"
                          />
                       )}
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="text-base font-bold text-white">Project Details</label>
                    <textarea 
                       className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-neon outline-none h-32 resize-none transition-colors text-base"
                       placeholder="Tell us about your current stack and what you want to achieve..."
                       value={formData.description}
                       onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                 </div>

                 <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-neon text-black font-bold text-lg rounded-xl hover:bg-neon/90 transition-all flex items-center justify-center gap-2"
                 >
                    <Send className="w-5 h-5" /> Submit Application
                 </motion.button>
                 
                 <p className="text-center text-xs text-gray-500 mt-4">
                    We reply within 2 hours during EST business hours (Mon-Fri, 9AM-6PM).
                 </p>
              </form>
           </div>

        </div>
      </section>

      {/* 2. THE ENGAGEMENT PROTOCOL (Architectural Version) */}
      <section className="container mx-auto px-6 py-32 overflow-hidden">
         <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               No complex jargon. Just a straight line from problem to solution.
            </p>
         </div>

         <div className="relative">
            {/* THE GLOWING PIPELINE (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-white/5">
                {/* The Moving Beam */}
                <div className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-transparent via-neon to-transparent blur-[4px] animate-shimmer" />
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

function ContactItem({ icon: Icon, title, value }: any) {
   return (
      <motion.div 
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         className="flex items-center gap-4"
      >
         <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
            <Icon className="w-5 h-5 text-gray-300" />
         </div>
         <div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">{title}</div>
            <div className="text-white font-medium">{value}</div>
         </div>
      </motion.div>
   )
}

function InputGroup({ label, placeholder, type = "text", value, onChange, error, required }: any) {
   return (
      <div className="space-y-2">
         <label className="text-base font-bold text-white">{label}</label>
         <input 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={`w-full bg-black/50 border rounded-xl p-4 text-base text-white outline-none transition-colors ${
               error ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-neon"
            }`}
         />
         {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
      </div>
   )
}

function SelectButton({ text, active, onClick }: any) {
   return (
      <button 
         type="button"
         onClick={onClick}
         className={`p-3 rounded-lg text-sm font-bold border transition-all ${active ? 'bg-neon/10 border-neon text-neon' : 'bg-white/5 border-transparent text-gray-300 hover:bg-white/10'}`}
      >
         {text}
      </button>
   )
}

function ProtocolCard({ step, title, desc, icon: Icon }: any) {
   return (
      <div className="relative flex flex-col items-center text-center group">
         
         {/* The Icon Container */}
         <div className="relative z-10 w-24 h-24 mb-8 flex items-center justify-center">
            {/* The Big Architectural Number (Behind) */}
            <span className="absolute text-8xl font-bold text-[#1a1a1a] select-none z-0 group-hover:text-[#22d3ee]/10 transition-colors duration-500 scale-125">
               {step}
            </span>
            
            {/* The Icon Circle (Front) */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center group-hover:border-neon/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-neon transition-colors" />
            </div>
         </div>

         {/* The Text */}
         <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon transition-colors">{title}</h3>
         <p className="text-gray-400 leading-relaxed text-sm px-4">
            {desc}
         </p>
      </div>
   )
}
