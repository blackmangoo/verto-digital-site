"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useMagneticHover } from "@/lib/useMagneticHover";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const whatsappRef = useMagneticHover<HTMLAnchorElement>(0.25);
  const emailRef = useMagneticHover<HTMLAnchorElement>(0.25);

  return (
    <section ref={ref} id="contact" className="py-32 lg:py-48">
      {/* Top umber line */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="h-px bg-umber/30 mb-20 lg:mb-28" data-reveal />

        <div
          className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-start"
          data-reveal
        >
          {/* Left: Headline */}
          <div>
            <h2 className="headline text-[clamp(36px,5vw,64px)] text-ink">
              Ready to start?
            </h2>
            <p className="mt-6 text-[15px] text-grey leading-[1.75] max-w-md">
              We&rsquo;ll audit your current setup and show you a demo &mdash;
              no commitment, no pressure. Just a clear picture of
              what&rsquo;s possible.
            </p>
          </div>

          {/* Right: CTAs stacked */}
          <div className="flex flex-col gap-4 lg:items-end">
            <a
              ref={whatsappRef}
              href="https://wa.me/923214797778"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-ink text-stone text-[13px] font-medium tracking-[0.2em] uppercase transition-colors hover:bg-umber magnetic-button"
            >
              Message on WhatsApp
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </a>

            <a
              ref={emailRef}
              href="mailto:hello@vertodigital.tech"
              className="inline-flex items-center gap-3 border border-ink/15 text-ink px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:border-ink hover:bg-ink hover:text-stone transition-all duration-300 w-fit"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
