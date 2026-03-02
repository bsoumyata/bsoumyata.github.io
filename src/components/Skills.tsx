 
const skillGroups = [
  {
    title: "Product Thinking",
    skills: ["Voice of Customer", "Roadmap Prioritization", "Market Research", "Empathy Mapping", "Documentation"],
  },
  {
    title: "Design & Execution",
    skills: ["Figma", "Prototyping", "Agile (Scrum/Kanban)", "Jira", "Confluence", "Sprint Planning"],
  },
  {
    title: "AI & Productivity Tools",
    skills: ["OpenAI", "n8n", "Lovable", "Cursor", "Claude Code", "MS Copilot", "Power Automate", "Prompt Engineering"],
  },
  {
    title: "Data & Experimentation",
    skills: ["Success Metrics", "SQL", "Google Analytics", "Power BI", "Tableau", "A/B Testing", "Snowflake"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #8b6f47 0%, #7a5c38 25%, #6b4e2d 50%, #5a3f24 100%)" }}>
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-md uppercase tracking-[6px] text-amber-300/90 mb-3 font-medium">Skills</h3>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            What I Do Best
          </h1>
          <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto">
            These are the skills I use every day, always growing with new challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="group bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/25 hover:border-white/40 rounded-2xl p-6 transition-all duration-400 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-400">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/15 border border-white/20 text-white/90 text-xs md:text-sm font-medium hover:bg-white/25 hover:border-white/40 transition-all duration-400 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
