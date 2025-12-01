'use client';
import React from 'react';
import Component from '@/components/ui/stacking-card';

const projects = [
  {
    title: 'Quantum Drone',
    description:
      'An autonomous drone with AI-powered flight and cinematic capabilities.',
    link: 'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzbWFydCUyMHdhdGNofGVufDB8fHx8MTc1OTc0MDkyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#5196fd',
  },
  {
    title: 'HoloWatch',
    description:
      'A revolutionary smartwatch featuring a holographic interface and advanced biometrics.',
    link: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx2aXJ0dWFsJTIwcmVhbGl0eXxlbnwwfHx8fDE3NTk3NTY4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#8f89ff',
  },
  {
    title: 'NeuroLink VR',
    description:
      'Immersive virtual reality headset with neural feedback for unparalleled realism.',
    link: 'https://images.unsplash.com/photo-1615829386703-e2bb66a7cb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxlbGVjdHJpYyUyMGNhcnxlbnwwfHx8fDE3NTk3NzY2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#13006c',
  },
  {
    title: 'Aura Home Hub',
    description:
      'A central smart home hub that learns and adapts to your lifestyle.',
    link: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTk3NzQzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ed649e',
  },
  {
    title: 'Atlas Companion Bot',
    description:
      'A personal robotic assistant designed to help with daily tasks and organization.',
    link: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc1OTcyMjIzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#fd521a',
  },
];

export default function ProductsPage() {
  return (
    <Component projects={projects} />
  );
}
