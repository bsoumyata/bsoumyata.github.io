export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <img src="/images/Website_DP.png" alt="Profile Picture" className="w-62.5 h-62.5 object-cover mx-auto mb-10" />
        <h1
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
        >
          A little about me
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-600">
          👋 Hey, I'm Soumyata! I'm currently pursuing MS in Technology Management at the{" "}
          <a
            href="https://illinois.edu/"
            className="text-gray-900 underline hover:text-black"
            target="_blank"
            rel="noreferrer"
          >
            University of Illinois, Urbana-Champaign
          </a>
          . I am passionate about turning "What if?" ideas into products that make people think, "Wow, that works!",
          with simplicity and usefulness in mind.
          <br />
          <br />
          With 2+ years of experience in the Wealth Management industry, I have led projects using Big Data to help
          businesses make smarter decisions and achieve better outcomes. I specialize in turning complex data into
          clear, actionable solutions that drive results. When a task is assigned to me, I make sure it gets done, I'm
          committed to seeing things through from start to finish.
          <br />
          <br />
          Outside of work, you'll find me exploring new places, swimming, or capturing moments with my camera. Always
          curious, always learning!
        </p>
      </div>
    </section>
  );
}
