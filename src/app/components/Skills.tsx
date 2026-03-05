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
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
          Skills
        </h1>
        <p className="font-mono text-lg mt-6">
          Technical competencies and proficiency levels across various domains
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="border-2 border-black p-6">
            <h3 className="font-bold text-xl mb-6 font-mono uppercase">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="border-2 border-black h-6 relative">
                    <div
                      className="bg-black h-full transition-all"
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
      <section className="border-2 border-black p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 font-mono uppercase">Certifications</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "AWS Certified Developer", year: "2025" },
            { title: "Google Cloud Professional", year: "2025" },
            { title: "MongoDB Certified Developer", year: "2024" },
          ].map((cert, index) => (
            <div key={index} className="border-2 border-black p-4 text-center">
              <div className="w-16 h-16 border-2 border-black rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h4 className="font-mono font-bold text-sm mb-2">{cert.title}</h4>
              <p className="font-mono text-xs">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="border-2 border-black p-8">
        <h2 className="text-2xl font-bold mb-8 font-mono uppercase">Experience</h2>
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
            <div key={index} className="border-l-4 border-black pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-black"></div>
              <h4 className="font-bold text-lg">{exp.role}</h4>
              <div className="font-mono text-sm mb-2">
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
