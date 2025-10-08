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
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isDarkMode?: boolean;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
            "cursor-pointer hover:opacity-[0.9]",
            isDarkMode ? "text-white" : "text-black"
          )}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className={cn(
                    "backdrop-blur-sm rounded-2xl overflow-hidden border shadow-xl",
                    "bg-white border-black/[0.2]"
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
        "relative rounded-full border flex items-center justify-center space-x-4 px-8 py-6 shadow-input",
        isDarkMode
          ? "border-transparent bg-black"
          : "border-transparent bg-white",
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
        <h4 className={cn("text-xl font-bold mb-1", "text-black")}>
          {title}
        </h4>
        <p className={cn("text-sm max-w-[10rem]", "text-neutral-700")}>
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
        "text-purple-700 hover:text-purple-100",
        isDarkMode ? "dark:text-neutral-200" : ""
      )}
    >
      {children}
    </Link>
  );
};
