export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React" },
        { name: "Angular" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Next.js" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "Node.js" },
        { name: "Django" },
        { name: "GraphQL" },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "Docker" },
        { name: "Git" },
      ],
    },
    {
      category: "Cloud Computing",
      skills: [
        { name: "AWS" },
        { name: "Microsoft Azure" },
        { name: "Google Cloud" },
        { name: "Oracle" },
        { name: "Kubernetes" },
      ],
    },
  ];
  const certifications = [
    { title: "AWS Certified Developer", year: "2025" },
    { title: "Google Cloud Professional", year: "2025" },
    { title: "MongoDB Certified Developer", year: "2024" },
  ];
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Tech Company A",
      period: "Summer 2025",
      description: "Developed features for customer-facing web applications.",
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Startup B",
      period: "Fall 2024",
      description: "Built RESTful APIs and responsive frontend components.",
    },
    {
      role: "Research Assistant",
      company: "University Lab",
      period: "2024 - Present",
      description: "Worked on natural language processing research and experimentation.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 border-b-2 border-black pb-6 sm:mb-12 sm:pb-8">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Skills
        </h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          Technical competencies and proficiency levels across various domains
        </p>
      </div>

      <div className="mb-10 space-y-6 border-b-2 border-black pb-10 sm:mb-12 sm:space-y-8 sm:pb-12">
        {skillCategories.map((category, index) => (
          <section
            key={index}
            className="pb-6 sm:pb-8"
          >
            <div className="mb-5 sm:mb-6">
              <h2 className="text-xl font-bold sm:text-2xl">{category.category}</h2>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-4">
              {category.skills.map((skill, skillIndex) => (
                <article
                  key={skillIndex}
                  className="flex min-w-0 flex-col items-center justify-start"
                >
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white sm:h-16 sm:w-16">
                    <div className="h-full w-full"></div>
                  </div>
                  <h3 className="mt-3 text-center font-mono text-[10px] font-bold uppercase leading-tight sm:text-xs">
                    {skill.name}
                  </h3>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="space-y-10 sm:space-y-12">
        <section>
          <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">Certifications</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {certifications.map((certification, index) => (
              <article key={index} className="border-2 border-black p-4 text-center sm:p-5">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black sm:h-16 sm:w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 font-mono text-sm font-bold uppercase sm:text-[15px]">
                  {certification.title}
                </h3>
                <p className="font-mono text-xs uppercase text-black/70 sm:text-sm">
                  {certification.year}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((experience, index) => (
              <article key={index} className="relative border-l-4 border-black pl-5 sm:pl-6">
                <div className="absolute -left-[11px] top-1 h-4 w-4 bg-black"></div>
                <h3 className="text-lg font-bold sm:text-xl">{experience.role}</h3>
                <p className="mb-2 font-mono text-sm uppercase text-black/70 sm:text-[15px]">
                  {experience.company} | {experience.period}
                </p>
                <p className="max-w-3xl font-mono text-sm leading-relaxed sm:text-[15px]">
                  {experience.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
  
}
