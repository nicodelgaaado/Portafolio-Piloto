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

const getBlueIbmLogoUrl = () => "https://api.iconify.design/simple-icons:ibm.svg?color=%230f62fe";

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 border-b border-border pb-6 sm:mb-12 sm:pb-8">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Experience
        </h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          A snapshot of my certifications and professional experience
        </p>
      </div>

      <div className="space-y-10 sm:space-y-12">
        <section>
          <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">Certifications</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {certifications.map((certification) => (
              <Card key={certification.title} className="surface-soft-hover">
                <CardContent className="p-4 sm:p-5">
                  <div className="surface-inset mb-4 flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16">
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
                  <p className="mb-4 font-mono text-xs uppercase text-muted-foreground sm:text-sm">
                    {certification.provider}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto rounded-full px-4 py-2 font-mono text-xs uppercase sm:text-sm"
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
          <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((experience) => (
              <article key={experience.role} className="relative border-l-4 border-foreground pl-5 sm:pl-6">
                <div className="absolute -left-[11px] top-1 h-4 w-4 bg-foreground"></div>
                <h3 className="text-lg font-bold sm:text-xl">{experience.role}</h3>
                <p className="mb-2 font-mono text-sm uppercase text-muted-foreground sm:text-[15px]">
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
