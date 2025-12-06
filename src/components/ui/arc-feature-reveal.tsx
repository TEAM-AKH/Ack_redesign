
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BarChart3, Globe, Zap, MessageSquare, LayoutGrid, Hash } from "lucide-react";

const features = [
    {
        title: "TMS",
        icon: Users,
        color: "#8B5CF6", // Violet
        delay: 0.1,
        description: "Team Management System",
        details: [
            "Optimize fleet operations real-time.",
            "Reduce operational costs effectively.",
            "Enhance delivery route efficiency."
        ]
    },
    {
        title: "RMS",
        icon: Zap,
        color: "#A855F7", // Purple
        delay: 0.2,
        description: "Resource Management System",
        details: [
            "Maximize profitability with AI insights.",
            "Dynamic pricing strategies automated.",
            "Real-time revenue forecasting tools."
        ]
    },
    {
        title: "CST",
        icon: BarChart3,
        color: "#D946EF", // Fuchsia
        delay: 0.3,
        description: "Customer Service Tool",
        details: [
            "Unified support across all channels.",
            "Automated ticket resolution workflows.",
            "Enhanced customer satisfaction metrics."
        ]
    },
    {
        title: "WFX",
        icon: MessageSquare,
        color: "#EC4899", // Pink
        delay: 0.4,
        description: "Wolfronix",
        details: [
            "Empower employees with digital tools.",
            "Streamline internal communications.",
            "Boost productivity and engagement."
        ]
    }
];

