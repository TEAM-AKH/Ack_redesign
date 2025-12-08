
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Eye, Zap, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const whyChooseTms = [
    {
        icon: <Users className="h-8 w-8 text-accent" />,
        title: 'Clear roles, clear ownership',
        description: 'Every user sees what they need — and only what they need.',
    },
    {
        icon: <Eye className="h-8 w-8 text-accent" />,
        title: 'Real-time visibility',
        description: 'Track projects, tasks, blockers, and progress updates in one place.',
    },
    {
        icon: <Zap className="h-8 w-8 text-accent" />,
        title: 'Less chasing, more doing',
        description: 'Automated updates reduce the need for manual follow-ups.',
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-accent" />,
        title: 'Made for scale',
        description: 'Works just as well for a 5-person team as for a multi-department organization.',
    },
];

const howItWorksContent = [
    {
      title: "1. Set up your hierarchy",
      description:
        "Define roles like Employee → Team Lead → Manager → Project Manager → Client → Admin.",
    },
    {
      title: "2. Create projects and tasks",
      description:
        "Assign ownership, deadlines, and dependencies to structure your workflow.",
    },
    {
      title: "3. Track progress visually",
      description:
        "View dashboards, timelines, and completion statuses at every level for full transparency.",
    },
    {
      title: "4. Review & optimize",
      description:
        "Use insights and history to refine workflows and improve team performance over time.",
    },
];

const features = [
    'Role-based access and dashboards',
    'Task creation, assignment, and tracking',
    'Project progress and timeline visualization',
    'Centralized meeting notes and documentation',
    'Custom performance metric tracking (eKPIs)',
    'Real-time updates and notifications',
];

const faqs = [
    {
        question: 'Is T.M.S only for IT teams?',
        answer: 'No. T.M.S can be used by any team that manages projects and tasks — tech, operations, creative, etc.',
    },
    {
        question: 'Can clients view project status?',
        answer: 'Yes, through controlled client-side views.',
    },
    {
        question: 'Does T.M.S replace chat tools?',
        answer: 'It doesn’t replace messaging but reduces dependency by making work status self-explanatory.',
    },
    {
        question: 'How complex is setup?',
        answer: 'Most structures can be configured quickly. Advanced setups can be layered over time.',
    },
];


export function TmsPageContent() {
  return (
    <div className="flex flex-col bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="relative container z-10">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-accent animate-gradient">
                T.M.S – One workspace for every team.
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto max-w-[800px] text-slate-300/80 md:text-xl mt-6">
                T.M.S brings structure to tasks, projects, and team communication. From employees to managers and clients, everyone gets a clear view of what matters — without clutter or confusion.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            Try T.M.S
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                        <Link href="#use-cases">
                            View Use Cases
                        </Link>
                    </Button>
            </motion.div>
        </div>
      </header>

      <main className="py-20 md:py-24">
        <div className="container space-y-24">
            {/* Why Choose T.M.S */}
            <section id="use-cases">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Why Choose T.M.S</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseTms.map((item, index) => (
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
                 <div className="text-center mb-24">
                    <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
                </div>
                <StickyScroll content={howItWorksContent} />
            </section>

            {/* Features */}
            <section className="bg-primary/5 p-12 rounded-2xl border border-primary/20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="text-4xl font-bold text-primary mb-6">Core Features</h2>
                         <p className="text-lg text-slate-300/90 leading-relaxed mb-6">Everything you need to manage your team and projects effectively, all in one place.</p>
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
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Team's Productivity?</h2>
                <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                    Get started with T.M.S today and bring clarity, efficiency, and scale to your team's operations.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            Try T.M.S <ArrowRight className="ml-2 h-5 w-5" />
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
