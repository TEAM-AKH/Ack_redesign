
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Users, Handshake, Award, CheckCircle } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';

const coreValues = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Integrity',
      description: 'We operate with transparency and honesty in everything we do.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Customer Centricity',
      description: 'Our clients are at the heart of our business. Their success is our success.'
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork to achieve extraordinary results.'
    },
     {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Excellence',
      description: 'We are committed to the highest standards of quality and performance.'
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

        <section className="bg-black text-white py-20 md:py-32">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Purpose</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our purpose is to help companies improve business functions, operate securely, and adopt digital innovation that creates measurable impact. We deliver end-to-end solutions in cloud, cybersecurity, intelligence, and intelligent automation to build resilient and high-performing digital ecosystems.
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
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-2xl shadow-primary/20"
                    data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-purpose')!.imageHint}
                />
              }
            </motion.div>
          </div>
        </section>

        <section className="bg-background text-foreground py-20 md:py-32">
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
                  layout="fill"
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
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-4" />
                    <span className="text-lg text-muted-foreground">{domain}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="bg-black text-white py-20 md:py-32">
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Global Delivery Model</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Our team works seamlessly across geographies, enabling:
                    </p>
                    <ul className="space-y-4 mb-6">
                        {deliveryModelBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle className="h-6 w-6 text-primary mr-4" />
                            <span className="text-lg text-slate-300">{benefit}</span>
                        </li>
                        ))}
                    </ul>
                    <p className="text-lg text-slate-300 leading-relaxed">
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
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl shadow-2xl shadow-primary/20"
                        data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-delivery-model')!.imageHint}
                    />
                }
                </motion.div>
            </div>
        </section>
        
        <section className="bg-background text-foreground py-20 md:py-32">
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
                  <p className="text-muted-foreground mt-2 text-center">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
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
                    layout="fill"
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
              <p className="text-lg text-slate-300 leading-relaxed">
                Founded in a small garage in 2018, Acknowledgement Hub started with a simple yet powerful idea: to revolutionize the way we interact with technology. Our founders, a group of passionate engineers and designers, believed that technology should be a seamless extension of human capability, not a barrier.
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
