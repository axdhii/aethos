"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import { useInView } from "framer-motion";

// Define network nodes (Technologies)
const nodes = [
    { position: [-3, 2, 0], label: "Next.js" },
    { position: [3, 2, 1], label: "WebGPU" },
    { position: [-2, -2, -1], label: "PostgreSQL" },
    { position: [2, -2, 0], label: "AWS Core" },
    { position: [0, 3, -2], label: "Three.js" },
    { position: [4, 0, -2], label: "GSAP" },
    { position: [-4, 0, 1], label: "Framer Motion" },
];

function NetworkMap({ inView }: { inView: boolean }) {
    const groupRef = useRef<THREE.Group>(null);
    const coreRef = useRef<THREE.Mesh>(null);

    // Rotate the entire network slowly
    useFrame((state, delta) => {
        if (!inView) return; // GPU Optimization
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
            groupRef.current.rotation.x += delta * 0.05;
        }
        if (coreRef.current) {
            coreRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            {/* The Central Aethos Core */}
            <Sphere ref={coreRef} args={[0.5, 32, 32]} position={[0, 0, 0]}>
                <meshBasicMaterial color="#ffffff" wireframe={true} />
            </Sphere>

            {/* Nodes and Connection Lines */}
            {nodes.map((node, i) => (
                <group key={i}>
                    {/* The Node */}
                    <Sphere args={[0.1, 16, 16]} position={node.position as [number, number, number]}>
                        <meshBasicMaterial color="#E5E5E5" />
                    </Sphere>

                    {/* Line connecting node to core */}
                    <Line
                        points={[[0, 0, 0], node.position as [number, number, number]]}
                        color="#E5E5E5"
                        lineWidth={0.5}
                        opacity={0.2}
                        transparent
                    />

                    {/* Node Label (HTML attached to 3D via absolute positioning managed manually or just CSS overlays. Here we use an abstract approach indicating tech stack) */}
                    {/* Using 3D text is heavy, so we rely on the aesthetic abstraction */}
                </group>
            ))}

            {/* Cross-connections to form a web */}
            {nodes.map((node, i) => {
                const nextNode = nodes[(i + 1) % nodes.length];
                return (
                    <Line
                        key={`cross-${i}`}
                        points={[node.position as [number, number, number], nextNode.position as [number, number, number]]}
                        color="#E5E5E5"
                        lineWidth={0.2}
                        opacity={0.1}
                        transparent
                    />
                );
            })}
        </group>
    );
}

export default function TechnicalSovereignty() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { margin: "200px" });

    return (
        <section className="relative w-full h-[120vh] bg-[var(--color-aethos-obsidian)] flex flex-col md:flex-row items-center justify-between px-6 md:px-24">

            <div className="md:w-1/2 z-10">
                <div className="font-mono text-xs tracking-[0.3em] text-[#E5E5E5]/40 uppercase mb-8 flex items-center gap-4">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Module 04: Technical Sovereignty
                </div>

                <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[var(--color-aethos-silver)] mb-6">
                    Total Control. <br />
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E5E5E5]/30">
                        Headless Architecture.
                    </span>
                </h2>

                <p className="text-[#E5E5E5]/60 text-lg font-light leading-relaxed max-w-md">
                    We leverage high-speed backends and automated routing logic to ensure your brand remains as fast as it is functional. Security by design. Performance by default.
                </p>

                {/* Simulated Stack List */}
                <ul className="mt-12 flex flex-col gap-4 border-l border-[#E5E5E5]/20 pl-6">
                    <li className="font-mono text-sm tracking-widest text-[#E5E5E5]/80 uppercase">Next.js Edge Delivery</li>
                    <li className="font-mono text-sm tracking-widest text-[#E5E5E5]/60 uppercase">Sanity Headless CMS</li>
                    <li className="font-mono text-sm tracking-widest text-[#E5E5E5]/40 uppercase">AWS Sovereign Cloud</li>
                    <li className="font-mono text-sm tracking-widest text-[#E5E5E5]/20 uppercase">WebGPU Shader Compute</li>
                </ul>
            </div>

            {/* 3D Network Map Area */}
            <div ref={containerRef} className="relative md:w-1/2 h-[600px] w-full mt-12 md:mt-0 opacity-80 mix-blend-screen pointer-events-none">
                <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                    <NetworkMap inView={isInView} />
                </Canvas>
            </div>

        </section>
    );
}
