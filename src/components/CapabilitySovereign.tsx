"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useInView, motion } from "framer-motion";
import * as THREE from "three";

function SovereignShield() {
    const shieldRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (shieldRef.current) {
            shieldRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={shieldRef}>
                {/* A stylized geometric shield/locker base */}
                <boxGeometry args={[2, 2.5, 0.5]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    metalness={0.9}
                    roughness={0.1}
                    clearcoat={1}
                    envMapIntensity={2}
                    wireframe={true}
                />
            </mesh>
            {/* Inner Core */}
            <mesh position={[0, 0, 0]}>
                <icosahedronGeometry args={[0.6, 0]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={0.2}
                    wireframe={false}
                />
            </mesh>
        </Float>
    );
}

export default function CapabilitySovereign() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    return (
        <section ref={containerRef} className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center">

            {/* 3D Visual Side */}
            <div className="md:w-1/2 w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.01]">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                {isInView && (
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ pointerEvents: 'none' }}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[5, 5, 5]} penumbra={1} intensity={2} color="#ffffff" />
                        <Environment preset="city" />
                        <SovereignShield />
                    </Canvas>
                )}
            </div>

            {/* Copy Side */}
            <div className="md:w-1/2 flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        <span className="text-sm font-mono tracking-widest uppercase text-white">Encrypted</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Sovereign Systems.
                    </h2>
                    <p className="text-lg text-[#E5E5E5]/70 leading-relaxed font-light">
                        Your data is your most valuable asset. Our custom software solutions focus on Data Sovereignty—ensuring your files and documents are handled via private, secure internal servers, not third-party black boxes.
                    </p>
                </motion.div>
            </div>

        </section>
    );
}
