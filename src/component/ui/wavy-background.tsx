"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const simplex = useRef(createNoise3D()).current; // ✅ remove "new"
  const animationIdRef = useRef<number>();
  const [isSafari, setIsSafari] = useState(false);

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const drawWave = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    nt: number
  ) => {
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < width; x += 5) {
        const y = simplex(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + height * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    ntRef: React.MutableRefObject<number>
  ) => {
    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, width, height);
      drawWave(ctx, width, height, ntRef.current);
      ntRef.current += getSpeed();
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ntRef = { current: 0 };

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    setSize();
    render(ctx, canvas, ntRef);

    window.addEventListener("resize", setSize);
    return () => {
      cancelAnimationFrame(animationIdRef.current!);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
