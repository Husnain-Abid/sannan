"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Loader() {
  const ref = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!ref.current || !wordRef.current) return;
    const tl = gsap.timeline({
      onComplete: () => setHidden(true),
    });
    const letters = wordRef.current.querySelectorAll("span");
    tl.set(ref.current, { autoAlpha: 1 })
      .from(letters, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: "power3.out",
      })
      .to(letters, {
        opacity: 0.85,
        duration: 0.4,
      })
      .to(
        ref.current,
        {
          yPercent: -100,
          duration: 1.0,
          ease: "expo.inOut",
          delay: 0.25,
        },
        "+=0.1",
      );
    return () => {
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      data-testid="loader-overlay"
    >
      <div className="absolute inset-0 gradient-radial opacity-70" />
      <div
        ref={wordRef}
        className="relative font-display text-5xl md:text-7xl font-extrabold tracking-tight"
      >
        {"HUSNAIN.DEV".split("").map((c, i) => (
          <span
            key={i}
            className={`inline-block ${c === "." ? "text-primary text-glow" : ""}`}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
