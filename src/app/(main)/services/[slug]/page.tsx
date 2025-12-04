
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/services';
import { CheckCircle, ArrowRight, Server, Code, Shield, BrainCircuit, BarChart, ShoppingCart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
          <p className="text-lg text-muted-foreground">The service you are looking for does not exist.</p>
          <Button asChild className="mt-8">
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-black text-white">
      {/* Header */}
      <header className="relative h-[70vh] flex items-center justify-center text-center">
        {service.image && (
            <Image
                src={service.image.imageUrl}
                alt={service.title}
                fill
                className="object-cover opacity-20"
                data-ai-hint={service.image.imageHint}
            />
        )}
        <div className="relative container z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-gradient">
                {service.title}
            </h1>
            <p className="mx-auto max-w-[800px] text-slate-300/80 md:text-xl mt-4">
                {service.fullDescription}
            </p>
        </div>
      </header>

      <main className="py-20 md:py-24">
        <div className="container space-y-24">
            {/* Short Description, Key Capabilities, Outcome Focus */}
             <section>
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/20">
                        <h3 className="text-2xl font-bold text-primary mb-4">Description</h3>
                        <p className="text-slate-300">{service.description}</p>
                    </div>
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/20">
                        <h3 className="text-2xl font-bold text-primary mb-4">Key Capabilities</h3>
                        <ul className="space-y-2 text-slate-300 text-left">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/20">
                        <h3 className="text-2xl font-bold text-primary mb-4">Outcome Focus</h3>
                         <ul className="space-y-2 text-slate-300 text-left">
                            {service.outcomeFocus.map((outcome, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* Problem & Solution */}
            <section className="grid md:grid-cols-2 gap-16 items-center">
                <div className='bg-slate-900/50 p-8 rounded-2xl border border-destructive/20'>
                    <h2 className="text-3xl font-bold text-destructive mb-4">Problem Statement</h2>
                    <p className="text-lg text-slate-300/80 leading-relaxed">{service.problemStatement}</p>
                </div>
                 <div className='bg-slate-900/50 p-8 rounded-2xl border border-accent/20'>
                    <h2 className="text-3xl font-bold text-accent mb-4">Solutions We Offer</h2>
                    <ul className="space-y-3 text-lg text-slate-300/80">
                         {service.solutionsOffered.map((solution, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                <span>{solution}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="text-center">
                <h2 className="text-4xl font-bold text-primary mb-12">Tools & Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {service.toolsTechStack.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 text-slate-300 transition-transform hover:-translate-y-2 duration-300">
                           {tool.icon}
                            <span className="text-sm">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose GAH */}
            <section className="bg-primary/5 p-12 rounded-2xl border border-primary/20">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                        <BrainCircuit className="h-24 w-24 text-primary mx-auto md:mx-0"/>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-4xl font-bold text-primary mb-6 text-center md:text-left">Why Choose GAH?</h2>
                        <p className="text-lg text-slate-300/90 leading-relaxed">{service.whyChooseGAH}</p>
                    </div>
                </div>
            </section>
            
            {/* Case Studies */}
            <section>
                 <h2 className="text-4xl font-bold text-primary mb-12 text-center">Case Studies</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                    {service.caseStudies.map((study, index) => (
                        <Card key={index} className="bg-slate-900 border-slate-800 text-slate-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">{study.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-400">{study.description}</p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button asChild variant="secondary" className="bg-slate-800 text-slate-100 hover:bg-slate-700">
                                    <Link href={study.link}>
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                 </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                    {service.faqs.map((faq, index) => (
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
                <h2 className="text-4xl font-bold text-white mb-4">Ready to elevate your business?</h2>
                <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                    Let&apos;s discuss how our {service.title} expertise can be tailored to meet your unique challenges and goals.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                        Consult With Us <MessageSquare className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                        <Link href="/services">
                        Explore Other Services
                        </Link>
                    </Button>
                </div>
            </section>

        </div>
      </main>
    </div>
  );
}
