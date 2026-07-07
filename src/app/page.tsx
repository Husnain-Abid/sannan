"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { FloatingChat } from "@/components/FloatingChat";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Projects } from "@/sections/Projects";

export default function Home() {
  return (
    <ThemeProvider>
      <Loader />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

     <main className="relative">
            <Hero />
            <Projects />
            <About />
            <Services />
            <Testimonials />
            <Contact />
          </main>

      <Footer />
      <FloatingChat />
    </ThemeProvider>
  );
}