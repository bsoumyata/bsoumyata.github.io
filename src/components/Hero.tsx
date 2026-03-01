import { trackSocialClick } from "../analytics";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-end text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/IMG_3073_Original.jpg)" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Gradient overlay from bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

      {/* Content — bottom-left */}
      <div className="relative z-10 px-6 sm:px-12 md:px-60 lg:px-72 pb-36 sm:pb-48 md:pb-64 lg:pb-80 max-w-6xl">
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <span className="block w-8 sm:w-10 h-0.5 bg-amber-400" />
          <h3 className="text-xs sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-amber-400 font-medium">
            Portfolio
          </h3>
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 sm:mb-3"
          style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
        >
          Soumyata Binani
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 tracking-wide font-light">
          Product Manager &nbsp;|&nbsp; Innovator &nbsp;|&nbsp; Design Thinker
        </p>
      </div>

      {/* Scroll indicator — bottom-left */}
      <div className="absolute left-6 sm:left-12 md:left-60 lg:left-72 bottom-10 sm:bottom-12 md:bottom-24 z-10">
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-[11px] uppercase tracking-[3px]">Scroll Down</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Social links — right side */}
      <ul className="absolute right-4 sm:right-6 md:right-8 bottom-10 sm:bottom-12 z-10 flex flex-col gap-4 sm:gap-6">
        <li>
          <a
            href="mailto:sbinani2@illinois.edu"
            onClick={() => trackSocialClick("email")}
            className="text-white/60 hover:text-white transition-colors"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/soumyatabinani/"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackSocialClick("linkedin")}
            className="text-white/60 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
}
