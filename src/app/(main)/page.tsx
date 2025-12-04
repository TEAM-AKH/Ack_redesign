
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
import { Feature108 } from '@/components/feature-section';
import { Gallery6 } from '@/components/ui/gallery6';

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

const galleryItems = [
  {
    id: 'item-1',
    title: 'Build Modern UIs',
    summary:
      'Create stunning user interfaces with our comprehensive design system.',
    url: '#',
    image:
      'https://images.unsplash.com/photo-1545239351-ef35f43d514b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MHx8fHwxNzU5NzU4MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'item-2',
    title: 'Design System Components',
    summary:
      'Explore our library of customizable components built with shadcn/ui and Tailwind CSS.',
    url: '#',
    image:
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21wb25lbnQlMjBsaWJyYXJ5fGVufDB8fHx8MTc2MDE5NTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'item-3',
    title: 'Responsive Layouts',
    summary:
      'Build websites that look great on any device with our responsive design patterns.',
    url: '#',
    image:
      'https://images.unsplash.com/photo-1555774698-0b77e0abfe3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwZGVzaWdufGVufDB8fHx8MTc2MDE5NTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'item-4',
    title: 'Developer Experience',
    summary:
      'Streamline your workflow with our developer-friendly tools and documentation.',
    url: '#',
    image:
      'https://images.unsplash.com/photo-1517694712202-1428bc3cd405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NjAxOTU1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'item-5',
    title: 'Performance First',
    summary:
      'Create fast, optimized websites using our performance-focused components.',
    url: '#',
    image:
      'https://images.unsplash.com/photo-1599837563053-6058a5c683b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZpbGUlMjBkb3dubG9hZHxlbnwwfHx8fDE3NjAxOTU1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section>
            <BackgroundPaths title="Global Acknowledgment Hub" />
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black text-slate-50">
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
                  className="group h-full bg-slate-900 border-slate-800 text-slate-100 backdrop-blur-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
                >
                  {feature.image && (
                    <div className="overflow-hidden">
                       <Image
                        src={feature.image.imageUrl}
                        alt={feature.image.description}
                        width={600}
                        height={400}
                        className="rounded-t-lg object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={feature.image.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-4">
                        {feature.icon}
                        <CardTitle className="text-2xl">{feature.title}</CardTitle>
                      </div>
                      <CardDescription className="text-slate-300 pt-2">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-auto pt-6">
                      <Button asChild variant="secondary" className="w-full bg-slate-800 text-slate-100 hover:bg-slate-700">
                        <Link href={feature.link}>
                          Explore {feature.title.split(' ')[1]}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Feature108 />

        <section className="bg-black text-white">
          <Gallery6 items={galleryItems} heading="Featured Projects" />
        </section>

        <Testimonials />

      </main>
    </div>
  );
}
