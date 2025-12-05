
'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col bg-background text-foreground">
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
        <div className="container">
          <motion.div
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className={`relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  {service.image && (
                    <Image
                      src={service.image.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      data-ai-hint={service.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-300/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button asChild size="lg" variant="secondary" className="self-start bg-slate-800 text-slate-100 hover:bg-slate-700">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
