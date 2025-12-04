
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
import { Feature108 } from '@/components/feature-section';
import { Gallery6 } from '@/components/ui/gallery6';
import { CyberneticBentoGrid } from '@/components/ui/cybernetic-bento-grid';
import { ConnectedEcosystem } from '@/components/connected-ecosystem';

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
          <CyberneticBentoGrid />
        </section>

        <Feature108 />

        <ConnectedEcosystem />

        <section className="bg-black text-white">
          <Gallery6 items={galleryItems} heading="Featured Projects" />
        </section>

      </main>
    </div>
  );
}
