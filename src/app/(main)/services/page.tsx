
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/services';
import { DynamicFrameLayout } from '@/components/ui/dynamic-frame-layout';

// Sample video URLs. In a real app, these would be different for each service.
const serviceVideos = [
  "https://assets.mixkit.co/videos/preview/mixkit-cloud-of-blue-and-red-ink-underwater-4339-large.mp4", // Cloud
  "https://assets.mixkit.co/videos/preview/mixkit-binary-code-running-on-a-screen-1090-large.mp4", // Cyber Security
  "https://assets.mixkit.co/videos/preview/mixkit-brain-connections-with-flashing-lights-12753-large.mp4", // AI
  "https://assets.mixkit.co/videos/preview/mixkit-a-holographic-projection-of-a-city-with-fast-cars-42284-large.mp4", // Data Analytics
  "https://assets.mixkit.co/videos/preview/mixkit-business-analytics-on-a-tablet-42171-large.mp4", // Digital Marketing
  "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-laptop-42340-large.mp4", // UX/UI
  "https://assets.mixkit.co/videos/preview/mixkit-futuristic-long-thin-tunnel-with-bright-lights-39656-large.mp4", // Web Solutions
  "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-37843-large.mp4", // SAP
  "https://assets.mixkit.co/videos/preview/mixkit-abstract-thin-lines-in-endless-motion-4202-large.mp4"  // Generic Tech
];

// Frame assets - using placeholders
const frameAssets = {
  corner: "https://21st.dev/r/oeneco/corner.png",
  edgeH: "https://21st.dev/r/oeneco/edge-h.png",
  edgeV: "https://21st.dev/r/oeneco/edge-v.png",
};


const gridPositions = [
  { x: 0, y: 0, w: 4, h: 4 },
  { x: 4, y: 0, w: 4, h: 4 },
  { x: 8, y: 0, w: 4, h: 4 },
  { x: 0, y: 4, w: 4, h: 4 },
  { x: 4, y: 4, w: 4, h: 4 },
  { x: 8, y: 4, w: 4, h: 4 },
  { x: 0, y: 8, w: 4, h: 4 },
  { x: 4, y: 8, w: 4, h: 4 },
  { x: 8, y: 8, w: 4, h: 4 },
];

export default function ServicesPage() {
  const frameData = services.slice(0, 9).map((service, index) => ({
    id: index + 1,
    title: service.title,
    description: service.description,
    link: service.link,
    video: serviceVideos[index % serviceVideos.length],
    defaultPos: gridPositions[index],
    corner: frameAssets.corner,
    edgeHorizontal: frameAssets.edgeH,
    edgeVertical: frameAssets.edgeV,
    mediaSize: 1.1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  }));

  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 text-center bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4"
          >
            Delivering excellence and innovation through our comprehensive range
            of professional services that drive growth and create value.
          </motion.p>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container h-[100vh]">
          <DynamicFrameLayout frames={frameData} hoverSize={6} gapSize={16} />
        </div>
      </main>
    </div>
  );
}
