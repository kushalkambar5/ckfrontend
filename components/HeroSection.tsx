"use client";

import React from "react";
import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import ScrollFloat from "@/components/ui/ScrollFloat";

export function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
      {/* Main Soft Yellow Container Card (Matching Reference Image) */}
      <div className="relative w-full bg-[#FAF6E8] border border-[#EDE4CD] rounded-[36px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xs">
        
        {/* Background Subtle Gradient Blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F4E071]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D4E6F8]/40 rounded-full blur-3xl pointer-events-none" />

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
              <a
                href="#interactive-showcase"
                className="inline-flex items-center gap-3 bg-[#1C1B18] hover:bg-[#33312B] text-white px-7 py-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
              >
                <span>Book Consultation</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <MaterialIcon name="arrow_forward" className="text-sm text-white" />
                </span>
              </a>

              {/* Patient Avatars Stack */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#E8F2FC] flex items-center justify-center text-xs font-bold text-[#1C5396]">
                    Dr.S
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#E6F5EE] flex items-center justify-center text-xs font-bold text-[#1E734C]">
                    Dr.J
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#FBEBF2] flex items-center justify-center text-xs font-bold text-[#942A5C]">
                    Dr.M
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#F4E071] flex items-center justify-center text-xs font-bold text-[#6B5A10]">
                    +10k
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#1C1B18] font-serif tracking-wide">
                    10,000+
                  </span>
                  <span className="text-[11px] text-[#736E5E] font-medium leading-none">
                    Happy Patients & Clinics
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Tags */}
            <div className="pt-4 border-t border-[#E8DFC9] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#595446]">
              <div className="flex items-center gap-2">
                <MaterialIcon name="verified_user" className="text-base text-[#2C7A4D]" />
                <span>HIPAA & GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="stethoscope" className="text-base text-[#1C5396]" />
                <span>Doctor Verified AI</span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="vital_signs" className="text-base text-[#942A5C]" />
                <span>Google Health API Sync</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Graphic Composition (Matching Reference Image Shapes) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
              
              {/* Main Vertical Portrait Oval/Pill Shape Card */}
              <div className="absolute left-0 top-4 w-52 sm:w-60 h-80 rounded-[100px] bg-gradient-to-b from-[#A5D4E6] to-[#6BA6C9] p-3 shadow-lg overflow-hidden border-2 border-white/60 flex flex-col items-center justify-end text-center">
                <div className="absolute inset-0 bg-[#7BB1D1]/30 backdrop-blur-2xs" />
                
                {/* Simulated Doctor Photo / Graphic */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                  <div className="w-24 h-24 rounded-full bg-white/90 shadow-md flex items-center justify-center mb-3">
                    <MaterialIcon name="stethoscope" className="text-4xl text-[#1C5396]" />
                  </div>
                  <span className="bg-white/90 text-[#1C5396] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs mb-1">
                    Doctor Review
                  </span>
                  <p className="text-white text-xs font-semibold drop-shadow-xs">
                    Dr. Sarah Chen, MD
                  </p>
                  <p className="text-white/80 text-[10px]">
                    Verified Care Plan #8491
                  </p>
                </div>
              </div>

              {/* Overlapping Pill Shape Card: Featured AI Diagnostic Treatments */}
              <div className="absolute right-2 top-0 w-44 sm:w-48 h-64 rounded-[80px] bg-[#FFFFFF] border border-[#E8E2D2] p-4 shadow-md flex flex-col items-center text-center justify-between">
                <div className="w-full flex items-center justify-between px-2 pt-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8370]">
                    AI Diagnostic
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#2C7A4D] animate-ping" />
                </div>
                
                <div className="w-16 h-16 rounded-full bg-[#E6F5EE] flex items-center justify-center my-2 shadow-inner">
                  <MaterialIcon name="smart_toy" className="text-3xl text-[#1E734C]" />
                </div>

                <div className="text-center pb-2">
                  <p className="text-xs font-serif font-bold text-[#1C1B18]">
                    YOLOv11 & MRI
                  </p>
                  <p className="text-[10px] text-[#736E5E]">
                    Real-time Heatmaps
                  </p>
                </div>

                <span className="bg-[#FAF6E8] border border-[#E3DAC4] text-[#8C6B1F] text-[10px] font-bold px-3 py-1 rounded-full">
                  99.2% Accuracy
                </span>
              </div>

              {/* Large Circle Badge: "10+ AI Models & 24/7 Oversight" (Matches 12+ Badge in Image) */}
              <div className="absolute right-0 bottom-2 w-44 h-44 rounded-full bg-[#90BAE0] border-4 border-white shadow-xl flex flex-col items-center justify-center text-white text-center p-4 transform hover:scale-105 transition-transform">
                <span className="font-serif text-4xl sm:text-5xl font-bold leading-none tracking-tight">
                  10+
                </span>
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider mt-1 opacity-90">
                  Specialized AI Engines
                </span>
                <span className="text-[9px] bg-white/30 px-2 py-0.5 rounded-full mt-1">
                  Clinical Grade
                </span>
              </div>

              {/* Small Floating Pill Badge */}
              <div className="absolute left-6 bottom-4 bg-white border border-[#E3DAC4] shadow-md rounded-full px-4 py-2 flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-base text-[#2C7A4D]" />
                <span className="text-xs font-bold text-[#1C1B18]">
                  Smartwatch Sync Active
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
