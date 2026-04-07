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
    imageSrc: "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/vercel-logo.webp",
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
    imageSrc: "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/vercel-logo.webp",
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
    imageSrc: "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/vercel-logo.webp",
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
    imageSrc: "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/vercel-logo.webp",
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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 sm:mb-12">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Projects
        </h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          A collection of my work showcasing various technologies and problem-solving approaches
        </p>
      </div>

      <Card className="mb-10 border-border bg-card/95 sm:mb-12">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <span className="font-mono text-sm uppercase">Filter Projects</span>
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
                    className="h-auto shrink-0 snap-center px-3 py-2 font-mono text-[11px] uppercase sm:px-4 sm:text-xs"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {visibleProjects.map((project) => (
          <Card
            key={project.title}
            className={cn(
              "border-border bg-card/95 transition-colors",
              isFilteredView && "lg:h-full",
            )}
          >
            <CardContent
              className={cn(
                "p-5 sm:p-6",
                isFilteredView && "lg:flex lg:h-full lg:flex-col",
              )}
            >
              <div>
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-lg font-bold sm:text-xl">{project.title}</h3>
                  <Badge className="w-fit">{project.status}</Badge>
                </div>
                <div className="mb-4 font-mono text-sm leading-relaxed break-words opacity-70">
                  {project.tech}
                </div>
                <p className="mb-6 font-mono text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {isFilteredView ? <div className="hidden lg:block lg:flex-1" aria-hidden="true" /> : null}

              <div>
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-card">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 34rem, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto flex-1 px-4 py-2 font-mono text-xs uppercase"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="h-auto flex-1 px-4 py-2 font-mono text-xs uppercase"
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
