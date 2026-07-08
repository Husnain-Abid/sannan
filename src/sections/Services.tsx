"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Smartphone,
  Boxes,
  Palette,
  Brain,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const ICONS = [Code2, Smartphone, Boxes, Palette, Brain];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh(); // IMPORTANT FIX

      gsap.fromTo(
        ".service-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);







  return (
    <section id="services" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <SectionHeading
            eyebrow="Services"
            title="What I can build for you"
            description="I specialize in developing engaging 2D and 3D Unity games, creating scalable gameplay systems, optimizing performance, and delivering polished mobile gaming experiences using modern Unity technologies and best practices."
          />

        </div>

        <div ref={ref} className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i] ?? Code2;
            const featured = i === 2;
            return (
              <div
                key={s.title}
                className={`service-card group relative overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:bg-white/[0.04] ${featured ? "lg:row-span-1 ring-1 ring-primary/30" : ""
                  }`}
                data-cursor="hover"
                data-testid={`service-${i}`}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(closest-side, hsl(var(--primary) / 0.35), transparent)",
                  }}
                />
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2 text-xs text-foreground/80">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
