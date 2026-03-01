import { trackContactClick } from "../analytics";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[85vh] py-20 text-white overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundImage: "url(/images/website/flowers.jpg)" }} />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-sm uppercase tracking-[5px] text-amber-400 mb-4 font-semibold">Contact</h3>
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
          Drop a hello
        </h1>
        <p className="text-xl md:text-2xl text-white/85 font-semibold mb-14">
          Feel free to reach out through any of these platforms
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {/* Email Card */}
          <a
            href="mailto:sbinani2@illinois.edu"
            onClick={() => trackContactClick("email")}
            className="bg-white/15 backdrop-blur-xs rounded-3xl w-44 h-44 md:w-52 md:h-48 flex flex-col justify-center items-center shadow-lg hover:bg-white/20 transition-colors no-underline text-white/95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11 mb-3"
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
            <span className="text-lg font-semibold tracking-wide">Email</span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/soumyatabinani/"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContactClick("linkedin")}
            className="bg-white/15 backdrop-blur-xs rounded-3xl w-44 h-44 md:w-52 md:h-48 flex flex-col justify-center items-center shadow-lg hover:bg-white/20 transition-colors no-underline text-white/95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="text-lg font-semibold tracking-wide">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
