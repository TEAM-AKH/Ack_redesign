
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, BrainCircuit, Users, Award, Briefcase, ArrowRight, Heart, Coffee, TrendingUp, Monitor } from 'lucide-react';
import Link from 'next/link';

const jobOpenings = [
    {
        title: 'Senior Frontend Engineer',
        department: 'Engineering',
        location: 'Remote, Global',
    },
    {
        title: 'Cloud Solutions Architect',
        department: 'Cloud Services',
        location: 'Warangal, India',
    },
    {
        title: 'AI/ML Research Scientist',
        department: 'Innovation',
        location: 'Virtual Event',
    },
    {
        title: 'Cybersecurity Analyst',
        department: 'Security',
        location: 'Remote, Global',
    },
     {
        title: 'SAP Consultant (S/4HANA)',
        department: 'Enterprise Solutions',
        location: 'Warangal, India',
    },
     {
        title: 'UX/UI Designer',
        department: 'Product Design',
        location: 'Remote, Global',
    },
];

const coreValues = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: 'Innovate Fearlessly',
      description: 'We tackle challenges with creativity and courage, pushing the boundaries of what\'s possible.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Succeed Together',
      description: 'Our strength lies in our collaboration. We lift each other up to achieve collective greatness.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Own the Outcome',
      description: 'We take pride in our work, delivering excellence with a sense of personal responsibility.'
    },
];

const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: 'Professional Growth',
      description: 'Generous budget for courses, conferences, and certifications to fuel your development.'
    },
    {
      icon: <Coffee className="h-8 w-8 text-white" />,
      title: 'Flexible Work',
      description: 'We trust you to manage your time. Enjoy flexible hours and remote work options.'
    },
    {
      icon: <Monitor className="h-8 w-8 text-white" />,
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest tools and technologies in a dynamic, forward-thinking environment.'
    },
];

export default function CareersPage() {
  const recipientEmail = 'venubull07ff@gmail.com';
  return (
    <div className="flex flex-col bg-background">
      <header className="py-32 md:py-48 text-center bg-black">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-gradient">
            Shape the Future With Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4">
            We are a team of pioneers, thinkers, and builders. If you are passionate about solving complex problems and creating impactful technology, you belong here.
          </motion.p>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-background text-foreground py-20 md:py-32">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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

        <section id="open-positions" className="bg-black text-white py-20 md:py-32">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Current Openings</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {jobOpenings.map((job, index) => (
                    <Card key={index} className="bg-slate-900 border-slate-800 text-slate-100 transform transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
                        <CardContent className="p-6 grid md:grid-cols-[1fr_auto] items-center gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                <div className="flex items-center gap-6 text-sm text-slate-400 mt-2">
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4" />
                                        <span>{job.department}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                            </div>
                            <Button asChild variant="secondary" className="bg-slate-800 text-slate-100 hover:bg-slate-700">
                                <a href={`mailto:${recipientEmail}?subject=Application for ${encodeURIComponent(job.title)}`}>
                                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        <section className="bg-background text-foreground py-20 md:py-32">
            <div className="container text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">Our Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="bg-primary/10 p-4 rounded-full mb-4 border border-primary/20">
                            {React.cloneElement(benefit.icon, {className: "h-8 w-8 text-primary"})}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>

        <section className="bg-black text-white py-20 md:py-32">
            <div className="container text-center">
                <h2 className="text-4xl font-bold text-primary mb-4">Don't See a Fit?</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                    We are always looking for talented people. If you believe you have what it takes to join our team, send us your resume and tell us why you'd be a great addition.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">
                        Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
      </main>
    </div>
  );
}
