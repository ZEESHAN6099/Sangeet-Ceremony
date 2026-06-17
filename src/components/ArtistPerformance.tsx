import React, { useState } from 'react';
import { IMAGES } from '../utils/images';
import { Heart } from 'lucide-react';

const ArtistPerformance: React.FC = () => {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <section id="artist" className="section-container panel bg-maroon-dark">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-70" />
        <div className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-gold/10 blur-[90px]" />
        <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-maroon/30 blur-[80px]" />
        <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold" />
            <Heart className="text-gold w-8 h-8 animate-pulse" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl text-gold tracking-[0.3em]">
            FAMILY CELEBRATION
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative mx-auto w-full max-w-md group">
            <div className="absolute -inset-6 rounded-[2rem] bg-gold/15 blur-3xl transition-all duration-500 group-hover:bg-gold/25" />
            <div className="absolute inset-x-10 -top-5 z-20 rounded-full border border-gold/30 bg-maroon-dark/90 px-6 py-2 text-center shadow-lg backdrop-blur-md">
              <p className="font-cinzel text-[11px] tracking-[0.45em] text-gold/80">TOGETHER AS ONE</p>
            </div>

            <div className="relative rounded-[2rem] border border-gold/35 bg-gradient-to-b from-[#3a080d]/95 via-[#23080d]/95 to-[#120609]/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="rounded-[1.7rem] border border-gold/20 bg-gradient-to-b from-gold/10 to-transparent p-3">
                <div className="relative overflow-hidden rounded-[1.4rem] border border-gold/40 bg-black/30">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_rgba(255,220,170,0.18),_transparent_45%)]" />

                  {!imageMissing ? (
                    <img
                      src={IMAGES.FAMILY_GATHERING}
                      alt="Family Gathering"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => {
                        setImageMissing(true);
                      }}
                    />
                  ) : (
                    <div className="flex aspect-[3/4] h-full w-full items-center justify-center bg-gradient-to-br from-maroon/70 to-black/70 px-8 text-center">
                      <p className="font-cinzel text-sm tracking-[0.25em] text-gold/70">
                        FAMILY IMAGE
                      </p>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/20 to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-7 bg-gradient-to-t from-[#120609] via-[#120609]/80 to-transparent">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/35 to-gold/10" />
                      <div className="h-2 w-2 rotate-45 border border-gold/40" />
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/35 to-gold/10" />
                    </div>
                    <h3 className="text-center font-cinzel text-3xl tracking-[0.28em] text-gold md:text-4xl">
                      FAMILY LOVE
                    </h3>
                    <p className="mt-3 text-center font-cinzel text-xs tracking-[0.45em] text-gold-light/90">
                      CELEBRATING TOGETHER
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-7 text-center md:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-5 py-2 mx-auto md:mx-0">
              <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="font-cinzel text-[11px] tracking-[0.35em] text-gold/75">WHOLEsome FAMILY TIME</span>
            </div>

            <h4 className="font-playfair italic text-3xl text-gold md:text-4xl">
              "Where hearts unite and memories blossom"
            </h4>

            <p className="font-montserrat text-lg text-gold/80 leading-relaxed">
             A BEAUTIFUL EVENING FILLED WITH LAUGHTER, LOVE, AND THE WARMTH OF FAMILY. TOGETHER WE CELEBRATE THE BONDS THAT UNITE US, SHARING STORIES, CREATING NEW MEMORIES, AND CHERISHING THE PRECIOUS MOMENTS THAT MAKE LIFE TRULY SPECIAL.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-gold/15 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-cinzel text-[11px] tracking-[0.35em] text-gold/60">CELEBRATION</p>
                <p className="mt-3 font-playfair text-2xl text-gold-light">Family Time</p>
              </div>
              <div className="rounded-[1.5rem] border border-gold/15 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-cinzel text-[11px] tracking-[0.35em] text-gold/60">VIBE</p>
                <p className="mt-3 font-playfair text-2xl text-gold-light">Wholesome</p>
              </div>
            </div>

            <div className="pt-2">
              <div className="mx-auto h-px w-28 bg-gradient-to-r from-transparent via-gold/40 to-transparent md:mx-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistPerformance;
