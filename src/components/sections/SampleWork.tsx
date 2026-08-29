"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function SampleWork() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="mb-20" data-reveal>
          <span className="eyebrow block mb-5">Our Work</span>
          <h2 className="headline text-[clamp(28px,4vw,48px)] text-ink">
            Selected projects.
          </h2>
        </div>

        {/* Empty state */}
        <div data-reveal className="py-20 text-center">
          <p className="text-grey text-[15px]">
            Projects will be showcased here as we complete them.
          </p>
          <p className="mt-2 eyebrow text-grey-light">
            Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}
