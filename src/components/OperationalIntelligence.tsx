"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OperationalIntelligence() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="relative w-full py-32 px-6 md:px-24 bg-[var(--color-aethos-obsidian)] flex flex-col items-center justify-center">

            <motion.div style={{ y: yMove }} className="w-full max-w-6xl">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="font-mono text-xs tracking-[0.3em] text-[#E5E5E5]/40 uppercase mb-6 flex items-center justify-center gap-4">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Module 02: Operational Intelligence
                    </div>

                    <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[var(--color-aethos-silver)] mb-6">
                        The Invisible Infrastructure.
                    </h2>

                    <p className="text-[#E5E5E5]/60 text-lg font-light leading-relaxed">
                        We architect bespoke ERP systems, high-throughput custom software, and deeply integrated corporate portals—built around your organization's logic, not a template.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Main Cell */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="md:col-span-2 border border-[#E5E5E5]/10 bg-white/[0.02] backdrop-blur-xl p-10 md:p-14 flex flex-col justify-between gap-8 min-h-[320px]"
                    >
                        <div>
                            <h3 className="font-mono tracking-[0.2em] text-[#E5E5E5]/40 uppercase text-xs mb-4">Core Capability</h3>
                            <p className="text-4xl md:text-5xl font-light text-white leading-tight">
                                Custom Software<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E5E5E5]/30">Development</span>
                            </p>
                        </div>
                        <p className="text-[#E5E5E5]/60 font-light leading-relaxed max-w-md">
                            We bypass off-the-shelf limitations. Every system we deliver is architected precisely around your organization's real operational logic—with zero unnecessary abstraction.
                        </p>
                    </motion.div>

                    {/* ERP Cell */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="border border-[#E5E5E5]/10 bg-white/[0.02] backdrop-blur-xl p-8 flex flex-col justify-between gap-6 min-h-[320px] group"
                    >
                        <h3 className="font-mono tracking-[0.2em] text-[#E5E5E5]/40 uppercase text-xs">ERP Systems</h3>
                        <div>
                            <div className="text-3xl font-light text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#E5E5E5]/40 transition-all duration-300">
                                Enterprise Resource Planning
                            </div>
                            <p className="text-[#E5E5E5]/50 mt-3 font-light text-sm leading-relaxed">
                                Full-scale resource planning, inventory control, and departmental workflow automation—all in one proprietary system.
                            </p>
                        </div>
                    </motion.div>

                    {/* Data Sovereignty Cell */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-3 border border-[#E5E5E5]/10 bg-[#E5E5E5]/[0.04] backdrop-blur-xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8"
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-light text-white mb-3">Encrypted Data-Sovereignty</h3>
                            <p className="text-[#E5E5E5]/50 font-light leading-relaxed">
                                Secure, internally isolated document networks and private data pipelines. We build the infrastructure that your teams rely on without any exposure to public-facing systems.
                            </p>
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#E5E5E5]/30 flex flex-col gap-1 shrink-0">
                            <span>Encryption: AES-256</span>
                            <span>Access: Private</span>
                            <span>Surface: Zero-Public</span>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
}
