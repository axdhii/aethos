"use client";

import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader";
import ContactPortal from "@/components/ContactPortal";
import DigitalFlagship from "@/components/DigitalFlagship";
import OperationalIntelligence from "@/components/OperationalIntelligence";
import SpatialCommerce from "@/components/SpatialCommerce";
import TechnicalSovereignty from "@/components/TechnicalSovereignty";
import CapabilityTechStack from "@/components/CapabilityTechStack";
import CapabilityProcess from "@/components/CapabilityProcess";
import CapabilitySovereign from "@/components/CapabilitySovereign";
import CapabilityOptimization from "@/components/CapabilityOptimization";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false, // 3D canvas must render on client
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[var(--color-aethos-obsidian)] text-[var(--color-aethos-silver)] selection:bg-white selection:text-black">
      <Preloader />

      {/* 100vh Hero containing the 3D Engine and Title */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center pointer-events-none">
        <Scene />
        <div className="relative z-10 flex flex-col items-center mt-[-10vh]">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#E5E5E5]/30 drop-shadow-2xl">
            AETHOS
          </h1>
          <p className="mt-8 max-w-[800px] text-center text-xl md:text-2xl text-[#E5E5E5]/80 font-light tracking-wide drop-shadow-md">
            Engineering the Inevitable.
          </p>
          <div className="mt-12 text-xs md:text-sm font-mono tracking-widest text-[#E5E5E5]/60 border border-[#E5E5E5]/10 px-6 py-4 rounded-xl backdrop-blur-md max-w-2xl text-center leading-relaxed">
            Aethos is not a design studio. We are a digital engineering firm. We build the infrastructure that powers high-spec visionaries.
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#E5E5E5]/50 to-transparent" />
        </div>
      </section>

      {/* Module 1: The Digital Flagship */}
      <div className="relative z-10">
        <DigitalFlagship />
      </div>

      {/* Module 2: Operational Intelligence */}
      <div className="relative z-10">
        <OperationalIntelligence />
      </div>

      {/* Module 3: Spatial Commerce */}
      <div className="relative z-10">
        <SpatialCommerce />
      </div>

      {/* Module 4: Technical Sovereignty */}
      <div className="relative z-10">
        <TechnicalSovereignty />
      </div>

      {/* The Capability Protocol */}
      <div className="relative z-10 bg-black/20 border-t border-white/5 mt-16 pb-16">
        <div className="w-full flex justify-center pt-24 pb-8">
          <div className="text-xs font-mono tracking-widest text-[#E5E5E5]/40 border border-[#E5E5E5]/10 px-8 py-2 rounded-full backdrop-blur-xl">
            THE CAPABILITY PROTOCOL
          </div>
        </div>
        <CapabilityTechStack />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
        <CapabilityProcess />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
        <CapabilitySovereign />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
        <CapabilityOptimization />
      </div>

      {/* Glassmorphic Contact Edge Node */}
      <div className="relative z-20 bg-[var(--color-aethos-obsidian)]">
        <ContactPortal />
      </div>

    </main>
  );
}

