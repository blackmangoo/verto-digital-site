export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-medium tracking-[0.2em] uppercase">
              Verto<span className="text-brass">.</span>
            </p>
            <p className="mt-4 text-sm text-warm-grey-light leading-relaxed max-w-xs">
              Premium websites and practical AI automation for local businesses
              that take their craft seriously.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-warm-grey-light mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {["Services", "Process", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-warm-grey-lighter hover:text-cream transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-warm-grey-light mb-4">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@vertodigital.tech"
                className="text-sm text-warm-grey-lighter hover:text-cream transition-colors duration-300"
              >
                hello@vertodigital.tech
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-warm-grey-lighter hover:text-cream transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-grey">
            &copy; {new Date().getFullYear()} Verto Digital. All rights reserved.
          </p>
          <p className="text-xs text-warm-grey">
            Built by Verto Digital &mdash; this site is the proof.
          </p>
        </div>
      </div>
    </footer>
  );
}
