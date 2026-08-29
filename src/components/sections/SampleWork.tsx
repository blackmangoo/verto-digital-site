"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function SampleWork() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-cream-dark/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20" data-reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-warm-grey">
            Our Work
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-charcoal">
            Selected projects.
          </h2>
        </div>

        {/* Empty state */}
        <div
          data-reveal
          className="border border-dashed border-warm-grey-light/50 rounded-sm p-16 lg:p-24 text-center"
        >
          <p className="text-warm-grey text-sm tracking-wide">
            Projects will be showcased here as we complete them.
          </p>
          <p className="mt-2 text-warm-grey-light text-xs tracking-wider uppercase">
            Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}
