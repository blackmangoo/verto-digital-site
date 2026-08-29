"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "We study your current setup \u2014 website, workflows, and how enquiries flow today.",
  },
  {
    number: "02",
    title: "Demo",
    description: "We build a working preview so you can see exactly what we\u2019re proposing.",
  },
  {
    number: "03",
    title: "Proposal",
    description: "Clear scope, clear price, clear timeline. No surprises.",
  },
  {
    number: "04",
    title: "Build",
    description: "We build in the open \u2014 you see progress every week, not just at the end.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Tested, deployed, and handed over with documentation you can actually read.",
  },
  {
    number: "06",
    title: "Support",
    description: "We don\u2019t disappear. Ongoing tweaks, monitoring, and a direct line when you need us.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress line
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: 1,
            },
          }
        );
      }

      // Animate each step
      const stepEls = sectionRef.current?.querySelectorAll(".process-step");
      if (stepEls) {
        stepEls.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              delay: i * 0.05,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-warm-grey">
            How We Work
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-charcoal">
            Six steps. No mystery.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-cream-dark">
            <div
              ref={progressRef}
              className="absolute inset-0 w-full bg-brass origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="process-step relative flex items-start gap-8 lg:gap-12 pl-12"
              >
                {/* Dot */}
                <div className="absolute left-[14px] top-1 w-[11px] h-[11px] rounded-full border-2 border-brass bg-cream" />

                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-brass font-medium">
                      {step.number}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-medium tracking-tight text-charcoal">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-warm-grey leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
