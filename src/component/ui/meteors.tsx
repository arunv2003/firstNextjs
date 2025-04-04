"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface MeteorProps {
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<MeteorProps[]>([]);

  useEffect(() => {
    const newMeteors = new Array(number).fill(true).map((_, idx) => {
      const position = idx * (800 / number) - 400;
      return {
        top: "-40px",
        left: `${position}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.floor(Math.random() * 5 + 5)}s`,
      };
    });

    setMeteorStyles(newMeteors);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={style}
        />
      ))}
    </motion.div>
  );
};
