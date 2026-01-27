"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Database, Code2, ShoppingCart } from "lucide-react";

interface ServiceSectionProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    features: string[];
    align: "left" | "right";
    icon: "database" | "code" | "shopping-cart";
    gradient: string;
    children?: React.ReactNode;
}

const iconMap = {
    database: Database,
    code: Code2,
    "shopping-cart": ShoppingCart,
};

export default function ServiceSection({
    id,
    title,
    subtitle,
    description,
    tags,
    features,
    align,
    icon,
    gradient,
    children,
}: ServiceSectionProps) {
    const Icon = iconMap[icon];
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={ref} className="container mx-auto px-6">
            <motion.div
                style={{ y, opacity }}
                className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 ${align === "right" ? "lg:flex-row-reverse" : ""
                    }`}
            >
                {/* TEXT SIDE */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-bold text-white/5">{id}</span>
                        <div
                            className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} border border-white/10`}
                        >
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
                    <p className="text-xl text-neon mb-6 font-medium">{subtitle}</p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {tags.map((tag: string, i: number) => (
                            <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <ul className="space-y-3">
                        {features.map((feature: string, i: number) => (
                            <li
                                key={i}
                                className="flex items-center gap-3 text-gray-300"
                            >
                                <CheckCircle2 className="w-5 h-5 text-neon" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* VISUAL SIDE */}
                <div className="flex-1 min-h-[400px]">
                    <div
                        className={`w-full h-full rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-2 relative overflow-hidden group`}
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}
                        />
                        {children}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
