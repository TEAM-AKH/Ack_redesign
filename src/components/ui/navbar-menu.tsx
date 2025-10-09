"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isDarkMode,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isDarkMode?: boolean;
  href?: string;
}) => {
  const handleInteraction = () => {
    if (active === item) {
      setActive("");
    } else {
      setActive(item);
    }
  };

  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative"
    >
      <motion.div
        transition={{ duration: 0.3 }}
        onClick={handleInteraction}
        className={cn(
          "cursor-pointer",
          isDarkMode ? "text-white" : "text-black",
          "hover:opacity-[0.9]"
        )}
      >
        <Link href={href || "#"}>{item}</Link>
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className={cn(
                  "backdrop-blur-sm rounded-2xl overflow-hidden border shadow-xl",
                  isDarkMode ? "bg-black/95 border-white/10" : "bg-white/95 border-black/10"
                )}
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
  isDarkMode
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn(
        "relative rounded-full border flex items-center justify-between px-8 py-4 shadow-input backdrop-blur-xl",
        isDarkMode
          ? "bg-black/50 border-white/10"
          : "bg-white/80 backdrop-blur-2xl border-black/10",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  'data-ai-hint': dataAiHint,
  isDarkMode
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  'data-ai-hint'?: string;
  isDarkMode?: boolean;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        data-ai-hint={dataAiHint}
      />
      <div>
        <h4 className={cn("text-xl font-bold mb-1", isDarkMode ? "text-white" : "text-black")}>
          {title}
        </h4>
        <p className={cn("text-sm max-w-[10rem]", isDarkMode ? "text-neutral-300" : "text-neutral-700")}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, isDarkMode, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className={cn(
        "cursor-pointer",
        isDarkMode ? "text-neutral-200" : "text-neutral-700",
        "hover:text-primary",
        rest.className
      )}
    >
      {children}
    </Link>
  );
};
