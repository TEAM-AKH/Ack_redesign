
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { PlaceHolderImages } from '@/lib/placeholder-images';

function AboutPageClient() {
  return (
    <div className="flex flex-col bg-background">
      <header className="h-[80vh] flex items-center justify-center text-center bg-black">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-gradient">
            We are Global Acknowledgment Hub
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4">
            Innovators, dreamers, and builders dedicated to pushing the boundaries of what&apos;s possible.
          </motion.p>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-black text-white py-20 md:py-32">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To empower businesses and individuals through transformative technology, fostering a culture of continuous innovation and growth. We strive to create solutions that are not only powerful but also intuitive and accessible to all.
              </p>
            </motion.div>
            <motion.div
                className="relative h-80 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              {PlaceHolderImages.find(p => p.id === 'about-mission') &&
                <Image
                    src={PlaceHolderImages.find(p => p.id === 'about-mission')!.imageUrl}
                    alt="Our Mission"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-2xl shadow-primary/20"
                    data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-mission')!.imageHint}
                />
              }
            </motion.div>
          </div>
        </section>

        <section className="bg-background text-foreground py-20 md:py-32">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
             <motion.div
                className="relative h-80 md:h-96 md:order-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
               {PlaceHolderImages.find(p => p.id === 'about-vision') &&
                <Image
                    src={PlaceHolderImages.find(p => p.id === 'about-vision')!.imageUrl}
                    alt="Our Vision"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-2xl shadow-primary/20"
                    data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-vision')!.imageHint}
                />
               }
            </motion.div>
            <motion.div
                className="md:order-1"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where technology seamlessly integrates with daily life, solving complex challenges and unlocking human potential. Our goal is to be at the forefront of this change, building a smarter, more connected world.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}


export default function AboutPage() {
    return <AboutPageClient />;
}
