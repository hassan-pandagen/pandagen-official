"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo({ size = "lg" }: { size?: "sm" | "lg" }) {
  const height = size === "sm" ? 28 : 36;

  return (
    <motion.div
      className="relative inline-flex items-center"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Image
        src="/logo.png"
        alt="PandaGen Code Lab"
        width={655}
        height={113}
        style={{ height: `${height}px`, width: "auto" }}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
