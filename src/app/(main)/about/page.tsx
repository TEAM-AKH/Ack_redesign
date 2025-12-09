
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Users, Code, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { PlaceHolderImages } from '@/lib/placeholder-images';

const coreValues = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Innovation at the Core',
      description: 'We constantly push boundaries to design futuristic, AI-driven, and sustainable digital experiences.'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Integrity & Trust',
      description: 'Transparency, accountability, and reliability form the backbone of every solution we deliver.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Customer-Centric Mindset',
      description: 'We align our success with the success of our clients — every solution is tailor-made with measurable outcomes.'
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: 'Engineering Excellence',
      description: 'Our teams follow global standards, proven frameworks, and rigorous quality assurance for flawless delivery.'
    },
     {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: 'Security by Design',
      description: 'Every platform, every product, every deployment is infused with enterprise-grade security principles.'
    },
];

const domains = [
    'Cloud Ecosystems (IaaS, PaaS, SaaS)',
    'Enterprise digital transformation',
    'Cybersecurity & Governance',
    'Cloud migration',
    'Cyber audits, IAM, MFA, risk assessment, 360° security',
    'AI/ML solutions',
    'NLP, analytics, automation',
    'SAP Transformation',
    'Product Engineering',
    'Application modernization',
    'DevOps Integration',
    'System optimization',
];

const deliveryModelBenefits = [
    'Faster development cycles',
    '24×7 operational availability',
    'High-quality implementation processes',
];

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
            We are a global technology solutions company delivering intelligent digital platforms, enterprise services, and next-generation products across cloud, cybersecurity, AI/ML, and digital transformation.
          </motion.p>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-black text-white py-20 md:py-32">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
             <motion.div
                className="relative h-80 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
               {PlaceHolderImages.find(p => p.id === 'about-story') &&
                <Image
                    src={PlaceHolderImages.find(p => p.id === 'about-story')!.imageUrl}
                    alt="Our Story"
                    fill
                    objectFit="cover"
                    className="rounded-2xl shadow-2xl shadow-primary/20"
                    data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-story')!.imageHint}
                />
               }
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h2>
                <div className="text-lg text-slate-300 leading-relaxed space-y-4">
                    <p>
                        Global Acknowledgment Hub (GAH) was founded with a simple belief — technology should empower, not overwhelm. In a rapidly evolving digital world, enterprises need unified, intelligent, and secure systems that can scale with their ambitions. GAH was formed to bridge this gap.
                    </p>
                    <p>
                        We began as a technology consulting startup and quickly expanded into a multi-domain innovation hub, delivering solutions worldwide.
                    </p>
                    <p>
                        Today, we partner with organizations across industries to modernize, secure, and accelerate their digital journeys.
                    </p>
                </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background text-foreground py-20 md:py-32">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with intelligent, secure, and scalable technology solutions that accelerate digital transformation and unlock long-term success.
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
                    fill
                    objectFit="cover"
                    className="rounded-2xl shadow-2xl shadow-primary/20"
                    data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-mission')!.imageHint}
                />
              }
            </motion.div>
          </div>
        </section>

        <section className="bg-black text-white py-20 md:py-32">
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
                    fill
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
              <p className="text-lg text-slate-300 leading-relaxed">
                To become a globally trusted hub for acknowledgment, innovation, and next-generation digital ecosystems, setting new standards in enterprise technology delivery
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-background text-foreground py-20 md:py-32">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Purpose</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We exist to enable businesses to innovate fearlessly, operate securely, and adopt digital transformation without complexity. We combine human insight, engineering excellence, and intelligent automation to build platforms that elevate efficiency and drive measurable growth.
              </p>
            </motion.div>
            <motion.div
                className="relative h-80 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              {PlaceHolderImages.find(p => p.id === 'about-purpose') &&
                <Image
                    src={PlaceHolderImages.find(p => p.id === 'about-purpose')!.imageUrl}
                    alt="Our Purpose"
                    fill
                    objectFit="cover"
                    className="rounded-2xl shadow-2xl shadow-primary/20"
                    data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-purpose')!.imageHint}
                />
              }
            </motion.div>
          </div>
        </section>

        <section className="bg-black text-white py-20 md:py-32">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative h-96 md:h-[500px] md:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              {PlaceHolderImages.find(p => p.id === 'about-domains') && (
                <Image
                  src={PlaceHolderImages.find(p => p.id === 'about-domains')!.imageUrl}
                  alt="Domains of Excellence"
                  fill
                  objectFit="cover"
                  className="rounded-2xl shadow-2xl shadow-primary/20"
                  data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-domains')!.imageHint}
                />
              )}
            </motion.div>
            <motion.div
              className="md:order-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Domains of Excellence</h2>
              <ul className="space-y-4">
                {domains.map((domain, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-300">{domain}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="bg-background text-foreground py-20 md:py-32">
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Global Delivery Model</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Our team works seamlessly across geographies, enabling:
                    </p>
                    <ul className="space-y-4 mb-6">
                        {deliveryModelBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle className="h-6 w-6 text-primary mr-4" />
                            <span className="text-lg text-muted-foreground">{benefit}</span>
                        </li>
                        ))}
                    </ul>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We combine the agility of a startup with the discipline of a consulting firm.
                    </p>
                </motion.div>
                <motion.div
                    className="relative h-80 md:h-96"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                {PlaceHolderImages.find(p => p.id === 'about-delivery-model') &&
                    <Image
                        src={PlaceHolderImages.find(p => p.id === 'about-delivery-model')!.imageUrl}
                        alt="Global Delivery Model"
                        fill
                        objectFit="cover"
                        className="rounded-2xl shadow-2xl shadow-primary/20"
                        data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-delivery-model')!.imageHint}
                    />
                }
                </motion.div>
            </div>
        </section>
        
        <section className="bg-black text-white py-20 md:py-32">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-4 rounded-full mb-4 border border-primary/20">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-slate-300 mt-2 text-center">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="bg-background text-foreground py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center bg-primary/5 p-8 rounded-2xl border border-primary/20">
                <motion.div
                    className="md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Join Our Team</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        We are always looking for passionate and talented individuals to join our team. If you are driven by innovation and want to make an impact, we would love to hear from you.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">
                            View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </motion.div>
                <motion.div
                    className="relative h-80 md:h-96 md:order-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    {PlaceHolderImages.find(p => p.id === 'about-join-team') &&
                        <Image
                            src={PlaceHolderImages.find(p => p.id === 'about-join-team')!.imageUrl}
                            alt="Join Our Team"
                            fill
                            objectFit="cover"
                            className="rounded-2xl shadow-lg"
                            data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-join-team')!.imageHint}
                        />
                    }
                </motion.div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}


export default function AboutPage() {
    return <AboutPageClient />;
}
