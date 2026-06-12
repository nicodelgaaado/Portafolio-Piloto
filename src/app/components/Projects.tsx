"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const projectFilters = [
  "Data",
  "Design",
  "Tools",
  "Business",
] as const;

type ProjectFilter = (typeof projectFilters)[number];

type Project = {
  title: string;
  tech: string;
  description: string;
  status: string;
  filters: ProjectFilter[];
  githubUrl: string;
  liveDemoUrl: string;
  imageSrc: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    title: "Movie Recommendation App",
    tech: "Next.js 16, React 19, TypeScript, Tailwind CSS",
    description: "Movie recommendation web app where users rate a curated queue of titles and receive ranked recommendations.",
    status: "Deployed",
    filters: ["Data", "Design"],
    githubUrl: "https://github.com/nicodelgaaado/Movie-Matchmaker",
    liveDemoUrl: "https://movie-matchmaker-alpha.vercel.app/",
    imageSrc: "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/thumbnail-1.webp",
    imageAlt: "Screenshot of the Movie Recommendation App interface.",
  },
  {
    title: "Solar Panel Sizing App",
    tech: "Next.js 16, React 19, TypeScript, Tailwind CSS",
    description: "Web app that estimates solar panel sizing, installation cost, savings, and return on investment.",
    status: "Deployed",
    filters: ["Data", "Tools"],
    githubUrl: "https://github.com/nicodelgaaado/Panel-Solar",
    liveDemoUrl: "https://panel-solar.vercel.app/",
    imageSrc: "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/thumbnail-2.webp",
    imageAlt: "Screenshot of the Solar Panel Sizing App interface.",
  },
  {
    title: "Work Order Platform",
    tech: "Next.js, TypeScript, Spring Boot, PostgreSQL",
    description: "Industrial workflow platform for work orders, role-based dashboards, and AI-assisted operational support.",
    status: "Deployed",
    filters: ["Tools", "Business"],
    githubUrl: "https://github.com/nicodelgaaado/ProduSoft",
    liveDemoUrl: "https://produ-soft.vercel.app/",
    imageSrc: "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/thumbnail-3-v2.webp",
    imageAlt: "Screenshot of the Work Order Platform interface.",
  },
  {
    title: "Web Music Player",
    tech: "TypeScript, SCSS, HTML, JavaScript",
    description: "Browser music player with custom controls, responsive UI, and a focused playback experience.",
    status: "Deployed",
    filters: ["Design"],
    githubUrl: "https://github.com/nicodelgaaado/Music-Player",
    liveDemoUrl: "https://music-player-pied-two.vercel.app/",
    imageSrc: "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/thumbnail-4.webp",
    imageAlt: "Screenshot of the Web Music Player interface.",
  },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<"All" | ProjectFilter>("All");
  const filterButtonRefs = useRef<Partial<Record<"All" | ProjectFilter, HTMLButtonElement | null>>>({});

  const filters = ["All", ...projectFilters] as Array<"All" | ProjectFilter>;

  const visibleProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(selectedFilter));
  const isFilteredView = selectedFilter !== "All";

  useEffect(() => {
    filterButtonRefs.current[selectedFilter]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selectedFilter]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-10 sm:mb-12">
        <span className="eyebrow">Selected Work</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A collection of my work showcasing various technologies and problem-solving approaches.
        </p>
      </div>

      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Filter Projects
        </span>
        <div className="-mx-2 px-2 sm:mx-0 sm:px-0">
          <div className="scrollbar-hidden flex min-w-full snap-x snap-proximity items-center gap-2 overflow-x-auto whitespace-nowrap scroll-smooth py-1 sm:flex-wrap sm:justify-end sm:overflow-visible sm:whitespace-normal">
            {filters.map((filter) => (
              <Button
                key={filter}
                ref={(element) => {
                  filterButtonRefs.current[filter] = element;
                }}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                variant={selectedFilter === filter ? "default" : "outline"}
                className="h-auto shrink-0 snap-center rounded-full px-4 py-2 text-xs font-medium"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {visibleProjects.map((project) => (
          <Card
            key={project.title}
            className={cn(
              "surface-soft-hover overflow-hidden border-border-subtle p-0",
              isFilteredView && "lg:h-full",
            )}
          >
            <CardContent
              className={cn(
                "p-0",
                isFilteredView && "lg:flex lg:h-full lg:flex-col",
              )}
            >
              <div className="surface-inset relative aspect-[16/9] overflow-hidden border-0 border-b">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 34rem, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
                  className="object-cover object-center"
                />
                <Badge className="absolute right-3 top-3 backdrop-blur-sm">{project.status}</Badge>
              </div>

              <div
                className={cn(
                  "flex flex-col p-5 sm:p-6",
                  isFilteredView && "lg:flex-1",
                )}
              >
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>
                <div className="mt-2 font-mono text-xs leading-relaxed break-words text-primary">
                  {project.tech}
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto flex-1 rounded-full px-4 py-2.5 text-xs font-medium"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="h-auto flex-1 rounded-full px-4 py-2.5 text-xs font-medium"
                  >
                    <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
