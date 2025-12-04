
"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Icon } from "lucide-react";
import {
  Briefcase,
  ShoppingBag,
  Calendar,
  Zap,
  Share2,
  Users,
} from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-primary",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function ConnectedEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Connected Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform seamlessly integrates all aspects of your workflow,
              connecting your services, products, and events in one unified
              ecosystem.
            </p>
            <ul className="mt-4 space-y-3 text-left">
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-foreground">
                  Unified platform for all your business needs
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                <span className="text-foreground">
                  Real-time synchronization across all services
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground">
                  Seamless integration with existing tools
                </span>
              </li>
            </ul>
          </div>
          <div
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
            ref={containerRef}
          >
            <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
              <div className="flex flex-row items-center justify-between">
                <Circle ref={div1Ref}>
                  <Briefcase className="w-6 h-6" />
                </Circle>
                <Circle ref={div5Ref}>
                  <ShoppingBag className="w-6 h-6" />
                </Circle>
              </div>
              <div className="flex flex-row items-center justify-between">
                <Circle ref={div2Ref}>
                  <Zap className="w-6 h-6" />
                </Circle>
                <Circle ref={div4Ref} className="size-16 bg-primary text-primary-foreground">
                  <Share2 className="w-8 h-8" />
                </Circle>
                <Circle ref={div6Ref}>
                  <Users className="w-6 h-6" />
                </Circle>
              </div>
              <div className="flex flex-row items-center justify-between">
                <Circle ref={div3Ref}>
                  <Calendar className="w-6 h-6" />
                </Circle>
                <Circle ref={div7Ref}>
                  <Share2 className="w-6 h-6" />
                </Circle>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div4Ref}
              curvature={-75}
              endYOffset={-10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div4Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div4Ref}
              curvature={75}
              endYOffset={10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div4Ref}
              curvature={-75}
              endYOffset={-10}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div4Ref}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div4Ref}
              curvature={75}
              endYOffset={10}
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
}
