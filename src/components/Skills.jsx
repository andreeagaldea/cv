import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Skills({ skills }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 min-w-0">

      <div className="flex items-end justify-between mb-8">
        <div className="space-y-1 text-left">
          <span className="text-[10px] uppercase tracking-widest text-pink-400 font-mono font-semibold">
            CORE ARSENAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tech Stack & Skills
          </h2>
          <p className="text-sm text-gray-400 font-mono">
            High-performance tooling crafting next-gen experiences.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            ref={nextRef}
            aria-label="Next"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden relative pt-4 pb-2">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
        >
          {skills?.map((item, index) => (
            <SwiperSlide key={item.id || index} className="!h-auto flex">
              <div className="relative group w-full h-full flex flex-col">


                {item.active && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-[#2b1922] text-pink-300 border border-pink-500/30 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    Active / Focus
                  </div>
                )}

                <div
                  className={`flex-1 w-full flex flex-col items-center justify-center text-center p-6 rounded-2xl transition-all duration-300 border ${item.active
                      ? 'bg-[#0f1720] border-pink-500/40 shadow-[0_10px_25px_rgba(236,72,153,0.15)]'
                      : 'bg-[#0b131b]/80 border-white/5 hover:border-white/20 hover:bg-[#0f1720]'
                    }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl mb-3 text-white font-bold font-mono">
                    <i className={`${item.iconClass || item.icon} transition-colors duration-300 group-hover:text-pink-300`}></i>
                  </div>

                  <h3 className="text-white font-bold text-base mb-1  transition-colors duration-300 group-hover:text-pink-200">
                    {item.name}
                  </h3>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}