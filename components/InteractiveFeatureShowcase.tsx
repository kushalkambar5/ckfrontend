"use client";

import React, { useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import ScrollFloat from "@/components/ui/ScrollFloat";

export function InteractiveFeatureShowcase() {
  const [activeTab, setActiveTab] = useState<"chatbot" | "doctor" | "smartwatch" | "anatomy">("chatbot");

  // Chatbot State
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am Hippo Health AI Chatbot with Retrieval-Augmented Generation (RAG). How can I assist you with your health or uploaded medical reports today?",
    },
    {
      sender: "user",
      text: "I recently uploaded my blood test. Can you check my cholesterol and give me personalized diet advice?",
    },
    {
      sender: "ai",
      text: "Based on your uploaded lab report (Ref #L-902), your Total Cholesterol is 215 mg/dL (slightly elevated) and HDL is 55 mg/dL. I recommend increasing soluble fiber intake (oats, legumes) and omega-3 fatty acids, while keeping saturated fats under 7% of total calories. I have queued this draft for Dr. Chen's verification.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [ragEnabled, setRagEnabled] = useState(true);

  const handleSendMessage = (textToSend?: string) => {
    const message = textToSend || chatInput;
    if (!message.trim()) return;

    const newMsgs = [...chatMessages, { sender: "user", text: message }];
    setChatMessages(newMsgs);
    setChatInput("");

    setTimeout(() => {
      let reply = "Thank you for sharing your symptoms. I am processing your query against Hippo Health's medical knowledge base. I recommend monitoring your symptoms for 24 hours and consulting Dr. Chen through your Hippo portal.";
      if (message.toLowerCase().includes("headache") || message.toLowerCase().includes("pain")) {
        reply = "I note your symptom description. Ensure adequate hydration and rest. If pain persists above 6/10 or is accompanied by vision changes, seek immediate clinical evaluation.";
      }
      setChatMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 800);
  };

  // Doctor Verification State
  const [doctorNotes, setDoctorNotes] = useState(
    "Approved. Added recommendation for daily 30-min brisk walk. Adjust sodium intake to < 2,000mg/day."
  );
  const [isApproved, setIsApproved] = useState(false);

  // Smartwatch State
  const [heartRate, setHeartRate] = useState(72);
  const [spO2, setSpO2] = useState(98);
  const [sleepHrs, setSleepHrs] = useState(7.5);

  // Anatomy State
  const [selectedSystem, setSelectedSystem] = useState<"cardio" | "respiratory" | "neuro" | "skeletal">("cardio");
  const [highlightedOrgan, setHighlightedOrgan] = useState<string>("Heart & Coronary Arteries");

  const anatomyDetails = {
    cardio: {
      title: "Cardiovascular System",
      organ: "Heart & Coronary Arteries",
      disease: "Coronary Artery Disease & Atherosclerosis",
      symptoms: "Chest tightness, shortness of breath, fatigue during exertion",
      explanation:
        "Plaque buildup narrows coronary arteries, reducing oxygen delivery to heart muscle. AI predicts risk via XGBoost model.",
    },
    respiratory: {
      title: "Respiratory System",
      organ: "Lungs & Pulmonary Alveoli",
      disease: "Pneumonia & Pulmonary Edema",
      symptoms: "Persistent cough, fever, localized rales, decreased SpO₂",
      explanation:
        "Infection causes fluid accumulation in alveoli. Detected using YOLOv11 & TorchXRayVision bounding boxes.",
    },
    neuro: {
      title: "Nervous System",
      organ: "Cerebral Cortex & Brain Stem",
      disease: "Glioma & Meningioma Lesions",
      symptoms: "Localized headaches, cognitive shifts, motor weakness",
      explanation:
        "MRI volume analysis identifies space-occupying lesions with probability stratification.",
    },
    skeletal: {
      title: "Skeletal System",
      organ: "Radius, Femur & Tibia Bones",
      disease: "Acute Bone Fractures & Fissures",
      symptoms: "Localized acute trauma pain, swelling, deformity",
      explanation:
        "Universal radiograph vision model automatically ingests X-rays and draws precise bounding boxes around fractures.",
    },
  };

  return (
    <section id="interactive-showcase" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <ScrollFloat
          as="h2"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="font-serif text-4xl sm:text-5xl font-normal text-[#1C1B18] tracking-tight"
        >
          Experience Hippo Health <span className="text-[#8C6B1F]">Live</span>
        </ScrollFloat>
        <p className="text-sm sm:text-base text-[#595446] font-sans">
          Select any interactive workspace below to explore real-time AI chatbots, physician verification workflows, smartwatch analytics, and 3D organ modeling.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab("chatbot")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-2xs ${
            activeTab === "chatbot"
              ? "bg-[#1C1B18] text-white shadow-md"
              : "bg-white text-[#4D493E] hover:bg-[#FAF6E8] border border-[#E3DAC4]"
          }`}
        >
          <MaterialIcon name="chat" className="text-base text-[#F4E071]" />
          <span>1. AI Medical Chatbot</span>
        </button>

        <button
          onClick={() => setActiveTab("doctor")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-2xs ${
            activeTab === "doctor"
              ? "bg-[#1C1B18] text-white shadow-md"
              : "bg-white text-[#4D493E] hover:bg-[#FAF6E8] border border-[#E3DAC4]"
          }`}
        >
          <MaterialIcon name="stethoscope" className="text-base text-[#7BB1D1]" />
          <span>2. Doctor-Verified AI</span>
        </button>

        <button
          onClick={() => setActiveTab("smartwatch")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-2xs ${
            activeTab === "smartwatch"
              ? "bg-[#1C1B18] text-white shadow-md"
              : "bg-white text-[#4D493E] hover:bg-[#FAF6E8] border border-[#E3DAC4]"
          }`}
        >
          <MaterialIcon name="watch" className="text-base text-[#4EBD88]" />
          <span>3. Smartwatch Sync</span>
        </button>

        <button
          onClick={() => setActiveTab("anatomy")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-2xs ${
            activeTab === "anatomy"
              ? "bg-[#1C1B18] text-white shadow-md"
              : "bg-white text-[#4D493E] hover:bg-[#FAF6E8] border border-[#E3DAC4]"
          }`}
        >
          <MaterialIcon name="visibility" className="text-base text-[#E67CAE]" />
          <span>4. 3D Anatomy Viewer</span>
        </button>
      </div>

      {/* Main Workspace Frame */}
      <div className="bg-white border border-[#E6E1D3] rounded-[32px] p-6 sm:p-8 shadow-sm">
        
        {/* 1. AI MEDICAL CHATBOT SIMULATOR */}
        {activeTab === "chatbot" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EBE6D8] gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2C7A4D] animate-pulse" />
                  <h3 className="font-serif text-2xl font-bold text-[#1C1B18]">
                    Hippo AI Medical Assistant & RAG Engine
                  </h3>
                </div>
                <p className="text-xs text-[#736E5E] mt-0.5">
                  Context-aware memory active • Upload lab reports • Voice input support
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setRagEnabled(!ragEnabled)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-semibold border transition-all ${
                    ragEnabled
                      ? "bg-[#E6F5EE] border-[#B2E6CF] text-[#1E734C]"
                      : "bg-gray-100 border-gray-300 text-gray-500"
                  }`}
                >
                  {ragEnabled ? "✓ RAG Knowledge Base ON" : "RAG Standard"}
                </button>
              </div>
            </div>

            {/* Chat Box Display */}
            <div className="h-80 overflow-y-auto space-y-4 p-4 bg-[#FAF6E8]/60 border border-[#EDE4CD] rounded-2xl">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${
                    msg.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      msg.sender === "user"
                        ? "bg-[#1C1B18] text-white"
                        : "bg-[#8C6B1F] text-white"
                    }`}
                  >
                    {msg.sender === "user" ? "You" : <MaterialIcon name="smart_toy" className="text-base text-white" />}
                  </div>
                  <div
                    className={`max-w-xl text-xs sm:text-sm p-4 rounded-2xl shadow-2xs font-sans leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#1C1B18] text-white rounded-tr-none"
                        : "bg-white text-[#1C1B18] border border-[#E3DAC4] rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-[#787363]">Sample Prompts:</span>
              <button
                onClick={() => handleSendMessage("Analyze my uploaded chest X-ray report")}
                className="text-xs bg-[#FAF6E8] hover:bg-[#F4E071]/50 border border-[#E3DAC4] px-3 py-1 rounded-full text-[#594918] transition-colors"
              >
                &quot;Analyze my uploaded chest X-ray report&quot;
              </button>
              <button
                onClick={() => handleSendMessage("What diet is best for low SpO2 recovery?")}
                className="text-xs bg-[#FAF6E8] hover:bg-[#F4E071]/50 border border-[#E3DAC4] px-3 py-1 rounded-full text-[#594918] transition-colors"
              >
                &quot;What diet is best for low SpO2 recovery?&quot;
              </button>
              <button
                onClick={() => handleSendMessage("Explain mild sinus tachycardia")}
                className="text-xs bg-[#FAF6E8] hover:bg-[#F4E071]/50 border border-[#E3DAC4] px-3 py-1 rounded-full text-[#594918] transition-colors"
              >
                &quot;Explain mild sinus tachycardia&quot;
              </button>
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => alert("Simulated File Upload: Select PDF/Image Lab Report")}
                className="p-3 bg-[#F6F4EF] hover:bg-[#EBE6D8] border border-[#E3DAC4] rounded-xl text-[#1C1B18] transition-colors"
                title="Upload Report"
              >
                <MaterialIcon name="upload" className="text-base" />
              </button>
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`p-3 border rounded-xl transition-colors ${
                  isRecording
                    ? "bg-red-500 text-white border-red-600 animate-pulse"
                    : "bg-[#F6F4EF] hover:bg-[#EBE6D8] border-[#E3DAC4] text-[#1C1B18]"
                }`}
                title="Voice Input"
              >
                <MaterialIcon name="mic" className="text-base" />
              </button>

              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask Hippo AI any medical question or detail your symptoms..."
                className="flex-1 bg-[#F6F4EF] border border-[#E3DAC4] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1C1B18] focus:outline-none focus:ring-2 focus:ring-[#8C6B1F]"
              />

              <button
                onClick={() => handleSendMessage()}
                className="bg-[#1C1B18] hover:bg-[#33312B] text-white px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <span>Send</span>
                <MaterialIcon name="send" className="text-sm text-white" />
              </button>
            </div>
          </div>
        )}

        {/* 2. DOCTOR-VERIFIED AI WORKFLOW */}
        {activeTab === "doctor" && (
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#EBE6D8]">
              <h3 className="font-serif text-2xl font-bold text-[#1C1B18]">
                Doctor Verification & Clinical Co-Pilot Studio
              </h3>
              <p className="text-xs text-[#736E5E] mt-0.5">
                AI generates baseline recommendations → Licensed doctors review, modify & verify before final release to patient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: AI Draft Recommendation */}
              <div className="bg-[#FAF6E8] border border-[#EDE4CD] rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="smart_toy" className="text-base text-[#8C6B1F]" />
                    <span className="text-xs font-bold text-[#1C1B18] uppercase tracking-wider">
                      AI Generated Recommendation Draft
                    </span>
                  </div>
                  <span className="text-[10px] bg-white border border-[#E3DAC4] text-[#8C6B1F] px-2 py-0.5 rounded-full font-bold">
                    Confidence: 97.8%
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#423E34] font-sans">
                  <p><strong>Patient:</strong> Marcus Vance (ID: #PV-9041)</p>
                  <p><strong>Primary Symptoms:</strong> Recurrent fatigue, resting heart rate 86 bpm, elevated LDL cholesterol.</p>
                  <div className="bg-white border border-[#E3DAC4] p-3 rounded-xl space-y-1">
                    <p className="font-bold text-[#1C1B18]">Proposed AI Action Plan:</p>
                    <ul className="list-disc pl-4 space-y-1 text-[#524E43]">
                      <li>Initiate lipid-lowering Mediterranean dietary protocol.</li>
                      <li>Schedule baseline 12-lead ECG & Echocardiogram.</li>
                      <li>Smartwatch continuous SpO₂ and sleep apnea screening.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Doctor Review & Approval Editor */}
              <div className="bg-[#E8F2FC]/70 border border-[#B5D5F5] rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="person_check" className="text-base text-[#1C5396]" />
                    <span className="text-xs font-bold text-[#1C5396] uppercase tracking-wider">
                      Doctor Review Workspace
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#1C5396] text-white px-2 py-0.5 rounded-full font-bold">
                    Dr. Sarah Chen, MD
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1C5396] flex items-center gap-1">
                    <MaterialIcon name="edit" className="text-sm text-[#1C5396]" />
                    Doctor Clinical Notes & Modifications:
                  </label>
                  <textarea
                    value={doctorNotes}
                    onChange={(e) => setDoctorNotes(e.target.value)}
                    rows={3}
                    className="w-full bg-white border border-[#B5D5F5] rounded-xl p-3 text-xs text-[#1C1B18] focus:outline-none focus:ring-2 focus:ring-[#1C5396]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setIsApproved(!isApproved)}
                    className={`flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      isApproved
                        ? "bg-[#2C7A4D] text-white shadow-md"
                        : "bg-[#1C5396] hover:bg-[#154178] text-white shadow-sm"
                    }`}
                  >
                    {isApproved ? (
                      <>
                        <MaterialIcon name="check" className="text-base" />
                        <span>FINAL CARE PLAN APPROVED & VERIFIED</span>
                      </>
                    ) : (
                      <>
                        <MaterialIcon name="check_circle" className="text-base" />
                        <span>APPROVE & RELEASE TO PATIENT</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Status Banner */}
            {isApproved && (
              <div className="bg-[#E6F5EE] border border-[#B2E6CF] p-4 rounded-xl flex items-center gap-3 text-xs text-[#155939] font-medium animate-fadeIn">
                <MaterialIcon name="check_circle" className="text-xl text-[#2C7A4D] shrink-0" />
                <span>
                  Care plan verified by Dr. Sarah Chen, MD. Patient Marcus Vance will receive notification with verified clinical instructions and updated smartwatch target metrics.
                </span>
              </div>
            )}
          </div>
        )}

        {/* 3. SMARTWATCH HEALTH SYNC DASHBOARD */}
        {activeTab === "smartwatch" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EBE6D8] gap-2">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1B18]">
                  Smartwatch Integration & Google Health API Engine
                </h3>
                <p className="text-xs text-[#736E5E] mt-0.5">
                  Real-time telemetry sync • Automated AI Diet & Activity Recommendations
                </p>
              </div>
              <span className="text-xs bg-[#E6F5EE] border border-[#B2E6CF] text-[#1E734C] px-3 py-1 rounded-full font-bold self-start">
                ● Live API Connected
              </span>
            </div>

            {/* Biometric Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-[#FAF6E8] border border-[#EDE4CD] p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-[#8C6B1F]">
                  <MaterialIcon name="favorite" className="text-base text-[#8C6B1F]" fill />
                  <span className="text-[10px] font-bold uppercase">Heart Rate</span>
                </div>
                <div className="text-2xl font-serif font-bold text-[#1C1B18]">{heartRate} <span className="text-xs font-sans font-normal text-[#787363]">bpm</span></div>
                <input
                  type="range"
                  min="55"
                  max="120"
                  value={heartRate}
                  onChange={(e) => setHeartRate(Number(e.target.value))}
                  className="w-full accent-[#8C6B1F]"
                />
              </div>

              <div className="bg-[#E8F2FC] border border-[#B5D5F5] p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-[#1C5396]">
                  <MaterialIcon name="vital_signs" className="text-base text-[#1C5396]" />
                  <span className="text-[10px] font-bold uppercase">SpO₂ Level</span>
                </div>
                <div className="text-2xl font-serif font-bold text-[#1C1B18]">{spO2}%</div>
                <input
                  type="range"
                  min="92"
                  max="100"
                  value={spO2}
                  onChange={(e) => setSpO2(Number(e.target.value))}
                  className="w-full accent-[#1C5396]"
                />
              </div>

              <div className="bg-[#E6F5EE] border border-[#B2E6CF] p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-[#1E734C]">
                  <MaterialIcon name="bedtime" className="text-base text-[#1E734C]" />
                  <span className="text-[10px] font-bold uppercase">Sleep</span>
                </div>
                <div className="text-2xl font-serif font-bold text-[#1C1B18]">{sleepHrs} <span className="text-xs font-sans font-normal text-[#787363]">hrs</span></div>
                <input
                  type="range"
                  min="4"
                  max="10"
                  step="0.5"
                  value={sleepHrs}
                  onChange={(e) => setSleepHrs(Number(e.target.value))}
                  className="w-full accent-[#1E734C]"
                />
              </div>

              <div className="bg-[#FBEBF2] border border-[#F5C4DB] p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-[#942A5C]">
                  <MaterialIcon name="footprint" className="text-base text-[#942A5C]" />
                  <span className="text-[10px] font-bold uppercase">Steps</span>
                </div>
                <div className="text-2xl font-serif font-bold text-[#1C1B18]">8,420</div>
                <span className="text-[10px] text-[#942A5C] font-semibold">Goal: 10,000 steps</span>
              </div>

              <div className="bg-[#FAF2D6] border border-[#E8DAA8] p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-[#6B571B]">
                  <MaterialIcon name="local_fire_department" className="text-base text-[#6B571B]" fill />
                  <span className="text-[10px] font-bold uppercase">Calories</span>
                </div>
                <div className="text-2xl font-serif font-bold text-[#1C1B18]">2,150 <span className="text-xs font-sans font-normal text-[#787363]">kcal</span></div>
                <span className="text-[10px] text-[#6B571B] font-semibold">Active: 620 kcal</span>
              </div>
            </div>

            {/* AI Generated Diet & Recovery Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#FAF6E8] border border-[#EDE4CD] rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6B1F] flex items-center gap-2">
                  <MaterialIcon name="auto_awesome" className="text-base text-[#8C6B1F]" />
                  AI Personalized Diet Plan
                </h4>
                <div className="space-y-2 text-xs text-[#38352E]">
                  <div className="p-2 bg-white rounded-lg border border-[#E3DAC4]">
                    <strong>Breakfast:</strong> Steel-cut oats with blueberries, flaxseeds & almond milk (350 kcal)
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#E3DAC4]">
                    <strong>Lunch:</strong> Wild salmon salad with avocado, olive oil & lemon vinaigrette (520 kcal)
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#E3DAC4]">
                    <strong>Dinner:</strong> Roasted turkey breast, steamed broccoli & quinoa bowl (480 kcal)
                  </div>
                </div>
              </div>

              <div className="bg-[#E6F5EE] border border-[#B2E6CF] rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E734C] flex items-center gap-2">
                  <MaterialIcon name="bolt" className="text-base text-[#1E734C]" />
                  Recovery & Timetable Insights
                </h4>
                <div className="space-y-2 text-xs text-[#155939]">
                  <p>
                    <strong>Recovery Score: 88% (Optimal)</strong>
                    <br />
                    Based on your {sleepHrs}h sleep and resting HR of {heartRate} bpm, muscle recovery is elevated.
                  </p>
                  <div className="p-2.5 bg-white rounded-lg border border-[#B2E6CF]">
                    <span className="font-bold">Today&apos;s AI Timetable:</span>
                    <ul className="list-disc pl-4 mt-1 space-y-0.5">
                      <li>17:30 - 30-Min Zone 2 Aerobic Jogging</li>
                      <li>19:00 - Hydration (Target 2.5L remaining)</li>
                      <li>22:30 - Wind-down routine for 8h sleep target</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. 3D HUMAN ANATOMY VIEWER */}
        {activeTab === "anatomy" && (
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#EBE6D8]">
              <h3 className="font-serif text-2xl font-bold text-[#1C1B18]">
                3D Human Anatomy & Organ Disease Visualizer
              </h3>
              <p className="text-xs text-[#736E5E] mt-0.5">
                Interactive anatomical explorer for patient education & clinical diagnostic reference.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: System Buttons & Visual Graphic */}
              <div className="lg:col-span-5 flex flex-col items-center bg-[#FAF6E8] border border-[#EDE4CD] rounded-2xl p-6 space-y-6">
                
                {/* System Toggles */}
                <div className="grid grid-cols-2 gap-2 w-full">
                  <button
                    onClick={() => {
                      setSelectedSystem("cardio");
                      setHighlightedOrgan("Heart & Coronary Arteries");
                    }}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedSystem === "cardio"
                        ? "bg-[#1C1B18] text-white"
                        : "bg-white text-[#4D493E] hover:bg-[#EBE6D8]"
                    }`}
                  >
                    🫀 Cardiovascular
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSystem("respiratory");
                      setHighlightedOrgan("Lungs & Alveoli");
                    }}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedSystem === "respiratory"
                        ? "bg-[#1C1B18] text-white"
                        : "bg-white text-[#4D493E] hover:bg-[#EBE6D8]"
                    }`}
                  >
                    🫁 Respiratory
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSystem("neuro");
                      setHighlightedOrgan("Brain Cortex");
                    }}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedSystem === "neuro"
                        ? "bg-[#1C1B18] text-white"
                        : "bg-white text-[#4D493E] hover:bg-[#EBE6D8]"
                    }`}
                  >
                    🧠 Nervous System
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSystem("skeletal");
                      setHighlightedOrgan("Femur & Radius");
                    }}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedSystem === "skeletal"
                        ? "bg-[#1C1B18] text-white"
                        : "bg-white text-[#4D493E] hover:bg-[#EBE6D8]"
                    }`}
                  >
                    🦴 Skeletal System
                  </button>
                </div>

                {/* Simulated 3D Body Visual */}
                <div className="relative w-48 h-64 bg-white border border-[#E3DAC4] rounded-full flex flex-col items-center justify-center p-4 shadow-inner">
                  <div className="w-16 h-16 rounded-full bg-[#FAF6E8] border border-[#8C6B1F] flex items-center justify-center text-2xl animate-bounce">
                    {selectedSystem === "cardio" && "🫀"}
                    {selectedSystem === "respiratory" && "🫁"}
                    {selectedSystem === "neuro" && "🧠"}
                    {selectedSystem === "skeletal" && "🦴"}
                  </div>
                  <span className="mt-4 text-[10px] uppercase font-bold text-[#8C6B1F] bg-[#FAF6E8] px-3 py-1 rounded-full border border-[#E8DAA8]">
                    {highlightedOrgan}
                  </span>
                  <span className="text-[9px] text-[#787363] mt-1">Click to highlight organ node</span>
                </div>
              </div>

              {/* Right Column: Educational Detail Panel */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-[#E8F2FC] border border-[#B5D5F5] p-5 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1C5396] uppercase tracking-wider">
                      {anatomyDetails[selectedSystem].title}
                    </span>
                    <span className="text-[10px] bg-[#1C5396] text-white px-2 py-0.5 rounded-full font-bold">
                      Clinical Grade 3D Model
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-[#1C1B18]">
                    {anatomyDetails[selectedSystem].organ}
                  </h4>

                  <div className="space-y-2 text-xs text-[#38352E]">
                    <p>
                      <strong className="text-[#1C1B18]">Associated Condition:</strong>{" "}
                      {anatomyDetails[selectedSystem].disease}
                    </p>
                    <p>
                      <strong className="text-[#1C1B18]">Clinical Symptoms:</strong>{" "}
                      {anatomyDetails[selectedSystem].symptoms}
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-[#B5D5F5] text-[#423E34] leading-relaxed">
                      <strong className="text-[#1C5396]">Pathology & AI Explanation:</strong>{" "}
                      {anatomyDetails[selectedSystem].explanation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
