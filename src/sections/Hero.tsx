import { lazy, Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const HeroScene = lazy(() => import("@/components/HeroScene"));

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const words = titleRef.current?.querySelectorAll<HTMLSpanElement>(".word") ?? [];

      const tl = gsap.timeline({ delay: 1.6, defaults: { ease: "expo.out" } });
      tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.8 })
        .from(words, { yPercent: 110, opacity: 0, duration: 1.0, stagger: 0.06 }, "-=0.5")
        .from(subRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(
          ctaRef.current?.children ?? [],
          { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 },
          "-=0.5",
        )
        .from(metaRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const headline = ["Building", "Modern", "Scalable", "Web", "Applications"];

  return (
    <section
      ref={root}
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden grain"
    >
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <ErrorBoundary fallback={<div className="absolute inset-0 gradient-radial" />}>
          <Suspense fallback={<div className="absolute inset-0 gradient-radial" />}>
            <HeroScene />
          </Suspense>
        </ErrorBoundary>
        <div className="absolute inset-0 gradient-radial pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
        <div
          ref={eyebrowRef}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          data-testid="hero-eyebrow"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for freelance & full-time opportunities
        </div>

        <h1
          ref={titleRef}
          className="font-display text-[clamp(2.6rem,7.2vw,6.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
          data-testid="hero-title"
        >
          {headline.map((w, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-baseline pr-[0.25em]"
            >
              <span
                className={`word inline-block ${w === "Blockchain" ? "text-primary text-glow" : ""
                  }`}
              >
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p
          ref={subRef}
          className="mt-7 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          data-testid="hero-sub"
        >
          I'm Husnain Abid — a MERN Stack Developer specializing in building responsive
          and scalable web applications using React.js and Node.js. I help businesses
          turn ideas into real-world products with clean UI, efficient APIs, and
          production-ready deployments.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            onClick={() => scrollTo("work")}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground glow-blue"
            testId="hero-cta-work"
          >
            View Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/5"
            testId="hero-cta-hire"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Hire Me
          </MagneticButton>
        </div>

        <div
          ref={metaRef}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 text-sm text-muted-foreground"
        >
          <div>
            <div className="font-display text-2xl text-foreground">1.5+</div>
            <div className="mt-1">Years Experience</div>
          </div>
          <div>
            <div className="font-display text-2xl text-foreground">50+</div>
            <div className="mt-1">Projects Delivered</div>
          </div>
          <div>
            <div className="font-display text-2xl text-foreground">MERN</div>
            <div className="mt-1">Full Stack Focus</div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("work")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          data-testid="hero-scroll-cue"
        >
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
