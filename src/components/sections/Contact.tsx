"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="contact" className="py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <div data-reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-warm-grey">
            Get in Touch
          </span>

          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-charcoal">
            Ready to start?
          </h2>

          <p className="mt-6 text-lg text-warm-grey max-w-xl mx-auto leading-relaxed">
            We&rsquo;ll audit your current setup and show you a demo &mdash;
            no commitment, no pressure. Just a clear picture of what&rsquo;s possible.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" data-reveal>
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-charcoal text-cream px-8 py-4 text-sm tracking-wider uppercase hover:bg-charcoal-light transition-all duration-300"
          >
            Message on WhatsApp
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>

          {/* Email CTA */}
          <a
            href="mailto:hello@vertodigital.tech"
            className="inline-flex items-center gap-3 border border-charcoal/20 text-charcoal px-8 py-4 text-sm tracking-wider uppercase hover:border-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Send an Email
          </a>
        </div>

        {/* Decorative line */}
        <div className="mt-20" data-reveal>
          <div className="w-px h-16 bg-brass/30 mx-auto" />
        </div>
      </div>
    </section>
  );
}
