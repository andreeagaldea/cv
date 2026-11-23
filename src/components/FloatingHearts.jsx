import { useEffect, useRef } from 'react';
import PixelHeart from './utils/PixelHeart';
const HEARTS = [
    {
        id: 'tl-main',
        depth: 20,
        bobAmp: 5,
        bobSpeed: 0.002,
        phase: 0,
        className: 'top-30 left-17 opacity-85',
        heartClass: 'w-10 h-10 -rotate-12',
    },
    {
        id: 'tl-small-1',
        depth: 32,
        bobAmp: 3.5,
        bobSpeed: 0.0026,
        phase: 1.3,
        className: 'top-55 left-20 opacity-70',
        heartClass: 'w-5 h-5 rotate-12',
    },
    {
        id: 'tl-small-2',
        depth: 14,
        bobAmp: 4.5,
        bobSpeed: 0.0019,
        phase: 2.6,
        className: 'top-40 left-29 opacity-65',
        heartClass: 'w-6 h-6 rotate-6',
    },
    {
        id: 'tl-small-3',
        depth: 25,
        bobAmp: 4,
        bobSpeed: 0.0023,
        phase: 3.9,
        className: 'top-70 left-24 opacity-65',
        heartClass: 'w-7 h-7 -rotate-5',
    },
    {
        id: 'heart-2',
        depth: -28,
        bobAmp: 4.5,
        bobSpeed: 0.0021,
        phase: 0.7,
        className: 'top-96 right-10 opacity-70',
        heartClass: 'w-6 h-6 rotate-12',
    },
    {
        id: 'heart-3',
        depth: 24,
        bobAmp: 4,
        bobSpeed: 0.0022,
        phase: 1.9,
        className: 'bottom-32 left-14 opacity-65',
        heartClass: 'w-7 h-7 rotate-6',
    },
    {
        id: 'br-main',
        depth: -10,
        bobAmp: 5,
        bobSpeed: 0.0018,
        phase: 3.1,
        className: 'bottom-20 right-18 opacity-85',
        heartClass: 'w-10 h-10 rotate-12',
    },
    {
        id: 'br-small-1',
        depth: -15,
        bobAmp: 3.5,
        bobSpeed: 0.0025,
        phase: 4.4,
        className: 'bottom-52 right-21 opacity-70',
        heartClass: 'w-5 h-5 -rotate-12',
    },
    {
        id: 'br-small-2',
        depth: -16,
        bobAmp: 4.5,
        bobSpeed: 0.002,
        phase: 5.2,
        className: 'bottom-38 right-30 opacity-65',
        heartClass: 'w-6 h-6 -rotate-6',
    },
    {
        id: 'br-small-3',
        depth: -26,
        bobAmp: 4,
        bobSpeed: 0.0024,
        phase: 2.2,
        className: 'bottom-66 right-35 opacity-65',
        heartClass: 'w-7 h-7 rotate-6',
    },
];

export default function FloatingHearts() {
    const outerRefs = useRef([]);
    const bobRefs = useRef([]);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        let rafId = null;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        const startTime = performance.now();

        const handleMouseMove = (e) => {
            targetX = (e.clientX / window.innerWidth - 0.5) * 2;
            targetY = (e.clientY / window.innerHeight - 0.5) * 2;
        };

        const animate = (now) => {
            const elapsed = now - startTime;

            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;

            HEARTS.forEach((heart, index) => {
                const outerEl = outerRefs.current[index];
                const bobEl = bobRefs.current[index];

                if (outerEl) {
                    const x = (currentX * heart.depth).toFixed(2);
                    const y = (currentY * heart.depth).toFixed(2);
                    outerEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                }

                if (bobEl) {
                    if (prefersReducedMotion) {
                        bobEl.style.transform = 'translate3d(0, 0, 0)';
                    } else {
                        const bobY = (
                            Math.sin(elapsed * heart.bobSpeed + heart.phase) * heart.bobAmp
                        ).toFixed(2);
                        bobEl.style.transform = `translate3d(0, ${bobY}px, 0)`;
                    }
                }
            });

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="hidden xl:block pointer-events-none select-none"
        >
            {HEARTS.map((heart, index) => (
                <div
                    key={heart.id}
                    ref={(el) => {
                        outerRefs.current[index] = el;
                    }}
                    className={`fixed z-0 will-change-transform ${heart.className}`}
                >
                    <div
                        ref={(el) => {
                            bobRefs.current[index] = el;
                        }}
                        className="will-change-transform"
                    >
                        <PixelHeart className={heart.heartClass} />
                    </div>
                </div>
            ))}
        </div>
    );
}