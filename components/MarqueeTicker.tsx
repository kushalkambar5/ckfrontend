"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const features = [
  "AI Medical Chatbot & RAG",
  "Doctor-Verified AI Recommendations",
  "Google Health Smartwatch Sync",
  "3D Human Anatomy Viewer",
  "Chest X-Ray YOLOv11 & TorchXRayVision",
  "Universal Bone Fracture Localization",
  "Cardiovascular Risk XGBoost Engine",
  "Brain Tumor MRI Lesion Detection",
  "Skin Allergy & Dermatoscope AI",
  "Clinical Patient Management Suite",
];

export function MarqueeTicker() {
  return (
    <div className="w-full bg-[#F6F4EF] py-4 border-y border-[#E6E1D3] overflow-hidden my-4">
      <div className="relative flex items-center overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {features.concat(features).map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-8 group cursor-default">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-[#38352E] group-hover:text-[#8C6B1F] transition-colors">
                {item}
              </span>
              <Sparkles className="w-4 h-4 text-[#C49A24]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
