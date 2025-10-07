'use client';
import React, { useState } from 'react';
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MobileNav } from './mobile-nav';
import { Logo } from '../logo';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const services = [
    {
      title: 'Cloud Solutions',
      href: '/services',
      description:
        'Scalable and secure cloud infrastructure to power your applications.',
    },
    {
      title: 'Cyber Security',
      href: '/services',
      description:
        'Protect your digital assets with our advanced threat detection and prevention services.',
    },
    {
      title: 'AI & Machine Learning',
      href: '/services',
      description:
        'Leverage the power of AI to unlock insights and automate processes.',
    },
    {
      title: 'Data Analytics',
      href: '/services',
      description:
        'Turn your data into actionable intelligence with our analytics platforms.',
    },
  ];

  const products = [
    {
      title: 'Quantum Drone',
      href: '/products',
      src: PlaceHolderImages.find((img) => img.id === 'product-1')?.imageUrl,
      'data-ai-hint': PlaceHolderImages.find((img) => img.id === 'product-1')
        ?.imageHint,
      description:
        'An autonomous drone with AI-powered flight and cinematic capabilities.',
    },
    {
      title: 'HoloWatch',
      href: '/products',
      src: PlaceHolderImages.find((img) => img.id === 'product-2')?.imageUrl,
      'data-ai-hint': PlaceHolderImages.find((img) => img.id === 'product-2')
        ?.imageHint,
      description:
        'A revolutionary smartwatch featuring a holographic interface and advanced biometrics.',
    },
    {
      title: 'NeuroLink VR',
      href: '/products',
      src: PlaceHolderImages.find((img) => img.id === 'product-3')?.imageUrl,
      'data-ai-hint': PlaceHolderImages.find((img) => img.id === 'product-3')
        ?.imageHint,
      description:
        'Immersive virtual reality headset with neural feedback for unparalleled realism.',
    },
    {
      title: 'Aura Home Hub',
      href: '/products',
      src: PlaceHolderImages.find((img) => img.id === 'product-4')?.imageUrl,
      'data-ai-hint': PlaceHolderImages.find((img) => img.id === 'product-4')
        ?.imageHint,
      description:
        'A central smart home hub that learns and adapts to your lifestyle.',
    },
  ];

  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            {services.map((service) => (
              <HoveredLink key={service.title} href={service.href}>
                {service.title}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            {products.map((product) =>
              product.src ? (
                <ProductItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                  src={product.src}
                  description={product.description}
                  data-ai-hint={product['data-ai-hint']}
                />
              ) : null
            )}
          </div>
        </MenuItem>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/about">About</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
      </Menu>
    </div>
  );
}
export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent md:bg-transparent">
        <div className="md:hidden container flex h-16 items-center justify-between bg-background/80 shadow-md backdrop-blur-sm">
            <Logo />
            <MobileNav />
        </div>
        <div className="hidden md:block">
            <Navbar />
        </div>
    </header>
  );
}
