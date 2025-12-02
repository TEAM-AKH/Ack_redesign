'use client';

import { useState, useEffect } from 'react';
import { SiteHeader } from './layout/site-header';
import { SiteFooter } from './layout/site-footer';
import { AnimatedLoader } from './animated-loader';
import { MarqueeDemo2 } from './marquee-demo';
import { BackgroundBoxesSection } from './background-boxes-section';
import ClickSpark from './ui/click-spark';
import { useTheme } from 'next-themes';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const [sparkColor, setSparkColor] = useState('#6119aa');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // This will run on client side only, after hydration
    // You can't get the computed style on the server
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    if (accentColor) {
      // The color is in HSL format "H S% L%", we need to convert it to "hsl(H, S%, L%)"
      const hslColor = `hsl(${accentColor.trim().split(' ').join(', ')})`;
      setSparkColor(hslColor);
    }
  }, [theme]);


  if (loading) {
    return <AnimatedLoader />;
  }

  return (
    <ClickSpark sparkColor={sparkColor}>
      <div className="relative flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <MarqueeDemo2 />
        <BackgroundBoxesSection />
        <SiteFooter />
      </div>
    </ClickSpark>
  );
}
