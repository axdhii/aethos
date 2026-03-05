"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function ContactPortal() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <section className="relative min-h-[80vh] w-full flex items-center justify-center bg-[var(--color-aethos-obsidian)] py-24">

            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-light tracking-tight text-[var(--color-aethos-silver)] mb-4">
                        Initiate Deployment
                    </h2>
                    <p className="font-mono text-sm tracking-[0.2em] text-[#E5E5E5]/40 uppercase">
            // Secure Portal Active
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom spring-like easing
                    className="relative bg-white/[0.02] border border-[#E5E5E5]/10 backdrop-blur-2xl p-12 shadow-2xl overflow-hidden"
                    onSubmit={handleSubmit}
                >
                    {/* Subtle grid pattern inside form */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative z-10 text-center py-16"
                        >
                            <h3 className="text-2xl font-light text-white mb-2">Transmission Received</h3>
                            <p className="text-[#E5E5E5]/60">Our architects will assess your coordinates.</p>
                        </motion.div>
                    ) : (
                        <div className="relative z-10 flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1 border-b border-[#E5E5E5]/20 focus-within:border-white transition-colors duration-500">
                                    <input
                                        type="text"
                                        placeholder="IDENTIFIER"
                                        required
                                        className="w-full bg-transparent p-4 outline-none text-[var(--color-aethos-silver)] placeholder-[#E5E5E5]/30 font-mono tracking-widest text-sm"
                                    />
                                </div>
                                <div className="flex-1 border-b border-[#E5E5E5]/20 focus-within:border-white transition-colors duration-500">
                                    <input
                                        type="email"
                                        placeholder="COORDINATES (EMAIL)"
                                        required
                                        className="w-full bg-transparent p-4 outline-none text-[var(--color-aethos-silver)] placeholder-[#E5E5E5]/30 font-mono tracking-widest text-sm"
                                    />
                                </div>
                            </div>

                            <div className="w-full border-b border-[#E5E5E5]/20 focus-within:border-white transition-colors duration-500">
                                <textarea
                                    placeholder="DIRECTIVE DETAILS"
                                    rows={4}
                                    required
                                    className="w-full bg-transparent p-4 outline-none text-[var(--color-aethos-silver)] placeholder-[#E5E5E5]/30 font-mono tracking-widest text-sm resize-none"
                                />
                            </div>

                            <MagneticButton
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-8 w-full"
                            >
                                {isSubmitting ? (
                                    <span className="opacity-50 inline-block animate-pulse text-xs tracking-widest">Encrypting...</span>
                                ) : (
                                    "Transmit"
                                )}
                            </MagneticButton>
                        </div>
                    )}
                </motion.form>
            </div>
        </section>
    );
}
