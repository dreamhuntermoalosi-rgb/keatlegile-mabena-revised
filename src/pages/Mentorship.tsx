import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Mentorship: React.FC = () => {
  return (
    <>
      <SEO
        title="Mentorship | Keatlegile Mabena"
        description="You don’t have to figure everything out alone. Personalised mentorship for people seeking clarity, confidence, direction and meaningful growth."
        canonicalUrl="https://keatlegilemabena.com/mentorship"
      />

      <Breadcrumbs items={[{ label: 'Mentorship' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>MENTORSHIP &amp; GUIDANCE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            You Don’t Have to Figure Everything Out Alone.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Personalised support for people seeking clarity, confidence, direction and meaningful growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
              Mentorship for Your Next Chapter
            </h2>
            <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
              There are moments when information isn’t enough. You need perspective. You need someone to listen. Someone to challenge your thinking. Someone to help you see the next step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8F5EF] p-8 rounded-sm border-l-4 border-[#006666] space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#004C4C]">What Mentorship Focuses On</h3>
              <ul className="space-y-3 text-sm text-[#1C1C1C]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Career Direction &amp; Goal Setting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Overcoming Self-Doubt &amp; Building Confidence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Exploring Purpose &amp; Personal Values</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Personal Development &amp; Self-Awareness</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Career Growth &amp; Next Steps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Accountability &amp; Sustained Momentum</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#004C4C] text-white p-8 rounded-sm space-y-6 flex flex-col justify-between border border-[#D4AF37]/30">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#E2C45C]">Who It Is For</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Whether you are a student, graduate, young professional, job seeker, emerging manager or entrepreneur, you may find yourself at a point where the next step is not obvious. Mentorship begins by understanding where you are, what you are experiencing and where you want to go.
                </p>
              </div>
              <Link
                to="/start-a-conversation"
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center justify-center gap-2 border border-[#E2C45C]"
              >
                <span>Apply for Mentorship</span>
                <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
