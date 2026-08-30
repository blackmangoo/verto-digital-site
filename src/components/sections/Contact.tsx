"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useMagneticHover } from "@/lib/useMagneticHover";
import { FormEvent } from "react";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const submitBtnRef = useMagneticHover<HTMLButtonElement>(0.15);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const business = formData.get("business") as string;
    const email = formData.get("email") as string;
    const details = formData.get("details") as string;

    const subject = encodeURIComponent(`New Inquiry from ${name} - ${business}`);
    const body = encodeURIComponent(`Name: ${name}\nBusiness Name: ${business}\nEmail: ${email}\n\nProject Details:\n${details}`);
    
    window.location.href = `mailto:ammar.akbar2002@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section ref={ref} id="contact" className="py-32 lg:py-48">
      {/* Top umber line */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="h-px bg-umber/30 mb-20 lg:mb-28" data-reveal />

        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start"
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
            <div className="mt-12 space-y-4">
               <p className="eyebrow block">Direct Contact</p>
               <a href="mailto:ammar.akbar2002@gmail.com" className="block text-[15px] text-ink hover:text-umber transition-colors">ammar.akbar2002@gmail.com</a>
               <a href="https://wa.me/923214797778" target="_blank" rel="noopener noreferrer" className="block text-[15px] text-ink hover:text-umber transition-colors">WhatsApp: +92 321 4797778</a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-2xl lg:ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] tracking-wide uppercase text-grey font-medium">Your Name</label>
                <input required type="text" id="name" name="name" className="border-b border-ink/20 bg-transparent py-3 focus:outline-none focus:border-umber transition-colors text-ink placeholder:text-ink/30" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="business" className="text-[13px] tracking-wide uppercase text-grey font-medium">Business Name</label>
                <input required type="text" id="business" name="business" className="border-b border-ink/20 bg-transparent py-3 focus:outline-none focus:border-umber transition-colors text-ink placeholder:text-ink/30" placeholder="Acme Corp" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] tracking-wide uppercase text-grey font-medium">Email Address</label>
              <input required type="email" id="email" name="email" className="border-b border-ink/20 bg-transparent py-3 focus:outline-none focus:border-umber transition-colors text-ink placeholder:text-ink/30" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-[13px] tracking-wide uppercase text-grey font-medium">Project Details</label>
              <textarea required id="details" name="details" rows={4} className="border-b border-ink/20 bg-transparent py-3 focus:outline-none focus:border-umber transition-colors text-ink placeholder:text-ink/30 resize-none" placeholder="Tell us about your business and what you're looking to build..." />
            </div>

            <button
              ref={submitBtnRef}
              type="submit"
              className="mt-4 self-start inline-block px-10 py-5 bg-ink text-stone text-[13px] font-medium tracking-[0.2em] uppercase transition-colors hover:bg-umber magnetic-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
