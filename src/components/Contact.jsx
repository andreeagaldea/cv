export default function Contact({
  email = "andreeagaldea@gmail.com",
  location = "Bucharest / Remote"
}) {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 text-left">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-pink-400 font-mono font-semibold">
            DIRECT CONNECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Work Together!
          </h2>
          <p className="text-sm text-gray-400 font-mono">
            Send a thought, a proposal, or a technical challenge.
          </p>
        </div>


        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <a
            href={`mailto:${email}`}
            className="bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-pink-500/30 px-3 py-1.5 rounded-full flex items-center gap-2 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{email}</span>
          </a>

          <div className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#0b131b]/80 border border-white/5 rounded-3xl p-6 sm:p-10 text-left">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-2">
              <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                FULL NAME
              </label>
              <input
                type="text"
                disabled
                placeholder="e.g. Jane Doe"
                className="w-full bg-[#070d14] border border-white/5 rounded-xl px-4 py-3.5 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none cursor-not-allowed opacity-70"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                EMAIL
              </label>
              <input
                type="email"
                disabled
                placeholder="jane.doe@example.com"
                className="w-full bg-[#070d14] border border-white/5 rounded-xl px-4 py-3.5 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none cursor-not-allowed opacity-70"
              />
            </div>

          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400">
              SUBJECT
            </label>
            <input
              type="text"
              disabled
              placeholder="Project Proposal / Front-End Collaboration"
              className="w-full bg-[#070d14] border border-white/5 rounded-xl px-4 py-3.5 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none cursor-not-allowed opacity-70"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400">
              MESSAGE
            </label>
            <textarea
              rows={4}
              disabled
              placeholder="Detail your vision or project requirements..."
              className="w-full bg-[#070d14] border border-white/5 rounded-xl px-4 py-3.5 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none cursor-not-allowed opacity-70 resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              disabled
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white/80 font-medium text-sm bg-gradient-to-r from-[#6b2c45]/60 via-[#8c3a52]/60 to-[#df92a2]/60 border border-pink-300/10 cursor-not-allowed opacity-60 shadow-[0_0_20px_rgba(223,146,162,0.15)]"
            >
              <span>Send Message</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </form>
      </div>

    </section>
  );
}