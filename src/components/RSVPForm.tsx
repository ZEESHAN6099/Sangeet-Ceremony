import React, { useMemo, useState } from 'react';
import { IMAGES } from '../utils/images';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
  });
  const [sendState, setSendState] = useState<'idle' | 'success'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const attendanceLabel = useMemo(() => {
    if (formData.attending === 'yes') return 'Joyfully attending';
    if (formData.attending === 'no') return 'Regretfully unable to attend';
    return 'Awaiting response';
  }, [formData.attending]);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (sendState !== 'idle' || statusMessage) {
      setSendState('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `RSVP for Aleeza & Ibrahim - ${formData.name}`;
    const body = [
      'Dear Sana Iqbal,',
      '',
      'Please find my RSVP details for the Sangeet Night below.',
      '',
      `Guest Name: ${formData.name}`,
      `Guest Email: ${formData.email}`,
      `Guest Phone: ${formData.phone}`,
      `Attendance Status: ${attendanceLabel}`,
      '',
      'Warm regards,',
      formData.name,
    ].join('\n');

    const mailtoUrl = `mailto:Sanashah13@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSendState('success');
    setStatusMessage('Your email draft is ready with full name, email, phone number, and attendance details.');
  };

  return (
    <section id="rsvp" className="section-container panel overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.RSVP_BG}
          alt="RSVP Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-maroon-dark/70" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gold/10 via-amber/5 to-transparent" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute left-10 top-24 h-32 w-32 rounded-full bg-gold/5 blur-[90px]" />
        <div className="absolute bottom-16 right-10 h-40 w-40 rounded-full bg-maroon/30 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-12 md:pt-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-b from-maroon-dark/80 via-maroon/55 to-maroon-dark/80 px-8 pt-8 pb-14 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-12 md:pt-12 md:pb-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 bg-gradient-to-b from-gold/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute inset-[10px] rounded-[1.6rem] border border-gold/10" />
          <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-gold/25" />
          <div className="pointer-events-none absolute right-8 top-8 h-16 w-16 border-r border-t border-gold/25" />
          <div className="pointer-events-none absolute bottom-8 left-8 h-16 w-16 border-b border-l border-gold/25" />
          <div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b border-r border-gold/25" />

          <div className="relative text-center mb-10">
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/60" />
              <div className="h-2 w-2 rotate-45 border border-gold/50" />
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <h2 className="mb-2 font-pinyon text-6xl text-gold md:text-7xl">RSVP</h2>
            <p className="font-cinzel text-[11px] tracking-[0.35em] text-gold/60 uppercase">
              A graceful reply is requested
            </p>
            <p className="mt-3 font-cinzel text-xs tracking-[0.2em] text-gold/50 uppercase">
            Kindly reply by June 22nd, 2026
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <label className="px-1 font-cinzel text-xs tracking-widest text-gold/80 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-2xl border border-gold/15 bg-black/20 px-5 py-4 text-gold placeholder:text-gold/25 outline-none transition-all duration-300 font-montserrat focus:border-gold/50 focus:bg-black/30"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="px-1 font-cinzel text-xs tracking-widest text-gold/80 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-2xl border border-gold/15 bg-black/20 px-5 py-4 text-gold placeholder:text-gold/25 outline-none transition-all duration-300 font-montserrat focus:border-gold/50 focus:bg-black/30"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="px-1 font-cinzel text-xs tracking-widest text-gold/80 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-2xl border border-gold/15 bg-black/20 px-5 py-4 text-gold placeholder:text-gold/25 outline-none transition-all duration-300 font-montserrat focus:border-gold/50 focus:bg-black/30"
                  placeholder="+1 234 567 890"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="px-1 font-cinzel text-xs tracking-widest text-gold/80 uppercase">
                Will you be attending?
              </label>
              <select
                required
                className="w-full cursor-pointer appearance-none rounded-2xl border border-gold/15 bg-black/20 px-5 py-4 text-gold outline-none transition-all duration-300 font-montserrat focus:border-gold/50 focus:bg-black/30"
                value={formData.attending}
                onChange={(e) => updateField('attending', e.target.value)}
              >
                <option value="" disabled className="bg-maroon-dark">
                  Select an option
                </option>
                <option value="yes" className="bg-maroon-dark">
                  Yes, I will be delighted to attend
                </option>
                <option value="no" className="bg-maroon-dark">
                  Regretfully, I will not be able to attend
                </option>
              </select>
            </div>

            <div className="rounded-[1.6rem] border border-gold/15 bg-white/5 p-5 text-center backdrop-blur-sm">
              <p className="font-cinzel text-[11px] tracking-[0.3em] text-gold/60 uppercase">
                RSVP Preview
              </p>
              <p className="mt-3 font-playfair text-2xl text-gold-light">{attendanceLabel}</p>
              <p className="mt-2 font-montserrat text-sm leading-relaxed text-gold/60">
                On submit, your mail app opens a ready-made RSVP draft addressed to
                {' '}
                <span className="text-gold-light">Sana Iqbal</span>.
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
                  Open RSVP Draft
                </span>
              </button>
            </div>

            {statusMessage ? (
              <p
                className="text-center font-montserrat text-sm text-gold/65"
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
