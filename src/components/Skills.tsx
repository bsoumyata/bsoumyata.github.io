const skillGroups = [
  {
    title: "Product Management & Strategy",
    skills: ["Product Lifecycle Management", "Market Research", "User-Centered Design", "Feature Prioritization"],
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Scala", "Python", "SQL", "Bash", "Perl"],
  },
  {
    title: "Project Management & Leadership",
    skills: [
      "Agile Development",
      "Scrum",
      "Kanban",
      "Jira",
      "Project Planning",
      "Stakeholder Management",
      "User Stories",
    ],
  },
  {
    title: "Data Analysis",
    skills: ["Power BI", "Tableau", "Spark/Hadoop", "API Integration & Management", "Snowflake"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#2e2d2d] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-md uppercase tracking-[6px] text-white/40 mb-3 font-medium">Skills</h3>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            What I Do Best
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            These are the skills I use every day, learned through real experiences and always growing as I take on new
            things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap">
                {group.skills.map((skill) => (
                  <span key={skill} className="pill pill--dark">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
