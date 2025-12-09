
'use client';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Eye, Zap, ArrowRight, Hash, Shield, Mic, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { QuantumTimeline } from '@/components/ui/quantum-process-timeline';
import { HeroSection } from '@/components/ui/feature-carousel';
import ImgSphereDemo from '@/components/ui/img-sphere-demo';

const HashtaggerCarousel = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      alt: 'Professional portrait of a woman',
    },
    {
      src: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      alt: 'Scenic landscape with mountains and a lake',
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1670282392820-e3590c1c5c54?w=900&auto=format&fit=crop&q=60',
      alt: 'Artistic photo of a girl with flowers',
    },
    {
      src: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      alt: 'A dog wearing sunglasses',
    },
    {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      alt: 'Creative shot of a person from behind',
    },
  ];

  const title = (
    <>
      A new way to experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">social media</span>
    </>
  );

  return (
    <div className="w-full">
      <HeroSection
        title={title}
        subtitle="Hashtagger is a privacy-first social platform that lets you explore interests and build circles."
        images={images}
      />
    </div>
  );
};


const whyChooseHashtagger = [
    {
        icon: <Shield className="h-8 w-8 text-accent" />,
        title: 'Interest-first, not algorithm-first',
        description: 'Discovery is driven by hashtags and topics, not hidden algorithmic tricks.',
    },
    {
        icon: <Users className="h-8 w-8 text-accent" />,
        title: 'Multiple circles, one identity',
        description: 'Separate personal, professional, and community spaces — without juggling multiple accounts.',
    },
    {
        icon: <Zap className="h-8 w-8 text-accent" />,
        title: 'AI that respects privacy',
        description: 'Chat, translate, summarize, and explore content with AI support that doesn’t compromise your control.',
    },
    {
        icon: <Eye className="h-8 w-8 text-accent" />,
        title: 'Built for creators & communities',
        description: 'From short Clips to long-form Hashflicks and Events, Hashtagger supports every content style.',
    },
];

const features = [
    'Hashtag-first content discovery',
    'Dynamic circles for structured engagement',
    'Clips & Hashflicks for short and long-form content',
    'Event-based social experiences',
    'MemoryBank for private stored content',
    'Collection Spaces for curated inspiration',
    'Strong encryption and privacy controls',
];

const faqs = [
    {
        question: 'Is Hashtagger for individuals or communities?',
        answer: 'Both. Hashtagger is ideal for solo creators, friend groups, professional communities, and public networks.',
    },
    {
        question: 'Does Hashtagger track my behavior for ads?',
        answer: 'No. Hashtagger is designed around privacy and consent, not intrusive tracking.',
    },
    {
        question: 'Can I keep my personal and professional activity separate?',
        answer: 'Yes. Circles allow you to clearly separate your different worlds without creating multiple accounts.',
    },
     {
        question: 'Is my content secure?',
        answer: 'Content is protected by robust privacy layers and encryption, with you in control of what is visible and to whom.',
    },
];


export function HashtaggerPageContent() {
  return (
    <div className="flex flex-col bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="relative container z-10">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-accent animate-gradient">
                Hashtagger – Social networking without compromises.
            </motion.h1>
             <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl font-semibold text-slate-200 mt-4">
                Endless possibilities. Endless privacy.
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto max-w-[800px] text-slate-300/80 md:text-xl mt-6">
                Hashtagger is a hashtag-first social platform that lets you explore interests, build circles, and create content — all in a privacy-first, user-controlled environment. No manipulative feeds, no noise. Just meaningful, interest-driven connections.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            Get Started
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                        <Link href="/products">
                            Watch Demo
                        </Link>
                    </Button>
            </motion.div>
        </div>
      </header>

      <main className="py-20 md:py-24">
        <div className="container space-y-24">
            {/* Why Choose Hashtagger */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Hashtagger</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseHashtagger.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/50 p-6 rounded-2xl border border-primary/20 text-center flex flex-col items-center"
                        >
                            <div className="bg-primary/10 p-4 rounded-full mb-4 border border-primary/20">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-300/80">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            <section className="bg-black text-white py-20 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">We follow a structured and transparent process to ensure the successful delivery of every project, from initial discovery to final launch and beyond.</p>
                </div>
                <QuantumTimeline />
            </section>
            
            <section className="bg-background text-foreground py-20 md:py-24">
              <HashtaggerCarousel />
            </section>

            <section className="mt-24">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-primary mb-4">Interactive Content Sphere</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">Explore a dynamic sphere of content. Drag to rotate and click to view images in a modal.</p>
                </div>
                <div className="flex justify-center">
                  <ImgSphereDemo />
                </div>
            </section>

            {/* Features */}
            <section className="bg-primary/5 p-12 rounded-2xl border border-primary/20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="text-4xl font-bold text-primary mb-6">Features at a glance</h2>
                         <p className="text-lg text-slate-300/90 leading-relaxed mb-6">A feature-rich social experience designed for the modern, privacy-conscious user.</p>
                    </div>
                     <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-lg text-slate-300">
                                <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            
            {/* FAQs */}
            <section>
                <h2 className="text-4xl font-bold text-primary mb-12 text-center">Hashtagger - FAQs</h2>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                         <AccordionItem key={index} value={`item-${index+1}`} className="bg-slate-900/80 border-slate-800 rounded-lg mb-4 px-6">
                            <AccordionTrigger className="text-lg text-white hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-slate-300/80">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
            
            {/* Final CTA */}
            <section className="text-center bg-gradient-to-r from-primary/10 via-transparent to-primary/10 py-20 rounded-3xl border border-primary/20">
                <h2 className="text-4xl font-bold text-white mb-4">Join the New Era of Social Media</h2>
                <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                   Experience a social platform where your privacy and interests come first. Join the Hashtagger community today.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                        <Link href="/products">
                            Explore Other Products
                        </Link>
                    </Button>
                </div>
            </section>

        </div>
      </main>
    </div>
  );
}
