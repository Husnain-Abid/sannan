"use client";
import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0;
      ref.current.style.transform = `scaleX(${p / 100})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[80] h-[2px] bg-transparent">
      <div
        ref={ref}
        className="h-full origin-left bg-primary"
        style={{
          transform: "scaleX(0)",
          boxShadow: "0 0 12px hsl(var(--primary) / 0.8)",
        }}
      />
    </div>
  );
}
