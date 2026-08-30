"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We study your current setup \u2014 website, workflows, and how enquiries flow today.",
  },
  {
    number: "02",
    title: "Demo",
    description:
      "We build a working preview so you can see exactly what we\u2019re proposing.",
  },
  {
    number: "03",
    title: "Proposal",
    description:
      "Clear scope, clear price, clear timeline. No surprises.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We build in the open \u2014 you see progress every week, not just at the end.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Tested, deployed, and handed over with documentation you can actually read.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "Post-launch isn\u2019t an afterthought. Ongoing tweaks, uptime monitoring, and a direct line \u2014 not a ticket queue \u2014 when you need us.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line drawing
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              end: "bottom 70%",
              scrub: 1,
            },
          }
        );
      }

      // Step reveal
      const stepEls = sectionRef.current?.querySelectorAll(".process-step");
      stepEls?.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <span className="eyebrow block mb-5">How We Work</span>
          <h2 className="headline text-[clamp(28px,4vw,48px)] text-ink">
            Six steps. No mystery.
          </h2>
        </div>

        {/* Horizontal progress track */}
        <div className="relative mb-16">
          <div className="h-px bg-stone-dark w-full">
            <div
              ref={progressRef}
              className="h-full bg-umber origin-left"
            />
          </div>
        </div>

        {/* Steps grid */}
        <div
          ref={trackRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6"
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`process-step ${
                i % 2 === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <span className="text-[13px] text-umber font-medium block mb-3">
                {step.number}
              </span>
              <h3 className="text-[20px] font-medium tracking-tight text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-[13px] text-grey leading-[1.7]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
