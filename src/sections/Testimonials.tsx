import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What clients say"
          title="Founders and operators on working with me."
          description="Worked with startups & agencies globally — from YC-backed founders to design-led NYC studios."
          align="center"
        />
        <div className="mt-16 relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl glass">
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-8 py-12 md:px-16 md:py-16">
                  <Quote className="h-8 w-8 text-primary/70" />
                  <p className="mt-6 font-display text-xl md:text-3xl leading-snug tracking-[-0.01em]">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 text-primary font-display font-bold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-3 bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-testid={`testimonial-dot-${i}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/5"
                aria-label="Previous"
                data-cursor="hover"
                data-testid="testimonial-prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/5"
                aria-label="Next"
                data-cursor="hover"
                data-testid="testimonial-next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
