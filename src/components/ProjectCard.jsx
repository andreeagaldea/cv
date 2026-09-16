import React from 'react';

export default function ProjectCard({ project }) {
    const isFullWidth = project.fullWidth;

    return (
        <div
            className={`bg-white/5 border border-white/10 rounded-2xl p-3 md:p-6 flex flex-col justify-between space-y-4 hover:border-pink-500/30 transition-all duration-300 ${isFullWidth ? 'md:col-span-2' : ''
                }`}
        >
            <div className="space-y-4">

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                        {project.name}
                    </h3>
                    {project.role && (
                        <span className="self-start text-[11px] font-mono bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2.5 py-0.5 rounded-full shrink-0">
                            {project.role}
                        </span>
                    )}
                </div>

                {project.description?.ro && (
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {project.description.ro}
                    </p>
                )}

                <div className={`grid grid-cols-1 ${project.img ? 'lg:grid-cols-2' : ''} gap-6 items-start pt-2`}>

                    {project.components && (
                        <div className="space-y-3">
                            <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-wider block">
                                Project Components:
                            </span>
                            <div className="space-y-2.5">
                                {project.components.map((comp, idx) => (
                                    <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-3 text-xs space-y-1.5">
                                        <div className="flex justify-between items-center gap-2">
                                            <span className="font-semibold text-gray-200">{comp.name}</span>
                                            <span className="text-pink-400 font-mono text-[10px] shrink-0">{comp.role}</span>
                                        </div>
                                        {comp.framework && (
                                            <div className="text-gray-400 text-[11px]">
                                                Framework: <span className="text-gray-300">{comp.framework}</span>
                                            </div>
                                        )}
                                        {comp.extra && (
                                            <div className="flex flex-wrap gap-1 pt-1">
                                                {comp.extra.map((tech, tIdx) => (
                                                    <span key={tIdx} className="bg-white/5 text-[10px] text-gray-400 px-1.5 py-0.5 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.img && (
                        <div className="w-full h-full min-h-[220px] rounded-xl overflow-hidden border border-white/10 relative group">
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/40 via-transparent to-transparent" />
                        </div>
                    )}

                </div>

                {(project.framework || project.extra) && !project.components && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.framework && (
                            <span className="bg-white/10 text-white font-mono text-xs px-2.5 py-0.5 rounded-md">
                                {project.framework}
                            </span>
                        )}
                        {project.extra?.map((tech, idx) => (
                            <span key={idx} className="bg-white/5 text-gray-400 border border-white/5 font-mono text-xs px-2 py-0.5 rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

            </div>

            {project.links && project.links.length > 0 && (
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4">
                    {project.links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-400 hover:text-pink-300 hover:underline transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            {link.includes('youtu') ? 'Video Demo' : link.includes('iqads') || link.includes('newsbv') || link.includes('itsybitsy') ? 'Article / PR' : 'View Live'}
                        </a>
                    ))}
                </div>
            )}

        </div>
    );
}