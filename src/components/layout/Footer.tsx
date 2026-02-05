"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import QuoteModal from "@/components/ui/QuoteModal";

interface FooterProps {
  onOpenQuote?: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden">
      
      {/* 1. THE PREMIUM CTA CARD */}
      <div className="container mx-auto px-6 relative z-20 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/[0.15] bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl p-8 md:p-16 lg:p-20 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
        >
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-neon/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6">
              Ready to Build <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-blue-400 to-purple-400">
                Something Legendary?
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 md:mb-12">
              Start your journey with a simple conversation or dive straight into a proposal.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 md:gap-6 max-w-4xl mx-auto">
                 
                 {/* OPTION 1: BOOK A CALL */}
                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   data-cal-namespace="discovery"
                   data-cal-link="pandagen/discovery"
                   data-cal-config='{"layout":"month_view"}'
                   className="group flex-1 flex items-center justify-between px-6 md:px-8 py-5 md:py-6 bg-neon hover:bg-neon/90 text-black rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                 >
                    <div className="text-left flex-1">
                        <div className="flex items-center gap-2 font-bold text-base md:text-lg mb-1">
                            <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" /> Book a Call
                        </div>
                        <div className="text-[11px] md:text-xs opacity-70 font-medium">15-min Strategy Chat</div>
                    </div>
                    <div className="bg-black/10 p-2 rounded-full group-hover:translate-x-1 transition-transform ml-4 flex-shrink-0">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                 </motion.button>

