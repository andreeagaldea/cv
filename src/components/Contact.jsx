import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({
  email = "andreeagaldea@gmail.com",
  location = "Bucharest / Remote"
}) {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current || status === 'sending') return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-2 md:px-4">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-4 md:mb-8 text-left">
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

      <div className="w-full bg-[#0b131b]/80 border border-white/5 rounded-3xl p-4 md:p-6 sm:p-10 text-left">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
            <div className="space-y-1">
              <label
                htmlFor="contact-name"
                className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400"
              >
                FULL NAME
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="e.g. Jane Doe"
                className="w-full bg-[#070d14] border border-white/10 focus:border-pink-400/50 rounded-xl px-4 py-3.5 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-email"
                className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400"
              >
                EMAIL
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="jane.doe@example.com"
                className="w-full bg-[#070d14] border border-white/10 focus:border-pink-400/50 rounded-xl px-4 py-3.5 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="contact-subject"
              className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400"
            >
              SUBJECT
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              placeholder="Project Proposal / Front-End Collaboration"
              className="w-full bg-[#070d14] border border-white/10 focus:border-pink-400/50 rounded-xl px-4 py-3.5 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="contact-message"
              className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400"
            >
              MESSAGE
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Detail your vision or project requirements..."
              className="w-full bg-[#070d14] border border-white/10 focus:border-pink-400/50 rounded-xl px-4 py-3.5 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="font-mono text-xs">
              {status === 'success' && (
                <p className="text-emerald-400">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-sm bg-gradient-to-r from-[#FC64B6] via-[#EB83AA] to-[#FC64B6] border border-pink-300/20 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(223,146,162,0.25)] transition-all cursor-pointer self-end sm:self-auto"
            >
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
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