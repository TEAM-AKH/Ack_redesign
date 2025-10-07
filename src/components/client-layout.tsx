'use client';

import { useState, useEffect } from 'react';
import { SiteHeader } from './layout/site-header';
import { SiteFooter } from './layout/site-footer';
import { AnimatedLoader } from './animated-loader';

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
    <div className="relative flex min-h-screen flex-col bg-white dark:bg-black">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
