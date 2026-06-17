import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../utils/images';
import { useStore } from '../store/useStore';
import gsap from 'gsap';

const RevealHall: React.FC = () => {
  const { isGateOpened } = useStore();
  const letterARef = useRef<HTMLDivElement>(null);
  const letterIRef = useRef<HTMLDivElement>(null);
  const ampersandRef = useRef<HTMLSpanElement>(null);
  const namesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isGateOpened) return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Initial state
    gsap.set([letterARef.current, letterIRef.current, ampersandRef.current, namesRef.current, textRef.current], {
      opacity: 0
    });

    // Animation sequence
    tl.fromTo(letterARef.current,
      { x: -200, opacity: 0, rotation: -20 },
      { x: 0, opacity: 1, rotation: 0, duration: 1.5, ease: 'power4.out' }
    )
    .fromTo(letterIRef.current,
      { x: 200, opacity: 0, rotation: 20 },
      { x: 0, opacity: 1, rotation: 0, duration: 1.5, ease: 'power4.out' },
      '<'
    )
    .to([letterARef.current, letterIRef.current], {
      filter: 'drop-shadow(0 0 15px rgba(197, 160, 89, 0.5))',
      duration: 0.8,
      ease: 'sine.inOut'
    })
    .fromTo(ampersandRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.6, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    )
    .fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(namesRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );

    // Subtle floating animation
    gsap.to(containerRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      tl.kill();
    };
  }, [isGateOpened]);

  return (
    <section id="reveal-hall" className="section-container panel">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.REVEAL_HALL} 
          alt="Reveal Hall" 
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/90 via-transparent to-maroon-dark/90" />
      </div>

      <div ref={containerRef} className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">
        {/* Monogram AI */}
        <div className="relative flex items-center justify-center mb-12 h-40">
          <div ref={letterARef} className="relative">
            <span className="font-playfair text-9xl md:text-[12rem] text-gold leading-none select-none">A</span>
          </div>
          <span ref={ampersandRef} className="font-pinyon text-5xl text-gold/60 mx-4 mt-8">&</span>
          <div ref={letterIRef} className="relative">
            <span className="font-playfair text-9xl md:text-[12rem] text-gold leading-none select-none">I</span>
          </div>
        </div>
        
        {/* Main Subtitle */}
        <p ref={textRef} className="font-cinzel text-lg md:text-xl text-gold-light/80 tracking-[0.25em] leading-relaxed mb-8 max-w-3xl">
         AN ENCHANTING NIGHT OF MUSIC, LAUGHTER, AND A CELEBRATION OF LOVE THAT WILL ECHO THROUGH GENERATIONS.
        </p>

        {/* Names beneath the text */}
        <div ref={namesRef} className="space-y-2">
          <h2 className="font-pinyon text-5xl md:text-6xl text-gold text-glow">
            Aleeza & Ibrahim
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mt-4" />
        </div>
      </div>
    </section>
  );
};

export default RevealHall;
