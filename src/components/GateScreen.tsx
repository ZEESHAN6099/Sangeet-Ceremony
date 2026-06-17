import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../store/useStore';
import { IMAGES } from '../utils/images';
import gsap from 'gsap';

const GateScreen: React.FC = () => {
  const { initializeAudio, openGate, isGateOpened } = useStore();
  const [isUnlocking, setIsUnlocking] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lockBodyRef = useRef<HTMLDivElement>(null);
  const shackleRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const sparkRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isGateOpened) return;

    const intro = gsap.timeline();

    intro
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 36, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(
        lockBodyRef.current,
        { scale: 0.88, opacity: 0, rotate: -4 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: 'back.out(1.6)' },
        '-=0.75'
      )
      .fromTo(
        shackleRef.current,
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

    gsap.to(lockBodyRef.current, {
      y: -10,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(glowRef.current, {
      scale: 1.18,
      opacity: 0.85,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    sparkRefs.current.forEach((spark, index) => {
      if (!spark) return;

      gsap.to(spark, {
        y: -30 - (index % 3) * 16,
        x: index % 2 === 0 ? 8 : -8,
        opacity: 0,
        scale: 1.8,
        duration: 2.6 + (index % 4) * 0.25,
        repeat: -1,
        delay: index * 0.18,
        ease: 'sine.out',
      });
    });

    return () => {
      intro.kill();
    };
  }, [isGateOpened]);

  const handleEnter = () => {
    if (isUnlocking) return;

    setIsUnlocking(true);
    initializeAudio();

    const tl = gsap.timeline({
      onComplete: () => {
        openGate();
      },
    });

    tl.to(lockBodyRef.current, {
      scale: 1.05,
      duration: 0.22,
      ease: 'power2.out',
    })
      .to(
        shackleRef.current,
        {
          y: -34,
          rotate: -14,
          transformOrigin: '20% 100%',
          duration: 0.78,
          ease: 'back.out(1.8)',
        },
        '-=0.05'
      )
      .to(
        glowRef.current,
        {
          scale: 3.4,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
        },
        '-=0.35'
      )
      .to(
        contentRef.current,
        {
          opacity: 0,
          scale: 1.08,
          filter: 'blur(8px)',
          duration: 0.95,
          ease: 'power2.inOut',
        },
        '-=0.35'
      )
      .to(
        screenRef.current,
        {
          opacity: 0,
          yPercent: -6,
          duration: 1.05,
          ease: 'power3.inOut',
        },
        '-=0.2'
      );
  };

  return (
    <div
      ref={screenRef}
      className={`fixed inset-0 z-[200] overflow-hidden ${isGateOpened ? 'pointer-events-none' : ''}`}
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.LOCK_ENTRY_BG}
          alt="Royal entrance"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,150,0.14),_transparent_35%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-maroon-dark/50 to-maroon-dark/90" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold/10 to-transparent" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="pointer-events-none absolute inset-[18px] rounded-[2rem] border border-gold/15 md:inset-[28px]" />
      <div className="pointer-events-none absolute left-6 top-6 h-20 w-20 border-l border-t border-gold/25 md:left-10 md:top-10" />
      <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 border-r border-t border-gold/25 md:right-10 md:top-10" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-20 w-20 border-b border-l border-gold/25 md:bottom-10 md:left-10" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-20 w-20 border-b border-r border-gold/25 md:bottom-10 md:right-10" />

      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            sparkRefs.current[index] = el;
          }}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-gold/70"
          style={{
            left: `${12 + ((index * 7) % 76)}%`,
            top: `${18 + ((index * 11) % 60)}%`,
          }}
        />
      ))}

      <div ref={contentRef} className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-b from-maroon-dark/45 via-maroon/25 to-black/35 px-8 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-14 md:py-16">
          <div className="pointer-events-none absolute inset-[10px] rounded-[1.6rem] border border-gold/10" />

          <p className="relative font-cinzel text-[11px] uppercase tracking-[0.45em] text-gold/65">
            A Royal Invitation Awaits
          </p>
          <h1 className="relative mt-5 font-pinyon text-6xl text-gold md:text-8xl">
            Aleeza & Ibrahim
          </h1>
          <p className="relative mx-auto mt-4 max-w-2xl font-cinzel text-sm uppercase tracking-[0.32em] text-gold/60 md:text-[15px]">
            One sacred unlock begins an evening of music, love, family and timeless celebration
          </p>

          <div className="relative mx-auto mt-10 flex h-48 w-48 items-center justify-center md:h-56 md:w-56">
            <div
              ref={glowRef}
              className="absolute h-28 w-28 rounded-full bg-gold/20 opacity-70 blur-[46px] md:h-36 md:w-36"
            />
            <div
              ref={shackleRef}
              className="absolute top-2 h-20 w-24 rounded-t-[999px] border-[10px] border-b-0 border-gold/80 md:h-24 md:w-28"
            />
            <div
              ref={lockBodyRef}
              className="relative mt-8 flex h-28 w-32 items-center justify-center rounded-[2rem] border border-gold/40 bg-gradient-to-b from-[#7a1016]/90 via-[#4b090d]/95 to-[#240507]/95 shadow-[0_18px_40px_rgba(0,0,0,0.45)] md:h-32 md:w-36"
            >
              <div className="absolute inset-[8px] rounded-[1.5rem] border border-gold/15" />
              <div className="absolute top-4 h-px w-12 bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
              <div className="relative h-11 w-8 rounded-full border border-gold/70">
                <div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold" />
                <div className="absolute left-1/2 top-5 h-4 w-1 -translate-x-1/2 rounded-full bg-gold" />
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex justify-center">
            <button
              onClick={handleEnter}
              disabled={isUnlocking}
              className="group relative overflow-hidden rounded-full border border-gold/35 bg-gradient-to-r from-maroon via-maroon-dark to-maroon px-10 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-gold/60 hover:shadow-[0_18px_40px_rgba(109,71,20,0.3)] active:scale-[0.985] disabled:cursor-wait disabled:opacity-90"
            >
              <span className="pointer-events-none absolute inset-[1px] rounded-full border border-gold/10" />
              <span className="absolute inset-y-0 left-[-25%] w-1/3 rotate-12 bg-white/10 blur-xl transition-all duration-700 group-hover:left-[105%]" />
              <span className="relative font-cinzel text-sm uppercase tracking-[0.35em] text-gold-light md:text-base">
                {isUnlocking ? 'Unlocking The Celebration' : 'Unlock The Celebration'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateScreen;
