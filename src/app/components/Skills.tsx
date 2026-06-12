import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

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
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-12 sm:mb-16">
        <span className="eyebrow">Toolbox</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Skills</h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A snapshot of my technical skills across frontend, backend, databases, tools, and cloud
          platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.category} className="surface-soft-hover border-border-subtle">
            <CardContent className="p-6 sm:p-7">
              <h2 className="mb-5 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                {category.category}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-secondary px-3.5 py-2 text-sm font-medium"
                  >
                    <Image
                      src={getLogoUrl(skill.logo)}
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                      className="h-5 w-5 object-contain"
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
