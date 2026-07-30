"use client";

import React from "react";
import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import ScrollFloat from "@/components/ui/ScrollFloat";
import SpecularButton from "@/components/SpecularButton";
import LanyardWrapper from "@/components/LanyardWrapper";

export function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 relative z-[999]">
      {/* Main Soft Yellow Container Card */}
      <div className="relative w-full bg-[#FAF6E8] border border-[#EDE4CD] rounded-[36px] p-8 sm:p-12 lg:p-16 overflow-visible shadow-xs z-[999]">
        
        {/* Background Subtle Gradient Blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F4E071]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D4E6F8]/40 rounded-full blur-3xl pointer-events-none font-sans" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            

            {/* Editorial Serif Headline (Matches Reference Image Style) */}
            <ScrollFloat
              as="h1"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1C1B18] tracking-tight leading-[1.08]"
            >
              Your <span className="text-[#8C6B1F]">Health</span>,<br />Smarter.
            </ScrollFloat>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-[#524E43] font-sans font-normal max-w-xl leading-relaxed">
              We don&apos;t believe in one-size-fits-all medicine. At Hippo Health, every patient receives thoughtful, doctor-verified care — powered by real-time smartwatch biometrics, 3D anatomical modeling, and 10+ clinical AI engines.
            </p>

            {/* Primary Action & Avatar Proof Stack */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <SpecularButton
                href="#interactive-showcase"
                size="custom"
                radius={9999}
                tint="#1C1B18"
                tintOpacity={1}
                textColor="#ffffff"
                lineColor="#ffffff"
                baseColor="#525252"
                intensity={1.2}
                shineSize={12}
                shineFade={35}
                thickness={1.5}
                speed={0.4}
                followMouse={true}
                proximity={300}
                className="px-7 py-4 text-xs font-bold tracking-wider uppercase shadow-md group font-sans"
              >
                <span>Book Consultation</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <MaterialIcon name="arrow_forward" className="text-sm text-white" />
                </span>
              </SpecularButton>

              
            </div>

            

          </div>

          {/* Right Column: Two Interactive 3D Lanyard Cards (Hanging from above Navbar) */}
          <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-[550px] w-full flex justify-center items-center overflow-visible z-[9999]">
            
            <div className="absolute -top-44 sm:-top-56 md:-top-64 left-0 right-0 h-[780px] sm:h-[850px] grid grid-cols-2 gap-2 z-[9999] pointer-events-auto">
              <div className="w-full h-full relative">
                <LanyardWrapper
                  position={[0, 0, 15]}
                  gravity={[0, -40, 0]}
                  fov={22}
                  frontImage="/kushal_b_k.jpg"
                  backImage="/debug_thugs_logo.png"
                  imageFit="cover"
                  lanyardWidth={1.2}
                />
              </div>
              <div className="w-full h-full relative">
                <LanyardWrapper
                  position={[0, 0, 15]}
                  gravity={[0, -40, 0]}
                  fov={22}
                  frontImage="/bhuvan_rai.jpg"
                  backImage="/debug_thugs_logo.png"
                  imageFit="cover"
                  lanyardWidth={1.2}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
