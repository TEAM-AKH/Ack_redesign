
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/services';
import { DynamicFrameLayout } from '@/components/ui/dynamic-frame-layout';

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
    link: service.slug,
    image: service.image?.imageUrl || `https://picsum.photos/seed/${index}/600/400`,
    defaultPos: gridPositions[index],
    corner: "https://21st.dev/r/oeneco/corner.png",
    edgeHorizontal: "https://21st.dev/r/oeneco/edge-h.png",
    edgeVertical: "https://21st.dev/r/oeneco/edge-v.png",
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
