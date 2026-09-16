import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const publishedWeb = projectsData.published.web || [];
  const publishedAndroid = projectsData.published.android || [];
  const personalProjects = projectsData.personal || [];

  return (
    <div className="min-h-screen text-gray-200 px-4 py-8 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="sticky top-0 z-50 py-4 bg-[#0b0f17]/80 backdrop-blur-md border-b border-white/5 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16 mb-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-pink-400 hover:text-pink-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Resume
          </Link>
        </div>
      </div>

        <header className="space-y-4 border-b border-white/10 pb-8">

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects & Portfolio
          </h1>

          <p className="text-sm sm:text-base text-gray-400 font-mono max-w-2xl">
            A curated collection of web and mobile applications developed over time, ranging from enterprise platforms and digital campaigns to personal side projects.
          </p>
        </header>

        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Published & Production Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publishedWeb.map((project) => (
              <ProjectCard key={project.id || project.name} project={project} />
            ))}
          </div>

          {publishedAndroid.length > 0 && (
            <div className="space-y-4 pt-6">

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <h3 className="text-lg font-semibold text-pink-400/90 font-mono">
                  Published & Production Projects
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {publishedAndroid.map((project) => (
                  <ProjectCard key={project.id || project.name} project={project} />
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="space-y-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Personal Projects & Experiments
            </h2>
          </div>

          {personalProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((project) => (
                <ProjectCard key={project.id || project.name} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-[#0b131b]/80 border border-dashed border-white/10 rounded-2xl p-8 text-center">
              <p className="text-sm font-mono text-gray-400">
                Currently working on new personal projects. Coming soon!
              </p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}