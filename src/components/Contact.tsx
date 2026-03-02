import { trackContactClick } from "../analytics";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:soumyata.binani@gmail.com",
    description: "Drop me a message",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soumyatabinani/",
    description: "Connect professionally",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/bsoumyata",
    description: "Check my projects",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #a0826d 0%, #8f7155 25%, #7e6140 50%, #6d512f 100%)"
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <h3 className="text-md uppercase tracking-[6px] text-amber-300/90 mb-3 font-medium">Contact</h3>
          <h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4" 
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            Get in touch
          </h1>
          <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto">
            Open to opportunities, collaborations, or just a quick hello.
          </p>
        </div>

        {/* Contact cards - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => trackContactClick(link.label.toLowerCase())}
              {...(link.external && { target: "_blank", rel: "noreferrer" })}
              className="group relative bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/25 hover:border-white/40 rounded-2xl p-6 transition-all duration-400 no-underline overflow-hidden flex flex-col"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-bl-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 group-hover:bg-white/30 transition-all duration-400 mb-4">
                  <div className="text-white group-hover:scale-110 transition-transform duration-400">
                    {link.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-white transition-colors duration-400">
                  {link.label}
                </h3>
                <p className="text-white/75 text-sm">
                  {link.description}
                </p>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
