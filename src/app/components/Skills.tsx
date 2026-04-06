import Image from "next/image";

export default function Skills() {
  const getLogoUrl = (logo: string) => `https://api.iconify.design/logos:${logo}.svg`;

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

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 border-b border-border pb-6 sm:mb-12 sm:pb-8">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Skills
        </h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          A snapshot of my technical skills across frontend, backend, databases, tools, and cloud platforms
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {skillCategories.map((category) => (
          <section
            key={category.category}
            className="pb-6 sm:pb-8"
          >
            <div className="mb-5 sm:mb-6">
              <h2 className="text-xl font-bold sm:text-2xl">{category.category}</h2>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-4">
              {category.skills.map((skill) => (
                <article
                  key={skill.name}
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
    </div>
  );
}
