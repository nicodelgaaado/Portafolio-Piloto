"use client";

import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
};

const projectPreviewImage =
  "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/vercel-logo.webp";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Movie Recommendation App",
      tech: "Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui",
      description: "Movie recommendation web app where users rate a curated queue of titles and receive ranked recommendations based on similarity matches from historical ratings data.",
      status: "Deployed",
      filters: ["Data", "Design"],
      githubUrl: "https://github.com/nicodelgaaado/Movie-Matchmaker",
      liveDemoUrl: "https://movie-matchmaker-alpha.vercel.app/",
    },
    {
      title: "Solar Panel Sizing App",
      tech: "Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui",
      description: "Web app that estimates solar panel sizing, installation cost, savings, and return on investment.",
      status: "Deployed",
      filters: ["Data", "Tools"],
      githubUrl: "https://github.com/nicodelgaaado/Panel-Solar",
      liveDemoUrl: "https://panel-solar.vercel.app/",
    },
    {
      title: "Work Order Platform",
      tech: "Next.js, TypeScript, Spring Boot, PostgreSQL",
      description: "Industrial workflow platform for work orders, role-based dashboards, and AI-assisted operational support.",
      status: "Deployed",
      filters: ["Tools", "Business"],
      githubUrl: "https://github.com/nicodelgaaado/ProduSoft",
      liveDemoUrl: "https://produ-soft.vercel.app/",
    },
    {
      title: "Web Music Player",
      tech: "TypeScript, SCSS, HTML, JavaScript",
      description: "Browser music player with custom controls, responsive UI, and a focused playback experience.",
      status: "Deployed",
      filters: ["Design"],
      githubUrl: "https://github.com/nicodelgaaado/Music-Player",
      liveDemoUrl: "https://music-player-pied-two.vercel.app/",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState<"All" | ProjectFilter>("All");

  const filters = ["All", ...projectFilters] as Array<"All" | ProjectFilter>;

  const visibleProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(selectedFilter));

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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {visibleProjects.map((project) => (
          <Card
            key={project.title}
            className="border-black/12 bg-white/95 transition-colors"
          >
            <CardContent className="p-5 sm:p-6">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-bold sm:text-xl">{project.title}</h3>
                <Badge className="w-fit">{project.status}</Badge>
              </div>
              <div className="mb-4 overflow-hidden whitespace-nowrap font-mono text-sm opacity-70">{project.tech}</div>
              <p
                className="mb-6 overflow-hidden font-mono text-sm leading-relaxed"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {project.description}
              </p>

              <div className="relative mb-4 h-36 overflow-hidden rounded-lg border border-black/12 bg-white sm:h-40">
                <Image
                  src={projectPreviewImage}
                  alt={`Vercel logo preview for ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 40rem, 100vw"
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
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-10 border-black/12 bg-white/95 sm:mt-12">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <span className="font-mono text-sm uppercase">Filter Projects</span>
            <div className="grid grid-cols-5 gap-1.5 sm:flex sm:flex-wrap sm:gap-4">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  className="h-auto w-full min-w-0 px-0 py-2 font-mono text-[9px] uppercase sm:w-auto sm:px-4 sm:text-xs"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
