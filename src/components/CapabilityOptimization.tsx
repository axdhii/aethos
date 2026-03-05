"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CapabilityOptimization() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    return (
        <section ref={containerRef} className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

            {/* Copy Side */}
            <div className="md:w-1/2 flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Optimization & Reach.
                    </h2>
                    <p className="text-lg text-[#E5E5E5]/70 leading-relaxed font-light">
                        A website is a sales engine. We optimize every pixel for Sub-Second Latency and Global SEO, ensuring your brand isn't just seen, but remembered. High-fidelity UI isn't a luxury—it's a competitive advantage.
                    </p>
                </motion.div>
            </div>

            {/* Visual Chart Side */}
            <div className="md:w-1/2 w-full flex justify-center">
                <div className="w-full max-w-md p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
                    <h3 className="text-sm font-mono tracking-widest text-[#E5E5E5]/50 mb-8 uppercase">Latency Comparison</h3>

                    {/* Standard Site Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-[#E5E5E5]/70 mb-2">
                            <span>Standard Architecture</span>
                            <span className="font-mono text-red-400">4.8s</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-red-500/50"
                                initial={{ width: "0%" }}
                                animate={isInView ? { width: "85%" } : { width: "0%" }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                            />
                        </div>
                    </div>

                    {/* Aethos Site Bar */}
                    <div>
                        <div className="flex justify-between text-sm text-white font-medium mb-2">
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                Aethos Optimized
                            </span>
                            <span className="font-mono text-white">&lt; 0.8s</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                initial={{ width: "0%" }}
                                animate={isInView ? { width: "15%" } : { width: "0%" }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            />
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <p className="text-xs text-[#E5E5E5]/40 font-light leading-relaxed">
                            Metrics based on LCP (Largest Contentful Paint) benchmarks. Aethos Engineers personally audit every line of code to achieve near-instantaneous edge response times.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
