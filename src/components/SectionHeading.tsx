"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      const words = el.querySelectorAll<HTMLSpanElement>(".sh-word");
      gsap.from(words, {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.05,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
      const eyebrowEl = el.querySelector(".sh-eyebrow");
      const descEl = el.querySelector(".sh-desc");
      if (eyebrowEl) {
        gsap.from(eyebrowEl, {
          y: 16,
          opacity: 0,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      }
      if (descEl) {
        gsap.from(descEl, {
          y: 16,
          opacity: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  const words = title.split(" ");

  return (
    <div
      ref={ref}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <div className="sh-eyebrow inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-4 font-display text-[clamp(2rem,5.2vw,4rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-baseline pr-[0.22em]">
            <span className="sh-word inline-block">{w}</span>
          </span>
        ))}
      </h2>
      {description ? (
        <p className="sh-desc mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
