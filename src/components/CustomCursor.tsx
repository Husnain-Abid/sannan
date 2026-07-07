"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || isCoarse) return;

    document.body.classList.add("no-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    const enterInteractive = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.9, duration: 0.25 });
    };
    const leaveInteractive = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.25 });
    };

    const interactive = "a, button, [data-cursor='hover'], input, textarea, select, [role='button']";
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", enterInteractive);
      el.addEventListener("mouseleave", leaveInteractive);
    });

    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      gsap.set(ring, { x: ringX, y: ringY });
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMove);
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener("mouseenter", enterInteractive);
        el.removeEventListener("mouseleave", leaveInteractive);
      });
      document.body.classList.remove("no-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden lg:block"
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: 999,
          border: "1px solid hsl(var(--primary) / 0.7)",
          boxShadow: "0 0 24px hsl(var(--primary) / 0.35)",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden lg:block"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: 999,
          background: "hsl(var(--primary))",
          boxShadow: "0 0 12px hsl(var(--primary) / 0.9)",
        }}
      />
    </>
  );
}
