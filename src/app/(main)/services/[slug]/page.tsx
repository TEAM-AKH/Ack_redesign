
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/services';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    <div className="flex flex-col bg-background">
      <header className="relative h-[60vh] flex items-center justify-center text-center">
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
            <p className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4">
                {service.fullDescription}
            </p>
        </div>
      </header>

      <main className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
             <div className="relative h-80 md:h-96">
                {service.image && (
                    <Image
                        src={service.image.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover rounded-2xl shadow-2xl shadow-primary/20"
                        data-ai-hint={service.image.imageHint}
                    />
                )}
            </div>
          </div>

           <div className="mt-24 bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">Ready to get started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our {service.title} can help your business.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
           </div>
        </div>
      </main>
    </div>
  );
}

