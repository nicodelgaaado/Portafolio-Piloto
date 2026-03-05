export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "Express.js", level: 82 },
        { name: "Django", level: 78 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 72 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 92 },
      ],
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "AWS", level: 68 },
        { name: "REST APIs", level: 88 },
        { name: "Testing (Jest)", level: 80 },
        { name: "CI/CD", level: 70 },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 sm:mb-12">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Skills
        </h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          Technical competencies and proficiency levels across various domains
        </p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-12 lg:grid-cols-2 lg:gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="border-2 border-black p-5 sm:p-6">
            <h3 className="mb-6 font-mono text-lg font-bold uppercase sm:text-xl">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="relative h-6 border-2 border-black">
                    <div
                      className="h-full bg-black transition-all"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <section className="mb-10 border-2 border-black p-5 sm:mb-12 sm:p-8">
        <h2 className="mb-6 font-mono text-xl font-bold uppercase sm:text-2xl">Certifications</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[
            { title: "AWS Certified Developer", year: "2025" },
            { title: "Google Cloud Professional", year: "2025" },
            { title: "MongoDB Certified Developer", year: "2024" },
          ].map((cert, index) => (
            <div key={index} className="border-2 border-black p-4 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black sm:h-16 sm:w-16">
                <span className="text-base font-bold">OK</span>
              </div>
              <h4 className="mb-2 font-mono text-sm font-bold">{cert.title}</h4>
              <p className="font-mono text-xs">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="border-2 border-black p-5 sm:p-8">
        <h2 className="mb-8 font-mono text-xl font-bold uppercase sm:text-2xl">Experience</h2>
        <div className="space-y-6">
          {[
            {
              role: "Software Engineering Intern",
              company: "Tech Company A",
              period: "Summer 2025",
              description: "Developed features for customer-facing web application",
            },
            {
              role: "Full-Stack Developer Intern",
              company: "Startup B",
              period: "Fall 2024",
              description: "Built RESTful APIs and responsive frontend components",
            },
            {
              role: "Research Assistant",
              company: "University Lab",
              period: "2024 - Present",
              description: "Machine learning research on natural language processing",
            },
          ].map((exp, index) => (
            <div key={index} className="relative border-l-4 border-black pl-5 sm:pl-6">
              <div className="absolute -left-2 top-0 h-4 w-4 bg-black"></div>
              <h4 className="text-base font-bold sm:text-lg">{exp.role}</h4>
              <div className="mb-2 font-mono text-sm">
                {exp.company} | {exp.period}
              </div>
              <p className="font-mono text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
