"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const capabilities = [
    {
        index: "01",
        title: "High-Performance 3D Websites",
        description:
            "We build WebGL and WebGPU-powered digital experiences—fluid, physics-driven interfaces that transform passive browsing into total brand immersion.",
    },
    {
        index: "02",
        title: "Spatial UI & Brand Worlds",
        description:
            "Beyond screens. We architect immersive spatial environments where your brand exists as a living system—not just a page layout.",
    },
    {
        index: "03",
        title: "Custom Software Backends",
        description:
            "High-throughput APIs, real-time data pipelines, and deeply integrated backend systems—built to sustain the operational load of serious organizations.",
    },
    {
        index: "04",
        title: "Automated Workflow Systems",
        description:
            "We eliminate manual bottlenecks with proprietary architectural workflows: automated pipelines, document routing, and precision-engineered data flows.",
    },
];

export default function PrecisionSoftware() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const headerY = useTransform(scrollYProgress, [0, 1], [60, -60]);

    return (
        <section
            ref={containerRef}
            className="relative w-full py-32 px-6 md:px-24 bg-[var(--color-aethos-obsidian)]"
        >
            {/* Subtle vertical rule */}
            <div className="absolute left-6 md:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5E5E5]/10 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div style={{ y: headerY }} className="mb-24">
                    <div className="font-mono text-xs tracking-[0.3em] text-[#E5E5E5]/40 uppercase mb-6 flex items-center gap-4">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Module 03: Precision Software
                    </div>
                    <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[var(--color-aethos-silver)] max-w-3xl">
                        High-Spec Engineering.
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E5E5E5]/30 font-bold">
                            Zero Compromise.
                        </span>
                    </h2>
                    <p className="mt-6 text-[#E5E5E5]/60 font-light text-lg leading-relaxed max-w-2xl">
                        We develop end-to-end digital systems for organizations that refuse to settle. Every line of code is a deliberate architectural decision.
                    </p>
                </motion.div>

                {/* Capability List */}
                <div className="flex flex-col divide-y divide-[#E5E5E5]/10">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={cap.index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                                delay: i * 0.08,
                            }}
                            className="group flex flex-col md:flex-row md:items-center gap-6 py-10 cursor-default"
                        >
                            <span className="font-mono text-xs tracking-[0.3em] text-[#E5E5E5]/30 w-12 shrink-0">
                                {cap.index}
                            </span>

                            <h3 className="text-2xl md:text-3xl font-light text-white md:w-[380px] shrink-0 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#E5E5E5]/40 transition-all duration-500">
                                {cap.title}
                            </h3>

                            <p className="text-[#E5E5E5]/50 font-light leading-relaxed md:ml-auto md:max-w-md text-base opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                {cap.description}
                            </p>

                            <div className="shrink-0 ml-auto w-8 h-8 border border-[#E5E5E5]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
