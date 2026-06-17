import React, { useState } from 'react';
import { IMAGES } from '../utils/images';
import { Heart, Sparkles } from 'lucide-react';

const GuestBook: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(formData.name);
    setShowPopup(true);
    setFormData({ name: '', message: '' });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsSubmitted(true);
  };

  return (
    <section id="guestbook" className="section-container panel overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.GUESTBOOK_BG}
          alt="Guest Book Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-maroon-dark/80" />
        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-gold/10 via-amber/5 to-transparent" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute left-8 bottom-20 h-40 w-40 rounded-full bg-maroon/30 blur-[100px]" />
        <div className="absolute right-10 top-20 h-36 w-36 rounded-full bg-gold/5 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-12 md:pt-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-b from-maroon-dark/80 via-maroon/55 to-maroon-dark/80 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 bg-gradient-to-b from-gold/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute inset-[10px] rounded-[1.6rem] border border-gold/10" />
          <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-gold/25" />
          <div className="pointer-events-none absolute right-8 top-8 h-16 w-16 border-r border-t border-gold/25" />
          <div className="pointer-events-none absolute bottom-8 left-8 h-16 w-16 border-b border-l border-gold/25" />
          <div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b border-r border-gold/25" />

          {!isSubmitted ? (
            <>
              <div className="relative mb-10 text-center">
                <div className="mb-4 flex items-center justify-center gap-4">
                  <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/60" />
                  <Heart className="h-8 w-8 text-gold" />
                  <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/60" />
                </div>
                <h2 className="font-cinzel text-4xl tracking-[0.25em] text-gold md:text-5xl">
                  WORDS OF LOVE
                </h2>
                <p className="mt-3 font-playfair text-xl italic text-gold/70">
                  Leave a heartfelt note for the couple
                </p>
              </div>

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="space-y-2">
                  <label className="px-1 font-cinzel text-xs tracking-widest text-gold/80 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full rounded-2xl border border-gold/15 bg-black/20 px-5 py-4 text-gold placeholder:text-gold/25 outline-none transition-all duration-300 font-montserrat focus:border-gold/50 focus:bg-black/30"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="px-1 font-cinzel text-xs tracking-widest text-gold/80 uppercase">
                    Words Of Love
                  </label>
                  <textarea
                    placeholder="Share your blessings, prayers, and beautiful wishes..."
                    required
                    rows={6}
                    className="w-full resize-none rounded-[1.6rem] border border-gold/15 bg-black/20 px-5 py-5 text-gold placeholder:text-gold/25 outline-none transition-all duration-300 font-montserrat leading-relaxed focus:border-gold/50 focus:bg-black/30"
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                  />
                </div>

                <div className="rounded-[1.6rem] border border-gold/15 bg-white/5 p-5 text-center backdrop-blur-sm">
                  <p className="font-cinzel text-[11px] tracking-[0.3em] text-gold/60 uppercase">
                    Message Preview
                  </p>
                  <p className="mt-3 font-playfair text-2xl text-gold-light">
                    {formData.name ? `With love, ${formData.name}` : 'A beautiful note awaits'}
                  </p>
                  <p className="mt-2 font-montserrat text-sm leading-relaxed text-gold/60">
                    Your message will be presented as a heartfelt blessing for Aleeza & Ibrahim.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-full border border-gold/35 bg-gradient-to-r from-maroon via-maroon-dark to-maroon px-8 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-gold/60 hover:shadow-[0_18px_40px_rgba(109,71,20,0.3)] active:scale-[0.985]"
                  >
                    <span className="pointer-events-none absolute inset-[1px] rounded-full border border-gold/10" />
                    <span className="absolute inset-y-0 left-[-20%] w-1/3 rotate-12 bg-white/10 blur-xl transition-all duration-700 group-hover:left-[95%]" />
                    <span className="relative font-cinzel text-sm tracking-[0.35em] text-gold-light uppercase">
                      Send Wishes
                    </span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="relative py-10 text-center">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/60" />
                <Sparkles className="h-8 w-8 text-gold" />
                <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/60" />
              </div>
              <h2 className="font-cinzel text-3xl tracking-[0.2em] text-gold md:text-4xl">
                THANK YOU FOR YOUR BEAUTIFUL WORDS
              </h2>
              <p className="mx-auto mt-4 max-w-xl font-playfair text-2xl italic text-gold/75">
                {submittedName ? `${submittedName}, your heartfelt message has become a cherished part of this celebration.` : 'Your heartfelt message has become a cherished part of this celebration.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {showPopup ? (
        <div className="fixed inset-0 z-[220] flex items-center justify-center bg-black/60 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-b from-maroon-dark/95 via-maroon/85 to-maroon-dark/95 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.55)] md:p-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-2/3 -translate-x-1/2 bg-gradient-to-b from-gold/20 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute inset-[10px] rounded-[1.6rem] border border-gold/10" />

            <div className="relative text-center">
              <div className="mb-5 flex items-center justify-center gap-4">
                <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/60" />
                <Heart className="h-8 w-8 fill-gold/20 text-gold" />
                <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/60" />
              </div>
              <h3 className="font-cinzel text-2xl tracking-[0.22em] text-gold md:text-3xl">
                THANK YOU
              </h3>
              <p className="mt-4 font-playfair text-2xl italic text-gold-light">
                Thank you for your beautiful words
              </p>
              <p className="mt-4 font-montserrat text-sm leading-relaxed text-gold/65">
                {submittedName ? `${submittedName}, your warm wishes add even more beauty to this celebration.` : 'Your warm wishes add even more beauty to this celebration.'}
              </p>

              <button
                type="button"
                onClick={handleClosePopup}
                className="group relative mt-8 inline-flex overflow-hidden rounded-full border border-gold/35 bg-gradient-to-r from-maroon via-maroon-dark to-maroon px-8 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-gold/60 hover:shadow-[0_18px_40px_rgba(109,71,20,0.3)] active:scale-[0.985]"
              >
                <span className="pointer-events-none absolute inset-[1px] rounded-full border border-gold/10" />
                <span className="relative font-cinzel text-xs tracking-[0.35em] text-gold-light uppercase">
                  Close
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default GuestBook;
