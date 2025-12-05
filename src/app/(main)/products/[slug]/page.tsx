
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/products';
import { CheckCircle, ArrowRight, Server, Code, Shield, BrainCircuit, BarChart, ShoppingCart, MessageSquare, Bot, Briefcase, User, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const iconMap: { [key: string]: React.ReactNode } = {
    Server: <Server />,
    Code: <Code />,
    Shield: <Shield />,
    BrainCircuit: <BrainCircuit />,
    BarChart: <BarChart />,
    ShoppingCart: <ShoppingCart />,
    MessageSquare: <MessageSquare />,
    Bot: <Bot />,
    Briefcase: <Briefcase />,
    User: <User />,
    Hash: <Hash />,
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Product Not Found</h1>
          <p className="text-lg text-muted-foreground">The product you are looking for does not exist.</p>
          <Button asChild className="mt-8">
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-black text-white">
      {/* Header */}
      <header className="relative h-[70vh] flex items-center justify-center text-center">
        {product.link && (
            <Image
                src={product.link}
                alt={product.title}
                fill
                className="object-cover opacity-20"
            />
        )}
        <div className="relative container z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-gradient">
                {product.title}
            </h1>
            <p className="mx-auto max-w-[800px] text-slate-300/80 md:text-xl mt-4">
                {product.fullDescription}
            </p>
        </div>
      </header>

      <main className="py-20 md:py-24">
        <div className="container space-y-24">
            {/* Short Description, Key Capabilities, Outcome Focus */}
             <section>
                <div className="grid md:grid-cols-2 gap-12 text-center">
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/20">
                        <h3 className="text-2xl font-bold text-primary mb-4">Key Capabilities</h3>
                        <ul className="space-y-2 text-slate-300 text-left">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/20">
                        <h3 className="text-2xl font-bold text-primary mb-4">Solutions</h3>
                         <ul className="space-y-2 text-slate-300 text-left">
                            {product.solutionsOffered.map((outcome, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* Problem Statement */}
            <section className="grid md:grid-cols-2 gap-16 items-center">
                <div className='bg-slate-900/50 p-8 rounded-2xl border border-destructive/20'>
                    <h2 className="text-3xl font-bold text-destructive mb-4">Problem Statement</h2>
                    <p className="text-lg text-slate-300/80 leading-relaxed">{product.problemStatement}</p>
                </div>
                 <div className='relative h-80 md:h-96'>
                   <Image
                        src={product.link}
                        alt={product.title}
                        fill
                        objectFit="cover"
                        className="rounded-2xl shadow-2xl shadow-primary/20"
                    />
                </div>
            </section>

            {/* Tech Stack */}
            <section className="text-center">
                <h2 className="text-4xl font-bold text-primary mb-12">Tools & Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {product.toolsTechStack.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 text-slate-300 transition-transform hover:-translate-y-2 duration-300">
                           {iconMap[tool.icon]}
                            <span className="text-sm">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Case Studies */}
            <section>
                 <h2 className="text-4xl font-bold text-primary mb-12 text-center">Case Studies</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                    {product.caseStudies.map((study, index) => (
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
            
            {/* Final CTA */}
            <section className="text-center bg-gradient-to-r from-primary/10 via-transparent to-primary/10 py-20 rounded-3xl border border-primary/20">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to elevate your business?</h2>
                <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                    Let&apos;s discuss how {product.title} can be tailored to meet your unique challenges and goals.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                        Consult With Us <MessageSquare className="ml-2 h-5 w-5" />
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
