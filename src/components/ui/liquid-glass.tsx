"use client";

import { cn } from "@/lib/utils";
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  HTMLAttributes,
} from "react";

interface LiquidGlassProps {
  radius?: number;
  border?: number;
  lightness?: number;
  displace?: number;
  blend?: string;
  xChannel?: "R" | "G" | "B" | "A";
  yChannel?: "R" | "G" | "B" | "A";
  alpha?: number;
  blur?: number;
  rOffset?: number;
  gOffset?: number;
  bOffset?: number;
  scale?: number;
  frost?: number;
  className?: HTMLAttributes<"div">["className"];
  containerClass?: HTMLAttributes<"div">["className"];
  children: React.ReactNode;
}

export const LiquidGlass = ({
  radius = 16,
  border = 0.07,
  lightness = 50,
  displace = 0.05,
  blend = "difference",
  xChannel = "R",
  yChannel = "B",
  alpha = 0.93,
  blur = 11,
  rOffset = 0,
  gOffset = 10,
  bOffset = 20,
  scale = -180,
  frost = 0.05,
  className,
  containerClass,
  children,
}: LiquidGlassProps) => {
  const liquidGlassRoot = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const filterId = useMemo(() => `displacementFilter-${Math.random().toString(36).substring(7)}`, []);


  const baseStyle = {
    "--frost": frost,
    borderRadius: `${radius}px`,
  } as React.CSSProperties;

  const displacementImage = useMemo(() => {
    const b = Math.min(dimensions.width, dimensions.height) * (border * 0.5);
    const yBorder = Math.min(dimensions.width, dimensions.height) * (border * 0.5);

    return `
      <svg viewBox="0 0 ${dimensions.width} ${dimensions.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${dimensions.width}" height="${
      dimensions.height
    }" fill="black"></rect>
        <rect x="0" y="0" width="${dimensions.width}" height="${
      dimensions.height
    }" rx="${radius}" fill="url(#red)" />
        <rect x="0" y="0" width="${dimensions.width}" height="${
      dimensions.height
    }" rx="${radius}" fill="url(#blue)" style="mix-blend-mode: ${blend}" />
        <rect 
          x="${b}" 
          y="${yBorder}" 
          width="${dimensions.width - b * 2}" 
          height="${dimensions.height - yBorder * 2}" 
          rx="${radius}" 
          fill="hsl(0 0% ${lightness}% / ${alpha})" 
          style="filter:blur(${blur}px)" 
        />
      </svg>
    `;
  }, [dimensions, border, radius, blend, lightness, alpha, blur]);

  const displacementDataUri = useMemo(() => {
    const encoded = encodeURIComponent(displacementImage);
    return `data:image/svg+xml,${encoded}`;
  }, [displacementImage]);

  useEffect(() => {
    const node = liquidGlassRoot.current;
    if (!node) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      let width = 0;
      let height = 0;

      if (entry.borderBoxSize && entry.borderBoxSize?.length) {
        width = entry.borderBoxSize[0]!.inlineSize;
        height = entry.borderBoxSize[0]!.blockSize;
      } else if (entry.contentRect) {
        width = entry.contentRect.width;
        height = entry.contentRect.height;
      }

      setDimensions({ width, height });
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={liquidGlassRoot}
      className={cn("effect relative", containerClass)}
      style={baseStyle}
    >
      <div className={cn("slot-container", className)}>{children}</div>

      <svg className="filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feImage
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={displacementDataUri}
              result="map"
            />
            <feDisplacementMap
              id="redchannel"
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + rOffset}
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="red"
            />
            <feDisplacementMap
              id="greenchannel"
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + gOffset}
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="green"
            />
            <feDisplacementMap
              id="bluechannel"
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + bOffset}
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
              result="blue"
            />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur stdDeviation={displace} />
          </filter>
        </defs>
      </svg>
      <style jsx>{`
        .effect {
          display: block;
          opacity: 1;
          border-radius: inherit;
          backdrop-filter: url(#${filterId});
          background: hsl(0 0% 100% / var(--frost, 0));
        }
        .dark .effect {
            background: hsl(0 0% 0% / var(--frost, 0));
        }

        .slot-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: inherit;
        }

        .filter {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};
