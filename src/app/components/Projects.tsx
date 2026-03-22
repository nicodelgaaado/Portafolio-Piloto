"use client";

import { useState } from "react";

type ProjectCategory = "Data Analysis" | "Full Stack" | "Frontend";

type Project = {
  title: string;
  tech: string;
  description: string;
  status: string;
  category: ProjectCategory;
};

export default function Projects() {
  const projects = [
    {
      title: "Statistical Analysis of AI Tool Usage",
      tech: "R, tidyverse, ggplot2, dplyr, corrplot",
      description: "Statistical study of AI tool usage using descriptive analysis, regression, and simulation models.",
      status: "Deployed",
      category: "Data Analysis",
    },
    {
      title: "Solar Panel Sizing Web App",
      tech: "Python, FastAPI, React, Vite, CSS",
      description: "Web app that estimates solar panel sizing, installation cost, savings, and return on investment.",
      status: "Deployed",
      category: "Full Stack",
    },
    {
      title: "Industrial Work Order Platform",
      tech: "Next.js, TypeScript, Spring Boot, PostgreSQL",
      description: "Industrial workflow platform for work orders, role-based dashboards, and AI-assisted operational support.",
      status: "Deployed",
      category: "Full Stack",
    },
    {
      title: "Music Player",
      tech: "TypeScript, SCSS, HTML, JavaScript",
      description: "Browser music player with custom controls, responsive UI, and a focused playback experience.",
      status: "Deployed",
      category: "Frontend",
    },
  ] satisfies Project[];

  const [selectedFilter, setSelectedFilter] = useState<"All" | ProjectCategory>("All");

  const filters = ["All", ...new Set(projects.map((project) => project.category))] as Array<"All" | ProjectCategory>;

  const visibleProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

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
          <div
            key={project.title}
            className="border-2 border-black p-5 transition-colors sm:p-6"
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-lg font-bold sm:text-xl">{project.title}</h3>
              <div className="w-fit border-2 border-black px-3 py-1 font-mono text-xs">
                {project.status}
              </div>
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

            {/* Placeholder for project image */}
            <div className="mb-4 flex h-36 items-center justify-center border-2 border-black sm:h-40">
              <span className="font-mono text-xs">[Project Screenshot]</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className="flex-1 cursor-pointer border-2 border-black px-4 py-2 text-center font-mono text-xs uppercase">
                View Code
              </div>
              <div className="flex-1 cursor-pointer border-2 border-black px-4 py-2 text-center font-mono text-xs uppercase">
                Live Demo
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter/Sort Section */}
      <div className="mt-10 border-2 border-black p-4 sm:mt-12 sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-sm uppercase">Filter Projects</span>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`border-2 border-black px-3 py-2 font-mono text-[10px] uppercase transition-colors sm:px-4 sm:text-xs ${
                  selectedFilter === filter ? "bg-black text-white" : "cursor-pointer hover:bg-black hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
