"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsapConfig";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate heading words
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word");
        tl.set(words, { y: 80, opacity: 0 });
        tl.to(words, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
        }, 0.3);
      }

      // Animate subtext
      tl.fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );

      // Animate CTA
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      // Animate decorative line
      tl.fromTo(
        lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 1, ease: "power2.inOut" },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingText = "Your business runs on precision. Your online presence should too.";
  const words = headingText.split(" ");

  const handleCTA = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,26,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative vertical line */}
      <div
        ref={lineRef}
        className="absolute left-12 top-0 bottom-0 w-px bg-brass/20 origin-top hidden lg:block"
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <div className="mb-8">
          <span className="text-xs tracking-[0.3em] uppercase text-warm-grey">
            Digital Growth Agency
          </span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-charcoal"
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="mt-8 text-lg md:text-xl text-warm-grey max-w-2xl mx-auto leading-relaxed"
        >
          We build premium websites and pair them with practical AI &mdash;
          so your business finally looks as good online as it performs in person.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-12">
          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-charcoal text-cream px-8 py-4 text-sm tracking-wider uppercase hover:bg-charcoal-light transition-all duration-300"
          >
            Start a Conversation
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-warm-grey-light">
          Scroll
        </span>
        <div className="w-px h-8 bg-warm-grey-light/50 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full bg-brass animate-pulse" />
        </div>
      </div>
    </section>
  );
}
