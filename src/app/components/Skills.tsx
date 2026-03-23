import Image from "next/image";

export default function Skills() {
  const getLogoUrl = (logo: string) => `https://api.iconify.design/logos:${logo}.svg`;
  const getBlueIbmLogoUrl = () => "https://api.iconify.design/simple-icons:ibm.svg?color=%230f62fe";

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", logo: "react" },
        { name: "Angular", logo: "angular-icon" },
        { name: "TypeScript", logo: "typescript-icon" },
        { name: "Tailwind CSS", logo: "tailwindcss-icon" },
        { name: "Next.js", logo: "nextjs-icon" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Java", logo: "java" },
        { name: "Python", logo: "python" },
        { name: "Node.js", logo: "nodejs-icon" },
        { name: "Django", logo: "django-icon" },
        { name: "GraphQL", logo: "graphql" },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "PostgreSQL", logo: "postgresql" },
        { name: "MongoDB", logo: "mongodb-icon" },
        { name: "Redis", logo: "redis" },
        { name: "Docker", logo: "docker-icon" },
        { name: "Git", logo: "git-icon" },
      ],
    },
    {
      category: "Cloud Computing",
      skills: [
        { name: "AWS", logo: "aws" },
        { name: "Microsoft Azure", logo: "microsoft-azure" },
        { name: "Google Cloud", logo: "google-cloud" },
        { name: "Oracle", logo: "oracle" },
        { name: "Kubernetes", logo: "kubernetes" },
      ],
    },
  ];
  const certifications = [
    {
      title: "IBM RAG and Agentic AI",
      provider: "IBM via Coursera",
      credentialUrl: "https://coursera.org/share/499f8e418208b151da1030ec9f61cac7",
    },
    {
      title: "Building AI Agents",
      provider: "IBM via Coursera",
      credentialUrl: "https://coursera.org/share/4ad28c8c391360b08ccb09c4e3032b1b",
    },
    {
      title: "Build AI Agents using MCP",
      provider: "IBM via Coursera",
      credentialUrl: "https://coursera.org/share/68fb68da4ccad69d4a12808171cbc833",
    },
  ];
  const experiences = [
    {
      role: "Software Engineering Undergraduate",
      company: "Universidad Cooperativa de Colombia",
      period: "2023 - Present",
      description:
        "Pursuing undergraduate studies in software engineering while building a strong foundation in programming, software architecture, databases, and user-centered development.",
    },
    {
      role: "Independent Software Consultant",
      company: "Various Companies",
      period: "2023 - Present",
      description:
        "Advising on software solutions, system structure, and implementation strategy for independent projects, helping translate requirements into practical and scalable technical outcomes.",
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Various Clients",
      period: "2023 - Present",
      description:
        "Designing and developing responsive web applications for independent clients, handling both frontend interfaces and backend functionality to deliver practical digital solutions.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 border-b-2 border-black pb-6 sm:mb-12 sm:pb-8">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Skills
        </h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          A snapshot of my technical skills, certifications, and professional experience
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
                  className="flex min-w-0 items-center justify-center"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <Image
                    src={getLogoUrl(skill.logo)}
                    alt={skill.name}
                    width={64}
                    height={64}
                    unoptimized
                    className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                  />
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
              <article key={index} className="border-2 border-black p-4 sm:p-5">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black sm:h-16 sm:w-16">
                  <Image
                    src={getBlueIbmLogoUrl()}
                    alt={`${certification.provider} logo`}
                    width={40}
                    height={40}
                    unoptimized
                    className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                  />
                </div>
                <h3 className="mb-3 font-mono text-sm font-bold uppercase sm:text-[15px]">
                  {certification.title}
                </h3>
                <p className="mb-4 font-mono text-xs uppercase text-black/70 sm:text-sm">
                  {certification.provider}
                </p>
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-black px-4 py-2 font-mono text-xs uppercase transition-colors hover:bg-black hover:text-white sm:text-sm"
                >
                  Show credential
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
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
