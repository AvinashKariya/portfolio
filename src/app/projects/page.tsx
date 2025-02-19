"use client";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-40" />
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-blue-50 rounded-lg -rotate-12 mix-blend-multiply filter blur-xl opacity-40" />
      </div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-medium mb-12 text-gray-700">Projects</h1>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
