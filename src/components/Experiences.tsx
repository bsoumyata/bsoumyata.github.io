const experiences = [
  {
    period: "May 2025 – July 2025",
    company: "Riverside Natural Foods",
    companyUrl: "https://www.linkedin.com/company/riverside-natural-foods-ltd-/",
    title: "Product Consultant",
    description:
      "As a Product Consultant, I led a project to enhance employee productivity and engagement through AI solutions. We surveyed 150+ employees to uncover workflow pain points and inefficiencies, then benchmarked AI adoption across leading CPG companies. From this research, I identified 20+ high-impact AI use cases, from automating repetitive tasks to improving cross-team communication, and delivered a strategic roadmap enabling leadership to implement solutions that streamline operations and better support employees.",
    full: true,
  },
  {
    period: "Jul 2022 – Jul 2024",
    company: "BlackRock",
    companyUrl: "https://www.linkedin.com/company/blackrock/",
    title: "Product Manager – Aladdin Wealth",
    description:
      "In this role, I was responsible for making products faster, smarter, and more reliable for clients who depended on them every day. Whether it was rethinking how proposals were generated or improving system observability, my focus was on understanding user workflows, defining clear requirements, and collaborating closely with engineering to deliver solutions that fit naturally into their processes. I guided prioritization, tested ideas with users, and refined features to create tools that felt intuitive while meeting business goals. Additionally, I authored a technical blog on big data optimization, gaining industry recognition.",
    full: true,
  },
  {
    period: "Jan 2022 – Jun 2022",
    company: "BlackRock",
    companyUrl: "https://www.linkedin.com/company/blackrock/",
    title: "Intern – Aladdin Wealth",
    description:
      "I began by learning the systems inside out, then looked for ways to make them more transparent and responsive. I worked on building real-time dashboards to monitor key performance metrics, enabling proactive issue resolution. I also supported a large-scale cloud migration by coordinating with engineering, QA and operations to ensure smooth deployment and business continuity.",
    full: true,
  },
  {
    period: "Jul 2020 – Jun 2021",
    company: "SkillShip Foundation",
    companyUrl: "https://www.linkedin.com/company/skillship-foundation/",
    title: "Chapter Manager",
    description:
      "At SkillShip, I worked to close the tech skills gap for underserved students. I led coding bootcamps for 80+ learners, helping them create projects that opened doors to internships and higher education. I also launched an online resource hub for women in tech — a space that offered career advice, learning guides, and networking opportunities to over 100 members.",
    full: false,
  },
  {
    period: "Jun 2020 – Dec 2020",
    company: "PrepBytes",
    companyUrl: "https://www.linkedin.com/company/prepbytes/",
    title: "Marketing Intern",
    description:
      "At PrepBytes, I focused on optimizing the user acquisition funnel by analyzing customer journeys and identifying drop-off points. Using keyword research and SEO best practices, I collaborated with product and content teams to improve landing page conversions. I also developed targeted user segmentation and personalized campaigns based on behavioral data, which helped increase engagement and boost retention rates.",
    full: false,
  },
];

export default function Experiences() {
  // First 3 are full-width, last 2 are side-by-side
  const fullWidth = experiences.filter((e) => e.full);
  const halfWidth = experiences.filter((e) => !e.full);

  return (
    <section id="experience" className="py-24 bg-[#f0f0f0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-md uppercase tracking-[6px] text-gray-500 mb-3 font-medium">Experiences</h3>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            My Work So Far
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Roles that have shaped my journey, each one teaching me something new and real.
          </p>
        </div>

        {/* Full-width timeline items */}
        {fullWidth.map((exp, i) => (
          <div key={i} className="timeline mb-0">
            <div className="timeline__block">
              <div className="timeline__bullet" />
              <div className="mb-2">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1 px-3">{exp.period}</p>
                <h3 className="text-xl font-bold">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    {exp.company}
                  </a>
                </h3>
                <h5 className="text-sm font-medium text-gray-500 mt-1">{exp.title}</h5>
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px]">{exp.description}</p>
            </div>
          </div>
        ))}

        {/* Half-width items side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {halfWidth.map((exp, i) => (
            <div key={i} className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="mb-2">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1 px-3">{exp.period}</p>
                  <h3 className="text-xl font-bold">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <h5 className="text-sm font-medium text-gray-500 mt-1">{exp.title}</h5>
                </div>
                <p className="text-gray-600 leading-relaxed text-[15px]">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
