export default function Education({ items }) {
  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-4">

      <div className="space-y-1 text-left mb-6">
        <span className="text-[10px] uppercase tracking-widest text-pink-400 font-mono font-semibold">
          THEORETICAL FOUNDATIONS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Education & Training
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {items?.map((item, index) => (
          <div
            key={item.id || index}
            className="w-full bg-[#0b131b]/80 border border-white/5 rounded-xl p-4 sm:p-5 text-left transition-all duration-300 hover:border-white/10 hover:bg-[#0f1720]"
          >

            <div className="flex items-center justify-between mb-3">

              <div className='flex'>

                <div className="my-auto w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-pink-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>

                <div className="space-y-0.5 px-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.institution || item.school || item.title}
                  </h3>
                  {(item.faculty || item.subtitle) && (
                    <p className="text-pink-400/90 font-mono text-xs sm:text-sm">
                      {item.faculty || item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {item.period && (
                <div className="bg-white/5 border border-white/10 text-gray-300 font-mono text-xs px-2.5 py-0.5 rounded-full">
                  {item.period}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}