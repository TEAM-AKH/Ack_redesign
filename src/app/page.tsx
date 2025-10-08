
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, Calendar, ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { Testimonials } from '@/components/testimonials';
import { BackgroundBoxesSection } from '@/components/background-boxes-section';
import { Feature108 } from '@/components/feature-section';

const features = [
  {
    title: 'Our Services',
    description: 'Discover the professional services we offer to help you grow.',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    link: '/services',
    image: PlaceHolderImages.find((img) => img.id === 'feature-services'),
  },
  {
    title: 'Our Products',
    description:
      'Explore our innovative products designed to meet your needs.',
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    link: '/products',
    image: PlaceHolderImages.find((img) => img.id === 'feature-products'),
  },
  {
    title: 'Upcoming Events',
    description: 'Join us for our upcoming events and workshops.',
    icon: <Calendar className="h-8 w-8 text-primary" />,
    link: '/events',
    image: PlaceHolderImages.find((img) => img.id === 'feature-events'),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section>
            <BackgroundPaths title="Welcome to Acknowledgement Hub" />
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Offerings
                </h2>
                <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a diverse range of services, products, and events
                  to cater to your every need. Dive in and explore what we have
                  to offer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-slate-800/50 border-slate-700 text-slate-100 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                >
                   {feature.image && (
                    <CardContent className="p-0">
                      <Image
                        src={feature.image.imageUrl}
                        alt={feature.image.description}
                        width={600}
                        height={400}
                        className="rounded-t-lg object-cover aspect-[3/2]"
                        data-ai-hint={feature.image.imageHint}
                      />
                    </CardContent>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-slate-300 pt-2">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-accent">
                      <Link href={feature.link}>
                        Explore {feature.title.split(' ')[1]}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Feature108 />

        <Testimonials />

      </main>
      <BackgroundBoxesSection />
    </div>
  );
}
