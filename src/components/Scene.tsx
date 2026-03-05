"use client";

import { Canvas, extend } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import FluidShaderMaterial from "./FluidShaderMaterial";

extend({ FluidShaderMaterial });

function BackgroundShader() {
    const materialRef = useRef<any>(null);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uTime = state.clock.elapsedTime;
            // Pass mouse coordinates (-1 to 1 mapped to 0 to 1)
            materialRef.current.uMouse.set(
                (state.pointer.x + 1) / 2,
                (state.pointer.y + 1) / 2
            );
            // Pass resolution
            materialRef.current.uResolution.set(window.innerWidth, window.innerHeight);

            // Calculate and pass scroll depth (0 to 1)
            const scrollY = window.scrollY;
            const maxScroll = Math.max(
                document.body.scrollHeight - window.innerHeight,
                1 // Prevent division by zero
            );
            const scrollPercent = scrollY / maxScroll;
            // Lerp the scroll value slightly for smoothness
            materialRef.current.uScroll = THREE.MathUtils.lerp(
                materialRef.current.uScroll || 0,
                scrollPercent,
                0.05
            );
        }
    });

    return (
        <mesh position={[0, 0, -5]}>
            <planeGeometry args={[100, 100]} />
            {/* @ts-ignore - R3F extend function intrinsic types often conflict in Next 15 */}
            <fluidShaderMaterial ref={materialRef} transparent={true} />
        </mesh>
    );
}

function TheCore() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Subtle rotation to make it feel alive
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            // Add parallax movement based on mouse
            meshRef.current.rotation.y += delta * 0.3;
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, (state.pointer.x * 0.5), 0.1);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, (state.pointer.y * 0.5), 0.1);
        }
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2, 0]} />
                <meshPhysicalMaterial
                    color="#000000"
                    roughness={0.1}
                    metalness={0.9}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    wireframe={true}
                    emissive="#1a1a1a"
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-auto">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                dpr={[1, 2]}
            >
                <BackgroundShader />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Suspense fallback={null}>
                    <TheCore />
                    <Environment preset="city" />
                    <Preload all />
                </Suspense>

                {/* Cinematic Post-Processing */}
                <EffectComposer multisampling={4}>
                    <ChromaticAberration
                        blendFunction={BlendFunction.NORMAL} // blend mode
                        offset={new THREE.Vector2(0.002, 0.002)} // color offset
                        radialModulation={false}
                        modulationOffset={0}
                    />
                    <Noise opacity={0.04} blendFunction={BlendFunction.OVERLAY} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            fluidShaderMaterial: any;
        }
    }
}

