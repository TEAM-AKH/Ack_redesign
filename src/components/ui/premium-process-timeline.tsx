
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- Component Props & Data Types ---

interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  duration: string;
  image: string; // URL to the image for the phone mockup
}

interface QuantumTimelineProps {
  steps?: ProcessStep[];
  defaultStep?: string;
}

// --- Default Data ---
const DEMO_STEPS: ProcessStep[] = [
  {
    id: "01",
    title: "Profile",
    subtitle: "Create your profile",
    description: "Set up your identity and choose your circles — personal, professional, community.",
    details: ["Architecture Design", "Integration Planning", "Requirement Analysis", "Success Metrics"],
    duration: "1-2 weeks",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "02",
    title: "Hashtags",
    subtitle: "Follow your Hashtags",
    description: "Pick topics, interests, communities and let your feed adapt around them.",
    details: ["Custom AI Model Development", "Security & Compliance Setup", "User Experience Design", "API Development"],
    duration: "2-4 weeks",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "03",
    title: "Engage",
    subtitle: "Create content & Engage",
    description: "Post Clips, Hashflicks, join Events, and interact within circles.",
    details: ["Frontend Development", "Backend Development", "Database Integration", "CI/CD Setup"],
    duration: "4-6 weeks",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "04",
    title: "Organize",
    subtitle: "Organize your digital world",
    description: "Save content into MemoryBank, build Collections, and revisit what matters to you.",
    details: ["Performance Tuning", "Security Audits", "User Acceptance Testing", "Deployment"],
    duration: "1-2 weeks",
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4c42b88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


// --- Main Timeline Component ---

export const QuantumTimeline = ({ steps = DEMO_STEPS, defaultStep }: QuantumTimelineProps) => {
  const [activeStep, setActiveStep] = useState(defaultStep || steps[0]?.id);

  const activeStepData = steps.find(step => step.id === activeStep);
  const activeIndex = steps.findIndex(step => step.id === activeStep);

  return (
    <div className="w-full max-w-6xl mx-auto p-8 font-sans bg-background text-foreground rounded-2xl shadow-2xl border border-primary/20">
      {/* Top Navigation */}
      <TimelineNav steps={steps} activeStep={activeStep} onStepClick={setActiveStep} />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {activeStepData && (
          <motion.div
            key={activeStepData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid md:grid-cols-2 gap-12"
          >
            <TimelineContent step={activeStepData} />
            <TimelinePhoneMockup image={activeStepData.image} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Timeline */}
      <BottomTimeline steps={steps} activeIndex={activeIndex} onStepClick={setActiveStep} />
    </div>
  );
};

// --- Sub-components ---

const TimelineNav = ({ steps, activeStep, onStepClick }: { steps: ProcessStep[], activeStep: string, onStepClick: (id: string) => void }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
    </div>
    <div className="hidden md:flex items-center gap-2 p-1 bg-muted/50 rounded-full">
      {steps.map(step => (
        <button
          key={step.id}
          onClick={() => onStepClick(step.id)}
          className={cn(
            "px-4 py-1 rounded-full text-sm font-semibold transition-colors",
            activeStep === step.id
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:bg-background/50"
          )}
        >
          {step.id}
        </button>
      ))}
    </div>
  </div>
);

const TimelineContent = ({ step }: { step: ProcessStep }) => (
  <div>
    <span className="text-sm font-bold text-accent">{step.id}</span>
    <h2 className="text-3xl font-bold mt-2 text-foreground">{step.title}</h2>
    <p className="mt-1 text-muted-foreground">{step.subtitle}</p>
    <p className="mt-4 text-foreground/80">{step.description}</p>
    <div className="mt-6 grid sm:grid-cols-2 gap-4">
      {step.details.map((detail, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center text-xs">✓</div>
          <span className="text-sm text-foreground/80">{detail}</span>
        </div>
      ))}
    </div>
    <div className="mt-6 flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
      <span className="text-accent">⏳</span>
      <span className="text-sm font-semibold text-foreground/80">Duration: {step.duration}</span>
    </div>
  </div>
);

const TimelinePhoneMockup = ({ image }: { image: string }) => (
    <div className="flex items-center justify-center">
        <div className="w-64 h-[512px] bg-slate-900 rounded-[40px] p-4 border-4 border-slate-800 shadow-2xl">
            <div className="w-full h-full bg-black rounded-[24px] overflow-hidden">
                <img src={image} alt="App Screenshot" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
);


const BottomTimeline = ({ steps, activeIndex, onStepClick }: { steps: ProcessStep[], activeIndex: number, onStepClick: (id: string) => void }) => (
  <div className="mt-16">
    <div className="relative w-full h-1 bg-muted rounded-full">
      <motion.div
        className="absolute h-1 bg-accent rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-4 h-4 -top-1.5 rounded-full bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.2)]"
        initial={{ left: '0%' }}
        animate={{ left: `calc(${(activeIndex / (steps.length - 1)) * 100}% - 8px)` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
    <div className="mt-4 flex justify-between">
      {steps.map((step, i) => (
        <button key={step.id} onClick={() => onStepClick(step.id)} className="text-center w-1/4">
          <span className={cn(
            "text-sm font-semibold transition-colors",
            i <= activeIndex ? "text-accent" : "text-muted-foreground"
          )}>
            {step.id}
          </span>
          <p className={cn(
            "text-xs mt-1 transition-colors",
            i <= activeIndex ? "text-foreground/80" : "text-muted-foreground/80"
          )}>
            {step.title.split(' ')[0]}
          </p>
        </button>
      ))}
    </div>
  </div>
);
