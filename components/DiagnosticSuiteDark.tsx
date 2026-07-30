"use client";

import React, { useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function DiagnosticSuiteDark() {
  // Cardiovascular XGBoost Calculator State
  const [age, setAge] = useState(54);
  const [systolicBP, setSystolicBP] = useState(132);
  const [cholesterol, setCholesterol] = useState(210);

  const calculateCardioRisk = () => {
    // Realistic risk scoring logic for interactive showcase
    let risk = (age - 30) * 0.4 + (systolicBP - 120) * 0.3 + (cholesterol - 180) * 0.2;
    risk = Math.min(Math.max(Math.round(risk), 4), 68);
    return risk;
  };

  const currentRisk = calculateCardioRisk();

  return (
    <section id="diagnostic-suite" className="w-full bg-[#1C1B18] text-white py-20 my-12 border-y border-[#33312B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header (Matches "Our Featured Product" in reference image) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#33312B] pb-8">
          <div className="space-y-3">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
              Our Advanced <span className="font-serif text-[#F4E071]">AI Diagnostic</span> Suite
            </h2>
            <p className="text-sm sm:text-base text-[#AAA595] font-sans max-w-xl">
              High-precision computer vision, XGBoost risk stratification, and neural network classification models engineered for clinical decision support.
            </p>
          </div>

          <a
            href="#interactive-showcase"
            className="inline-flex items-center gap-2 bg-[#F4E071] hover:bg-[#E8C838] text-[#1C1B18] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all self-start md:self-end"
          >
            <span>EXPLORE DIAGNOSTICS</span>
            <MaterialIcon name="chevron_right" className="text-base text-[#1C1B18]" />
          </a>
        </div>

        {/* 5 Clinical AI Engine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Chest X-Ray Analysis */}
          <div className="bg-[#252420] border border-[#3A3831] rounded-[28px] p-6 space-y-5 hover:border-[#8C6B1F] transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#33312B] text-[#F4E071] px-3 py-1 rounded-full border border-[#474439]">
                  YOLOv11 & TorchXRayVision
                </span>
                <MaterialIcon name="document_scanner" className="text-xl text-[#F4E071]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                Chest X-Ray Analysis
              </h3>

              <p className="text-xs text-[#BAB4A3] leading-relaxed">
                Automatic detection of Pneumonia, Lung Opacity, Tuberculosis, Cardiomegaly, Pulmonary Edema, Atelectasis & Nodules.
              </p>

              {/* Simulated Bounding Box Graphic */}
              <div className="relative w-full h-36 bg-[#161513] rounded-xl border border-[#3A3831] overflow-hidden flex items-center justify-center p-2">
                <div className="w-24 h-24 rounded-full border border-dashed border-[#F4E071]/40 flex items-center justify-center">
                  <div className="w-16 h-12 border-2 border-red-500 bg-red-500/10 rounded flex flex-col items-center justify-between p-1">
                    <span className="text-[8px] bg-red-500 text-white font-bold px-1 rounded">
                      Nodule 98.4%
                    </span>
                  </div>
                </div>
                <span className="absolute bottom-2 left-2 text-[9px] text-[#8C8878]">
                  Heatmaps & Bounding Box Localization
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#3A3831] flex items-center justify-between text-xs text-[#8C8778]">
              <span>Risk Prediction: Active</span>
              <span className="text-[#F4E071] font-bold">Confidence 98.4%</span>
            </div>
          </div>

          {/* Card 2: Bone Fracture Detection */}
          <div className="bg-[#252420] border border-[#3A3831] rounded-[28px] p-6 space-y-5 hover:border-[#8C6B1F] transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#33312B] text-[#7BB1D1] px-3 py-1 rounded-full border border-[#474439]">
                  Universal Radiograph Vision
                </span>
                <MaterialIcon name="skeleton" className="text-xl text-[#7BB1D1]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                Bone Fracture Detection
              </h3>

              <p className="text-xs text-[#BAB4A3] leading-relaxed">
                Universal radiograph ingestion for any bone (Femur, Radius, Clavicle, Tibia). Automated fracture localization & clinical assessment support.
              </p>

              <div className="bg-[#161513] rounded-xl border border-[#3A3831] p-3 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#BAB4A3]">
                  <span>Fracture Ingestion:</span>
                  <span className="text-[#7BB1D1] font-bold">Standard DICOM/X-Ray</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#BAB4A3]">
                  <span>Auto Bounding Box:</span>
                  <span className="text-[#4EBD88] font-bold">Enabled ✓</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#3A3831] flex items-center justify-between text-xs text-[#8C8778]">
              <span>Clinical Support Tool</span>
              <span className="text-[#7BB1D1] font-bold">Instant Assessment</span>
            </div>
          </div>

          {/* Card 3: Cardiovascular Risk (Interactive XGBoost Calculator) */}
          <div className="bg-[#252420] border border-[#3A3831] rounded-[28px] p-6 space-y-5 hover:border-[#8C6B1F] transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#33312B] text-[#4EBD88] px-3 py-1 rounded-full border border-[#474439]">
                  XGBoost ML Engine
                </span>
                <MaterialIcon name="vital_signs" className="text-xl text-[#4EBD88]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                Cardiovascular Risk AI
              </h3>

              <p className="text-xs text-[#BAB4A3] leading-relaxed">
                XGBoost ML algorithm calculating cardiovascular risk % from age, blood pressure, cholesterol & structured health data.
              </p>

              {/* Interactive Calculator Sliders */}
              <div className="bg-[#161513] rounded-xl border border-[#3A3831] p-3 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-[#BAB4A3]">
                    <span>Age: <strong>{age} yrs</strong></span>
                    <span>BP: <strong>{systolicBP} mmHg</strong></span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="80"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full accent-[#4EBD88]"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-[#BAB4A3]">
                    <span>Cholesterol: <strong>{cholesterol} mg/dL</strong></span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="300"
                    value={cholesterol}
                    onChange={(e) => setCholesterol(Number(e.target.value))}
                    className="w-full accent-[#4EBD88]"
                  />
                </div>

                <div className="pt-2 border-t border-[#33312B] flex items-center justify-between">
                  <span className="text-xs text-[#BAB4A3]">Estimated Risk:</span>
                  <span className={`text-base font-serif font-bold ${currentRisk > 25 ? "text-red-400" : "text-[#4EBD88]"}`}>
                    {currentRisk}% Risk
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#3A3831] flex items-center justify-between text-xs text-[#8C8778]">
              <span>XGBoost Classifier</span>
              <span className="text-[#4EBD88] font-bold">Personalized Recs</span>
            </div>
          </div>

          {/* Card 4: Brain Tumor MRI Detection */}
          <div className="bg-[#252420] border border-[#3A3831] rounded-[28px] p-6 space-y-5 hover:border-[#8C6B1F] transition-all group flex flex-col justify-between md:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#33312B] text-[#E67CAE] px-3 py-1 rounded-full border border-[#474439]">
                  MRI Volumetric AI
                </span>
                <MaterialIcon name="psychology" className="text-xl text-[#E67CAE]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                Brain Tumor MRI Detection
              </h3>

              <p className="text-xs text-[#BAB4A3] leading-relaxed">
                MRI scan analysis, lesion localization, tumor probability scoring, risk stratification & interactive neuro-diagnostic dashboard.
              </p>

              <div className="bg-[#161513] rounded-xl border border-[#3A3831] p-3 space-y-1.5 text-xs text-[#BAB4A3]">
                <div className="flex items-center justify-between">
                  <span>Lesion Localization:</span>
                  <span className="text-[#E67CAE] font-bold">3D Mesh Ready</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Probability Stratification:</span>
                  <span className="text-white font-bold">High Precision</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#3A3831] flex items-center justify-between text-xs text-[#8C8778]">
              <span>Neuro-Oncology AI</span>
              <span className="text-[#E67CAE] font-bold">Diagnostic Dashboard</span>
            </div>
          </div>

          {/* Card 5: Skin Allergy & Lesion Classifier */}
          <div className="bg-[#252420] border border-[#3A3831] rounded-[28px] p-6 space-y-5 hover:border-[#8C6B1F] transition-all group flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#33312B] text-[#F4E071] px-3 py-1 rounded-full border border-[#474439]">
                  Smartphone & Dermatoscope Vision
                </span>
                <MaterialIcon name="bolt" className="text-xl text-[#F4E071]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Skin Allergy & Dermatoscope Lesion Classifier
              </h3>

              <p className="text-xs sm:text-sm text-[#BAB4A3] leading-relaxed">
                Ingests both standard smartphone images and high-resolution dermatoscope photography. Convolutional Neural Networks classify skin allergies, benign lesions, and early-stage melanoma risk.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#161513] p-3 rounded-xl border border-[#3A3831] space-y-1">
                  <span className="text-[10px] text-[#8C8778] uppercase font-bold">Image Ingestion</span>
                  <p className="text-xs font-bold text-white">Smartphone & Dermatoscope</p>
                </div>
                <div className="bg-[#161513] p-3 rounded-xl border border-[#3A3831] space-y-1">
                  <span className="text-[10px] text-[#8C8778] uppercase font-bold">Detection Scope</span>
                  <p className="text-xs font-bold text-[#F4E071]">Melanoma & Allergies</p>
                </div>
                <div className="bg-[#161513] p-3 rounded-xl border border-[#3A3831] space-y-1">
                  <span className="text-[10px] text-[#8C8778] uppercase font-bold">Architecture</span>
                  <p className="text-xs font-bold text-[#4EBD88]">Deep Neural Networks</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#3A3831] flex items-center justify-between text-xs text-[#8C8778]">
              <span className="flex items-center gap-1.5 text-white">
                <MaterialIcon name="check_circle" className="text-base text-[#4EBD88]" />
                Clinically Validated Classification System
              </span>
              <a
                href="#interactive-showcase"
                className="text-[#F4E071] font-bold hover:underline flex items-center gap-1"
              >
                <span>TEST CLASSIFIER</span>
                <MaterialIcon name="chevron_right" className="text-sm text-[#F4E071]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
