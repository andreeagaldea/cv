import React from 'react';

export default function ProjectsCallout({
  badgeText = "10+ COMPLETED PROJECTS",
  title = "Discover My Digital Creations",
  description = "From complex web applications to interactive experiences with sophisticated animations.",
  buttonText = "Explore Projects",
  onButtonClick
}) {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-2 md:px-4">
      <div className="relative w-full bg-[#0b131b]/90 border border-white/5 rounded-3xl p-4 sm:p-12 text-center flex flex-col items-center justify-center overflow-hidden">


        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a1722]/60 border border-pink-500/20 text-pink-300 font-mono text-xs font-semibold mb-6 tracking-wide">

          <svg className="w-3.5 h-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="uppercase">{badgeText}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-2xl leading-tight">
          {title}
        </h2>

        <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-xl leading-relaxed mb-8">
          {description}
        </p>

        <button
          onClick={onButtonClick}
          className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer bg-gradient-to-r from-[#FC64B6] via-[#EB83AA] to-[#FC64B6] shadow-[0_0_25px_rgba(223,146,162,0.3)] hover:shadow-[0_0_35px_rgba(223,146,162,0.5)] border border-pink-300/20"
        >
          <span>{buttonText}</span>

          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </div>
    </section>
  );
}