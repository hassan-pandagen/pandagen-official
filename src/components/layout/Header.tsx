"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";

interface HeaderProps {
  onOpenQuote?: () => void;
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "WordPress Migration", href: "/services/wordpress-migration" },
  { name: "Custom Engineering", href: "/services/custom-engineering" },
  { name: "E-Commerce", href: "/services/ecommerce" },
];

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
          isScrolled
            ? "bg-surface/95 backdrop-blur-md border-b border-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="z-[61]">
            <Logo size="lg" />
          </Link>

          {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8">
             {navItems.map((item) => {
               if (item.hasDropdown) {
                 return (
                   <div
                     key={item.name}
                     className="relative"
                     onMouseEnter={() => setIsServicesOpen(true)}
                     onMouseLeave={() => setIsServicesOpen(false)}
                   >
                     <button
                       onClick={() => window.location.href = item.href}
                       className="text-base font-medium text-gray-300 hover:text-neon transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus tracking-wide flex items-center gap-2 py-2"
                     >
                       {item.name}
                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                     </button>

                     {/* Dropdown Menu */}
                     {isServicesOpen && (
                       <motion.div
                         initial={{ opacity: 0, y: -10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -10 }}
                         transition={{ duration: 0.2 }}
                         className="absolute top-full left-0 mt-0 w-56 bg-surface/95 backdrop-blur-md border border-border rounded-lg shadow-lg z-50 pointer-events-auto"
                       >
                         <div className="py-2">
                           {services.map((service) => (
                             <Link
                               key={service.name}
                               href={service.href}
                               onClick={() => setIsServicesOpen(false)}
                               className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon hover:bg-white/5 transition-colors"
                             >
                               {service.name}
                             </Link>
                           ))}
                         </div>
                       </motion.div>
                     )}
                   </div>
                 );
               }
               
               return (
                 <Link
                   key={item.name}
                   href={item.href}
                   className="text-base font-medium text-gray-300 hover:text-neon transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus tracking-wide"
                 >
                   {item.name}
                 </Link>
               );
             })}
           </nav>

          <div className="hidden md:flex items-center gap-4 z-[61]">
            {onOpenQuote ? (
              <button
                onClick={onOpenQuote}
                className="px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 bg-neon text-black hover:bg-[#33e0ff] shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                Get Free Quote
              </button>
            ) : (
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 bg-neon text-black hover:bg-[#33e0ff] shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                Get Free Quote
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-[61] p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-[50] flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden overflow-y-auto",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => {
          if (item.hasDropdown) {
            return (
              <div key={item.name} className="flex flex-col items-center gap-4 w-full">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-neon transition-colors"
                >
                  {item.name}
                </Link>
                <div className="flex flex-col items-center gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-medium text-gray-400 hover:text-neon transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-neon transition-colors"
            >
              {item.name}
            </Link>
          );
        })}
        {onOpenQuote ? (
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="px-8 py-3 rounded-full bg-neon text-black font-bold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Get Free Quote
          </button>
        ) : (
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 rounded-full bg-neon text-black font-bold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Get Free Quote
          </Link>
        )}
      </div>
    </>
  );
}
