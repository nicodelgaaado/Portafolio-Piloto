import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

const IBM_LOGO_URL = "https://api.iconify.design/simple-icons:ibm.svg?color=%230f62fe";

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-12 sm:mb-16">
        <span className="eyebrow">Background</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Experience</h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A snapshot of my certifications and professional experience.
        </p>
      </div>

      <div className="space-y-14 sm:space-y-20">
        <section>
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Certifications</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {certifications.map((certification) => (
              <Card key={certification.title} className="surface-soft-hover border-border-subtle">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white shadow-sm">
                    <Image
                      src={IBM_LOGO_URL}
                      alt={`${certification.provider} logo`}
                      width={32}
                      height={32}
                      unoptimized
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">{certification.title}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {certification.provider}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-5 h-auto w-fit rounded-full px-4 py-2 text-xs font-medium"
                  >
                    <a href={certification.credentialUrl} target="_blank" rel="noreferrer">
                      Show credential
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Work &amp; Education</h2>
          <div className="relative ml-1.5 border-l border-border pl-8 sm:pl-10">
            <div className="space-y-10">
              {experiences.map((experience) => (
                <article key={experience.role} className="relative">
                  <span
                    className="absolute -left-[2.45rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[3.07rem]"
                    aria-hidden="true"
                  >
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                  </span>
                  <p className="mb-1 font-mono text-xs uppercase tracking-wider text-primary">
                    {experience.period}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{experience.role}</h3>
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    {experience.company}
                  </p>
                  <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
