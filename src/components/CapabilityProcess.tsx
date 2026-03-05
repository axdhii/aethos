"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROCESS_STEPS = [
    {
        title: "Technical Discovery",
        desc: "We map your business requirements and bottlenecks.",
    },
    {
        title: "Architectural Blueprint",
        desc: "Wireframing and design-system development.",
    },
    {
        title: "Agile Deployment",
        desc: "High-speed coding with continuous updates.",
    },
    {
        title: "Performance Audit",
        desc: "Rigorous testing for speed, SEO, and security before launch.",
    }
];

export default function CapabilityProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-24 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    The Aethos Process.
                </h2>
                <p className="text-lg text-[#E5E5E5]/70 leading-relaxed font-light">
                    Proprietary workflows and architectural precision. Aethos Engineers personally audit every line of code to ensure it meets our Standard of Excellence.
                </p>
            </div>

            <div className="relative w-full max-w-3xl flex flex-col gap-16">
                {/* Background Line */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

                {/* Animated Fill Line */}
                <motion.div
                    className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-white to-transparent origin-top"
                    style={{ height: lineHeight }}
                />

                {PROCESS_STEPS.map((step, index) => (
                    <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        {/* Dot */}
                        <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10" />

                        {/* Content */}
                        <div className="ml-12 md:ml-0 md:w-5/12">
                            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md">
                                <h3 className="text-xl font-medium text-white mb-3 tracking-wide">
                                    <span className="text-[#E5E5E5]/30 font-mono text-sm mr-3">0{index + 1}</span>
                                    {step.title}
                                </h3>
                                <p className="text-[#E5E5E5]/60 font-light leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