                 {/* OPTION 2: GET A QUOTE */}
                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => setIsQuoteModalOpen(true)}
                   className="group flex-1 flex items-center justify-between px-6 md:px-8 py-5 md:py-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-2xl transition-all"
                 >
                    <div className="text-left flex-1">
                        <div className="flex items-center gap-2 font-bold text-base md:text-lg mb-1">
                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" /> Get Quote
                        </div>
                        <div className="text-[11px] md:text-xs text-gray-500 font-medium group-hover:text-gray-400 transition-colors">Fixed Price, No Surprises</div>
                    </div>
                    <div className="p-2 rounded-full group-hover:translate-x-1 transition-transform text-gray-500 group-hover:text-white ml-4 flex-shrink-0">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                 </motion.button>

            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. THE BRAND WATERMARK */}
      <div className="absolute bottom-[20%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
         <div className="text-[15vw] md:text-[20vw] font-bold text-white whitespace-nowrap leading-none select-none text-center tracking-tighter">
            PANDAGEN
         </div>
      </div>

      {/* 3. THE LINKS */}
      <div className="container mx-auto px-6 border-t border-white/10 pt-12 md:pt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12">
           
           {/* BRAND COLUMN */}
           <div className="col-span-1">
              <Link href="/" className="text-2xl font-bold text-white mb-6 block tracking-tight">
                PANDA<span className="text-neon">GEN</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 Enterprise-grade web development. Built for speed. Priced for growth.
              </p>
              <div className="flex gap-2 flex-wrap">
                 <a href="https://www.linkedin.com/company/pandacodegen" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-neon transition-all text-gray-400">
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                 </a>
                 <a href="https://x.com/PandaCodeGen" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-neon transition-all text-gray-400">
                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                 </a>
                 <a href="https://www.threads.com/@pandacodegen" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Threads" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-neon transition-all text-gray-400">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.024-5.093.853-6.478 2.459-1.404 1.627-2.136 3.982-2.163 7.003v.012c.027 3.02.76 5.372 2.162 7 1.385 1.605 3.568 2.434 6.479 2.459 2.503-.016 4.416-.595 5.69-1.72 1.044-.922 1.72-2.211 2.004-3.83-.277-.104-.562-.196-.853-.283a16.05 16.05 0 0 0-5.59-.924c-3.273 0-5.464 1.572-5.464 3.923 0 1.175.517 2.24 1.424 2.93.914.697 2.17 1.055 3.634 1.055 1.426 0 2.654-.315 3.654-.938.845-.526 1.47-1.214 1.858-2.046.02.03.041.059.062.087.963 1.31 2.233 1.975 3.773 1.975.546 0 1.058-.069 1.522-.204v-2.02c-.242.048-.487.074-.745.074-1.135 0-1.882-.563-2.216-1.677-.144-.484-.216-1.057-.216-1.703v-3.768c0-3.273-2.186-5.465-5.464-5.465-1.636 0-3.025.445-4.127 1.324-1.103.88-1.69 2.088-1.746 3.594l2.053.172c.096-1.867 1.277-2.842 3.82-2.842 2.13 0 3.215.916 3.215 2.718v1.314c-.972-.43-2.087-.65-3.318-.65-1.636 0-3.025.437-4.127 1.301-1.1.862-1.677 2.03-1.718 3.473v.058c.042 1.385.62 2.503 1.72 3.324 1.098.82 2.485 1.237 4.123 1.237 1.585 0 2.944-.435 4.043-1.293.27-.21.52-.442.753-.693.234.445.533.848.894 1.207 1.006.999 2.403 1.506 4.15 1.506.546 0 1.058-.069 1.522-.204v-2.02c-.242.048-.487.074-.745.074-1.135 0-1.882-.563-2.216-1.677-.144-.484-.216-1.057-.216-1.703v-3.768c0-1.85-.606-3.34-1.797-4.43-1.193-1.092-2.832-1.646-4.877-1.646z"/>
                    </svg>
                 </a>
                 <a href="https://www.reddit.com/user/PandaCodeGen/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Reddit" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-neon transition-all text-gray-400">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 14.885c.123.815-.034 1.61-.415 2.324-.38.713-.965 1.29-1.693 1.668-1.457.755-3.375 1.123-5.4 1.123-2.025 0-3.943-.368-5.4-1.123-.728-.378-1.314-.955-1.693-1.668-.381-.714-.538-1.51-.415-2.324.083-.553.295-1.052.607-1.478.311-.426.72-.768 1.195-1.008.476-.24 1.007-.373 1.57-.373.367 0 .728.062 1.073.183.345.121.665.3.949.527.283-.185.59-.336.913-.449.324-.113.664-.17 1.01-.17h2c.346 0 .686.057 1.01.17.323.113.63.264.913.449.284-.227.604-.406.949-.527.345-.121.706-.183 1.073-.183.563 0 1.094.133 1.57.373.475.24.884.582 1.195 1.008.312.426.524.925.607 1.478zM9.5 13.5c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25.56 1.25 1.25 1.25 1.25-.56 1.25-1.25zm7.5 0c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25.56 1.25 1.25 1.25 1.25-.56 1.25-1.25zm-9.438 3.563c.115-.116.182-.273.182-.438 0-.165-.067-.322-.182-.437-.115-.116-.272-.182-.437-.182-.165 0-.322.066-.438.182-.972.972-.97 2.557 0 3.527.116.116.273.182.438.182.165 0 .322-.066.437-.182.116-.115.182-.272.182-.437 0-.165-.066-.322-.182-.438-.543-.543-.543-1.424 0-1.967zm7.626-.875c-.165 0-.322.066-.437.182-.116.115-.182.272-.182.437s.066.322.182.438c.543.543.543 1.424 0 1.967-.116.116-.182.273-.182.438 0 .165.066.322.182.437.115.116.272.182.437.182.165 0 .322-.066.438-.182.972-.97.972-2.555 0-3.527-.116-.116-.273-.182-.438-.182z"/>
                    </svg>
                 </a>
                 <a href="https://www.facebook.com/profile.php?id=61587111848962" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-neon transition-all text-gray-400">
                    <Facebook className="w-5 h-5" aria-hidden="true" />
                 </a>
                 <a href="https://www.instagram.com/pandacodegen/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-neon transition-all text-gray-400">
                    <Instagram className="w-5 h-5" aria-hidden="true" />
                 </a>
                 <a href="mailto:info@pandacodegen.com" aria-label="Email us at info@pandacodegen.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-neon transition-all text-gray-400">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                 </a>
              </div>
           </div>
            
           {/* SERVICES */}
           <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                 <li><Link href="/services/wordpress-migration" className="hover:text-neon transition-colors">WordPress Migration</Link></li>
                 <li><Link href="/services/custom-engineering" className="hover:text-neon transition-colors">Custom Engineering</Link></li>
                 <li><Link href="/services/ecommerce" className="hover:text-neon transition-colors">E-Commerce</Link></li>
              </ul>
           </div>

           {/* COMPANY */}
           <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                 <li><Link href="/about" className="hover:text-neon transition-colors">About Us</Link></li>
                 <li><Link href="/contact" className="hover:text-neon transition-colors">How We Work</Link></li>
                 <li><Link href="/work" className="hover:text-neon transition-colors">Case Studies</Link></li>
                 <li><Link href="/pricing" className="hover:text-neon transition-colors">Pricing</Link></li>
              </ul>
           </div>

           {/* LEGAL */}
           <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Legal</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                 <li><Link href="/privacy" className="hover:text-neon transition-colors">Privacy Policy</Link></li>
                 <li><Link href="/terms" className="hover:text-neon transition-colors">Terms of Service</Link></li>
                 <li><Link href="/cookies" className="hover:text-neon transition-colors">Cookies</Link></li>
              </ul>
           </div>

           {/* CONTACT */}
           <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                 <li>
                    <div className="text-gray-400 font-medium mb-1 flex items-center gap-2">
                       <MapPin className="w-4 h-4" /> HQ
                    </div>
                    <div>Missouri, USA</div>
                 </li>
                 <li>
                    <div className="text-gray-400 font-medium mb-1 flex items-center gap-2">
                       <MapPin className="w-4 h-4" /> Lab
                    </div>
                    <div>Karachi, Pakistan</div>
                 </li>
                 <li>
                    <div className="text-gray-400 font-medium mb-1 flex items-center gap-2">
                       <Phone className="w-4 h-4" /> Phone
                    </div>
                    <Link href="tel:+13022504340" className="hover:text-neon transition-colors">+1 (302) 250-4340</Link>
                 </li>
                 <li>
                    <div className="text-gray-400 font-medium mb-1 flex items-center gap-2">
                       <Mail className="w-4 h-4" /> Email
                    </div>
                    <Link href="mailto:info@pandacodegen.com" className="hover:text-neon transition-colors">info@pandacodegen.com</Link>
                 </li>
              </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-white/5 pt-8 gap-4">
           <p>© 2026 PandaGen Code LLC. All rights reserved.</p>
           <p className="text-gray-500">Built with Next.js • Engineered for Scale</p>
        </div>
        </div>

        {/* Quote Modal */}
        <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </footer>
        );
        }
