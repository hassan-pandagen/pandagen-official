"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partners = [
  { name: "NOVATECH", color: "#06B6D4" },
  { name: "Fixteria", color: "#A855F7" },
  { name: "TRUVISION", color: "#F97316" },
];

export default function ProofMarquee() {
  return (
    <section className="py-20 border-y border-border bg-surface/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm uppercase tracking-widest"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      {/* Desktop: Infinite scroll marquee */}
      <div className="hidden md:block relative">
        {/* Gradient overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Infinite scroll marquee */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-4 group cursor-pointer whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
            >
              <span
                className="text-2xl font-bold tracking-tighter transition-all duration-300"
                style={{
                  color: partner.color,
                  opacity: 0.4,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.4";
                }}
              >
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Swiper carousel */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="px-6"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={`${partner.name}-${index}`}>
              <div className="flex justify-center">
                <span
                  className="text-xl font-bold tracking-tighter"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stats row */}
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Successful Projects" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