export function ArcFeatureReveal() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeFeature, setActiveFeature] = useState<number | null>(null);

    return (
        <div className="relative w-full min-h-[600px] flex items-center justify-center bg-black overflow-hidden py-20">
            <div className="relative w-full max-w-7xl flex items-center justify-center gap-8">

                {/* Left Side: Arc & Features */}
                <div className="relative w-[400px] h-[600px] flex items-center justify-end">
                    {/* The Arc SVG */}
                    {/* Positioned at the right edge of this container, curving towards the left */}
                    <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[300px] h-[600px] pointer-events-none z-0">
                        <svg viewBox="0 0 300 600" className="w-full h-full">
                            <defs>
                                <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#D946EF" />
                                    <stop offset="100%" stopColor="#F472B6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* Draw an arc that curves to the left: ( */}
                            <motion.path
                                d="M 340,160 Q 28,310 350,500"
                                fill="none"
                                stroke="url(#arc-gradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>
                    {/* Features along the arc */}
                    <div className="absolute inset-0 pointer-events-none">
                        {features.map((feature, index) => {
                            const totalItems = features.length;
                            // Spread items vertically
                            const yStep = 400 / (totalItems + 1);
                            const startY = 80;
                            const y = startY + (index + 1) * yStep;

                            // Calculate X based on the curve Q 50,300
                            // x = a*(y-300)^2 + 50
                            const curveX = 0.005 * Math.pow(y - 300, 2) + 150;

                            // We want the items to be positioned relative to the container
                            // The SVG is at right: -60px.
                            const rightOffset = 200 - curveX; // Adjust for SVG position
                            const isActive = activeFeature === index;

                            return (
                                <motion.div
                                    key={feature.title}
                                    className="absolute right-0 flex items-center gap-4 pointer-events-auto"
                                    style={{
                                        top: y,
                                        right: rightOffset + 20, // Add some padding
                                        transform: 'translateY(-50%)'
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        y: isActive ? 0 : [0, -5, 0], // Stop floating if active
                                        zIndex: isActive ? 50 : 10
                                    }}
                                    transition={{
                                        delay: feature.delay + 0.5,
                                        duration: 0.5,
                                        y: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: feature.delay // Stagger floating
                                        }
                                    }}
                                >
                                    {/* Detail Box (Left Side) */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <div className="absolute right-[100%] mr-32 flex items-center">
                                                {/* Connecting Line */}
                                                <svg className="absolute right-[-128px] top-1/2 -translate-y-1/2 w-32 h-[2px] overflow-visible pointer-events-none">
                                                    <motion.line
                                                        x1="0" y1="0" x2="128" y2="0"
                                                        stroke={feature.color}
                                                        strokeWidth="2"
                                                        initial={{ pathLength: 0, opacity: 0 }}
                                                        animate={{ pathLength: 1, opacity: 1 }}
                                                        exit={{ pathLength: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </svg>
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                                    exit={{ opacity: 0, x: 10, scale: 0.9 }}
                                                    className="w-64 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl relative overflow-hidden"
                                                    style={{ borderColor: `${feature.color}40` }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                                    <h4 className="text-lg font-bold text-white mb-1" style={{ color: feature.color }}>{feature.description}</h4>
                                                    <div className="space-y-1">
                                                        {feature.details.map((line, i) => (
                                                            <p key={i} className="text-xs text-slate-300 flex items-start gap-2">
                                                                <span className="mt-1 w-1 h-1 rounded-full bg-white/50 shrink-0" />
                                                                {line}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                    <motion.div
                                        className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border px-4 py-2 rounded-full shadow-lg cursor-pointer group relative overflow-hidden transition-all duration-300 ${isActive ? 'bg-white/10 border-white/30' : 'border-white/10'}`}
                                        style={{ borderColor: isActive ? feature.color : undefined }}
                                        onClick={() => setActiveFeature(isActive ? null : index)}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                            borderColor: feature.color
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: '100%' }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <span className={`text-sm font-medium transition-colors whitespace-nowrap relative z-10 ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                                            {feature.title}
                                        </span>
                                        <div
                                            className="p-2 rounded-full relative z-10"
                                            style={{ backgroundColor: `${feature.color}20` }}
                                        >
                                            <feature.icon size={16} style={{ color: feature.color }} />
                                        </div>
                                    </motion.div>
                                    {/* Dot on the arc */}
                                    <motion.div
                                        className="w-3 h-3 rounded-full bg-white absolute -right-[24px]"
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: isActive ? 1.5 : [1, 1.2, 1],
                                            boxShadow: isActive
                                                ? `0 0 20px ${feature.color}, 0 0 40px ${feature.color}`
                                                : [`0 0 10px ${feature.color}`, `0 0 20px ${feature.color}`, `0 0 10px ${feature.color}`]
                                        }}
                                        transition={{
                                            delay: feature.delay + 0.8,
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Center Trigger */}
                <div className="relative z-20 shrink-0">
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-[2px] cursor-pointer relative group shadow-[0_0_50px_-12px_rgba(124,58,237,0.5)]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: isExpanded
                                ? "0 0 80px -10px rgba(124,58,237,0.6)"
                                : "0 0 50px -12px rgba(124,58,237,0.5)"
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-2xl font-bold text-white">TR𝒸Ⅹ</span>
                                <span className="text-xs text-slate-400 mt-1 group-hover:text-white transition-colors"></span>
                            </div>
                            {/* Ripple effect rings */}
                            <div className="absolute inset-0 border border-purple-500/30 rounded-full animate-ping" />
                            <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-pulse delay-75" />
                        </div>
                    </motion.button>
                </div>

                {/* Right Side: Local / Global Reveal */}
                <div className="relative w-[400px] h-[600px] flex items-center">
                    <AnimatePresence>
                        {isExpanded && (
                            <>
                                {/* Connecting Lines */}
                                <svg className="absolute left-[-40px] top-0 w-full h-full pointer-events-none overflow-visible">
                                    <motion.path
                                        d="M 0,300 L 40,300 L 40,200 L 80,200"
                                        fill="none"
                                        stroke="#8B5CF6"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        exit={{ pathLength: 0, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.path
                                        d="M 0,300 L 40,300 L 40,400 L 80,400"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        exit={{ pathLength: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    />
                                </svg>
                                {/* Local Branch */}
                                <motion.div
                                    className="absolute top-[160px] left-[40px]"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-gradient-to-r from-purple-900/40 to-black border border-purple-500/30 p-6 rounded-2xl backdrop-blur-md w-64 shadow-xl cursor-pointer"
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "#8B5CF6",
                                            boxShadow: "0 0 30px -5px rgba(139, 92, 246, 0.3)"
                                        }}
                                    >
                                        <h3 className="text-xl font-bold text-white mb-2">L-TR𝒸Ⅹ</h3>
                                        <p className="text-sm text-slate-300">Optimized for regional performance and compliance.</p>
                                    </motion.div>
                                </motion.div>
                                {/* Global Branch */}
                                <motion.div
                                    className="absolute top-[360px] left-[40px]"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <motion.div
                                        className="bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/30 p-6 rounded-2xl backdrop-blur-md w-64 shadow-xl cursor-pointer"
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "#3B82F6",
                                            boxShadow: "0 0 30px -5px rgba(59, 130, 246, 0.3)"
                                        }}
                                    >
                                        <h3 className="text-xl font-bold text-white mb-2">G-TR𝒸Ⅹ</h3>
                                        <p className="text-sm text-slate-300">Seamless international scaling and connectivity.</p>
                                    </motion.div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

    