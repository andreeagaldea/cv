export default function Hero({ data }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full max-w-5xl mx-auto py-10 md:my-5">

      <div className="lg:col-span-4 flex flex-col items-center justify-center py-5">
        <div className="relative group">

          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl group-hover:opacity-100 transition duration-500"></div>


          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full p-[2px] bg-gradient-to-b from-white/20 to-white/5 shadow-2xl overflow-hidden">
            <img
              src={data.avatar}
              alt={`${data.name} - ${data.title}`}
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition duration-500 ease-out"
            />
          </div>


          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#121921]/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-lg flex items-center gap-2 border border-white/10 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] text-gray-300 tracking-widest uppercase font-semibold font-mono">
              {data.status || "OPEN TO WORK"}
            </span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 flex flex-col items-center lg:items-start gap-4 py-5">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-pink-300">
          <span>{data.badge || "Frontend Developer & Cats Lover"} <i class="fa-solid fa-cat"></i> </span>
        </div>

        <div className="space-y-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white outfit-font pb-3">
            {data.name}
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-400 font-medium jetbrains-mono-font pb-3">
            {data.title}
          </p>
        </div>

        <div className="w-full max-w-xl bg-[#0b131b]/90 rounded-2xl p-5 border border-pink-500/20 text-left my-2 backdrop-blur-sm mb-5">

          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            <span className="text-xs text-white/40 ml-2 font-mono">
              {data.codeSnippet?.fileName || "developer.js"}
            </span>
          </div>

          <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-gray-200 jetbrains-mono-font">
            <code>
              <span className="text-pink-400">const</span> <span className="text-emerald-300">developer</span> = &#123;<br />
              &nbsp;&nbsp;<span className="text-gray-400">name:</span> <span className="text-amber-200">"{data.name}"</span>,<br />
              &nbsp;&nbsp;<span className="text-gray-400">role:</span> <span className="text-amber-200">"{data.title}"</span>,<br />
              {data.codeSnippet?.passions && (
                <>
                  &nbsp;&nbsp;<span className="text-gray-400">passion:</span> [<br />
                  {data.codeSnippet.passions.map((p, idx) => (
                    <React.Fragment key={idx}>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-200">"{p}"</span>{idx < data.codeSnippet.passions.length - 1 ? ',' : ''}<br />
                    </React.Fragment>
                  ))}
                  &nbsp;&nbsp;],<br />
                </>
              )}
              &nbsp;&nbsp;<span className="text-gray-400">status:</span> <span className="text-amber-200">"{data.codeSnippet?.statusText || "Available for web opportunities"}"</span>,<br />
              {data.codeSnippet?.codePhrase && (
                <>
                  &nbsp;&nbsp;<span className="text-gray-400">code:</span> () =&gt; <span className="text-amber-200">"{data.codeSnippet.codePhrase}"</span><br />
                </>
              )}
              &#125;;
            </code>
          </pre>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 w-full">

          <a
            href={data.links?.cv || "#"}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 bg-gradient-to-r from-[#8b4556] via-[#a34e60] to-[#6b3548] shadow-[0_0_20px_rgba(163,78,96,0.35)] hover:shadow-[0_0_30px_rgba(163,78,96,0.55)] border border-pink-300/20"
          >
            <span>Download CV</span>
          </a>

          <a
            href={data.links?.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
          >
            <i class="fa-brands fa-github"></i>
            <span className="font-mono text-xs">GitHub</span>
          </a>

          <a
            href={data.links?.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
          >
            <i class="fa-brands fa-linkedin"></i>
            <span className="font-mono text-xs">LinkedIn</span>
          </a>

        </div>

      </div>
    </section>
  );
}