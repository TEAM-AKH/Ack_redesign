
'use client';
import React from 'react';
import Component from '@/components/ui/stacking-card';
import { RadialOrbitalTimelineDemo } from '@/components/ui/radial-orbital-timeline-demo';

const projects = [
  {
    title: 'TMS - Team Management System',
    description:
      'A comprehensive tool for managing teams, tasks, and project workflows efficiently.',
    link: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTk3NzQzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#5196fd',
  },
  {
    title: 'RMS - Resource Management System',
    description:
      'Optimize resource allocation, track utilization, and forecast needs with our powerful RMS.',
    link: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZXNvdXJjZSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzY1NTc3MTEyfDA&ixlib-rb-4.1.0&q=80&w=1080',
    color: '#8f89ff',
  },
  {
    title: 'WFx - Wolfronix',
    description:
      'An innovative platform for next-generation workflow automation and integration.',
    link: 'https://images.unsplash.com/photo-1611095790444-1dfa3c8a1f2w?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3b3JrZmxvdyUyMGF1dG9tYXRpb258ZW58MHx8fHwxNzY1NTc3MTM4fDA&ixlib-rb-4.1.0&q=80&w=1080',
    color: '#13006c',
  },
  {
    title: 'CST - Customer Support Tool',
    description:
      'Enhance customer satisfaction with a streamlined and intelligent support ticketing system.',
    link: 'https://images.unsplash.com/photo-1611095782313-0b0a8f3c7f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNzY1NTc3MTY1fDA&ixlib-rb-4.1.0&q=80&w=1080',
    color: '#ed649e',
  },
];

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
        <RadialOrbitalTimelineDemo />
      </section>
      <section>
        <Component projects={projects} />
      </section>
    </>
  );
}
