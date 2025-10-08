'use client';

import { useState, useEffect } from 'react';
import { SiteHeader } from './layout/site-header';
import { SiteFooter } from './layout/site-footer';
import { AnimatedLoader } from './animated-loader';
import { MarqueeDemo2 } from './marquee-demo';
import { BackgroundBoxesSection } from './background-boxes-section';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AnimatedLoader />;
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <MarqueeDemo2 />
      <BackgroundBoxesSection />
      <SiteFooter />
    </div>
  );
}
