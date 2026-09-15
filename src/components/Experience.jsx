export default function Experience({ items }) {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">

      <div className="space-y-1 text-left mb-8">
        <span className="text-[10px] uppercase tracking-widest text-pink-400 font-mono font-semibold">
          CAREER & PATHWAY
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {items?.map((item) => (
          <div
            key={item.id}
            className="w-full bg-[#0b131b]/80 border border-white/5 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:border-white/10 hover:bg-[#0f1720]"
          >

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.role}
                </h3>
                <p className="text-gray-400 font-medium text-sm sm:text-base">
                  {item.company}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">

                {item.period && (
                  <div className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full">
                    {item.period}
                  </div>
                )}

                {item.location && (
                  <div className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

            </div>

            <div className="mb-6 space-y-2">
              {Array.isArray(item.description) ? (
                <ul className="list-none space-y-2 font-mono text-sm text-gray-300 leading-relaxed">
                  {item.description.map((descPoint, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1.5 text-xs">▹</span>
                      <span>{descPoint}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-sm font-mono leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tags?.map((tag, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300 text-xs font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block"></span>
                  <span>{tag}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}