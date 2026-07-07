"use client";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import gsap from "gsap";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strength?: number;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  testId?: string;
};

export function MagneticButton({
  children,
  className = "",
  style,
  strength = 0.35,
  onClick,
  as = "button",
  href,
  testId,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || isCoarse) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.4, ease: "power3.out" });
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  if (as === "a") {
    return (
      <a
        ref={setRef as (n: HTMLAnchorElement | null) => void}
        href={href}
        onClick={onClick}
        className={className}
        style={style}
        data-cursor="hover"
        data-testid={testId}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={setRef as (n: HTMLButtonElement | null) => void}
      onClick={onClick}
      className={className}
      style={style}
      data-cursor="hover"
      data-testid={testId}
      type="button"
    >
      {children}
    </button>
  );
}
