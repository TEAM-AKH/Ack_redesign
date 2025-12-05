
'use client';
import React from 'react';
import Component from '@/components/ui/stacking-card';
import { products } from '@/lib/products';
import { ArcFeatureReveal } from '@/components/ui/arc-feature-reveal';

const timelineData = products.map(p => ({
    id: p.id,
    title: p.shortTitle,
    date: p.releaseDate,
    content: p.description,
    slug: p.slug,
    category: p.category,
    icon: p.icon,
    relatedIds: [],
    status: "completed" as const,
    energy: 100,
}))

export default function ProductsPage() {
  return (
    <>
      <section className='text-white h-auto py-48 w-full bg-slate-950 grid place-content-center'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        <h1 className='text-6xl sm:text-8xl md:text-9xl px-8 font-semibold text-center tracking-tight leading-[120%] bg-gradient-to-r from-purple-400 via-primary to-purple-900 bg-clip-text text-transparent'>
          Our Products
        </h1>
      </section>
      <section>
        <ArcFeatureReveal />
      </section>
      <section>
        <Component projects={products} />
      </section>
    </>
  );
}
