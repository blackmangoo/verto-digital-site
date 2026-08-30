export default function Footer() {
  return (
    <footer className="bg-ink text-stone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-16 md:gap-20">
          {/* Brand — takes more space */}
          <div className="max-w-sm">
            <img 
              src="/assets/verto-logo-dark.png" 
              alt="Verto Digital" 
              className="h-14 w-auto object-contain mb-4 -ml-2"
            />
            <p className="mt-5 text-[15px] text-grey leading-relaxed">
              Premium websites and practical AI automation for local businesses
              that take their craft seriously.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow-light mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {["Services", "Process", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[15px] text-grey-light hover:text-stone transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow-light mb-5">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@vertodigital.tech"
                className="text-[15px] text-grey-light hover:text-stone transition-colors duration-300"
              >
                hello@vertodigital.tech
              </a>
              <a
                href="https://wa.me/923214797778"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-grey-light hover:text-stone transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-grey tracking-wide">
            &copy; {new Date().getFullYear()} Verto Digital. All rights reserved.
          </p>
          <p className="text-[11px] text-grey tracking-wide">
            Demo design by Verto Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
