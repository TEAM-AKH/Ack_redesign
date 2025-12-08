
'use client';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Eye, Zap, ArrowRight, ShieldCheck, Lock, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CyberMatrixHero from '@/components/ui/cyber-matrix-hero';
import { Timeline } from '@/components/ui/timeline';

const whyChooseWfx = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-accent" />,
        title: 'Multi-Layer Protection',
        description: 'Defense at the data, access, and system levels.',
    },
    {
        icon: <Lock className="h-8 w-8 text-accent" />,
        title: 'Privacy & Integrity by Design',
        description: 'Built to protect sensitive information from misuse or tampering.',
    },
    {
        icon: <Eye className="h-8 w-8 text-accent" />,
        title: 'Enterprise-Ready',
        description: 'Suitable for regulated industries and security-sensitive environments.',
    },
    {
        icon: <Layers className="h-8 w-8 text-accent" />,
        title: 'Scales with Your Infrastructure',
        description: 'As your systems grow, W.F.X grows with them.',
    },
];

const howItWorks = [
    {
        title: 'Step 1: Integrate',
        content: <p className="text-slate-300">W.F.X plugs into your existing architecture.</p>
    },
    {
        title: 'Step 2: Apply',
        content: <p className="text-slate-300">Access controls, privacy guardrails, and integrity checks.</p>
    },
    {
        title: 'Step 3: Monitor',
        content: <p className="text-slate-300">The system observes critical events and surfaces risks.</p>
    },
    {
        title: 'Step 4: Improve',
        content: <p className="text-slate-300">Use insights to strengthen your security posture over time.</p>
    },
];

const features = [
    'Multi-layer security enforcement',
    'Access & identity control hooks',
    'Data privacy protection mechanisms',
    'Integrity monitoring and alerting',
    'Compliance-friendly architecture',
];

const faqs = [
    {
        question: 'Is W.F.X only for large enterprises?',
        answer: 'No. It can support both growing companies and large enterprises.',
    },
    {
        question: 'Does W.F.X replace existing security tools?',
        answer: 'It can complement your existing stack, acting as a foundational layer.',
    },
    {
        question: 'Does W.F.X handle user data directly?',
        answer: 'It is designed to secure data access and integrity based on your configurations.',
    },
];


export function WfxPageContent() {
  return (
    <div className="flex flex-col bg-black text-white">
      {/* Hero Section */}
      <CyberMatrixHero />

      <main className="py-20 md:py-24">
        <div className="container space-y-24">
            {/* Why Choose W.F.X */}
            <section id="use-cases">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Why Choose W.F.X</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseWfx.map((item, index) => (
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
            
            {/* How It Works */}
            <section>
                 <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-neutral-500 mb-4">How It Works</h2>
                </div>
                <Timeline data={howItWorks} />
            </section>

            {/* Features */}
            <section className="bg-primary/5 p-12 rounded-2xl border border-primary/20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="text-4xl font-bold text-primary mb-6">Core Features</h2>
                         <p className="text-lg text-slate-300/90 leading-relaxed mb-6">A comprehensive security suite to protect your organization's digital assets.</p>
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
                <h2 className="text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
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
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Secure Your Digital Future?</h2>
                <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                    Learn how W.F.X can provide the foundational security your organization needs to innovate with confidence.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            Talk to Security Team <ArrowRight className="ml-2 h-5 w-5" />
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
