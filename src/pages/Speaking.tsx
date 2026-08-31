import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Users, Mic, Award, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Speaking: React.FC = () => {
  return (
    <>
      <SEO
        title="Speaking & Keynotes | Keatlegile Mabena"
        description="Conversations that move people. Keynote speaking, workshops, and panel sessions on healing, purpose, self-discovery, confidence, and career success."
        keywords={['Keatlegile Mabena Speaking', 'Keynote Speaker South Africa', 'Corporate Speaker', 'Youth Empowerment Speaker']}
        canonicalUrl="https://keatlegilemabena.com/speaking"
      />

      <Breadcrumbs items={[{ label: 'Speaking' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5" />
            <span>SPEAKING &amp; KEYNOTES</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Conversations That Move People.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Meaningful conversations that challenge perspectives, create reflection and inspire purposeful action.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
              Conversations That Create a Shift
            </h2>
            <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
              The right conversation can create a shift — a shift in perspective, a shift in confidence, and a shift in direction. Keatlegile speaks on the issues that sit at the intersection of personal transformation, purpose and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#006666] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#004C4C]">Keynote Addresses</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Inspiring keynote addresses tailored for corporate conferences, institutional gatherings, and youth conventions.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#D4AF37] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#004C4C]">Interactive Workshops</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Hands-on sessions focused on career readiness, confidence building, goal-setting, and purpose discovery.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#006666] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#004C4C]">Panel &amp; Moderation</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Thought-provoking discussions on leadership, mental health, education, and social transformation.
              </p>
            </div>
          </div>

          <div className="bg-[#004C4C] text-white p-8 sm:p-10 rounded-sm space-y-6 border border-[#D4AF37]/30">
            <h3 className="font-serif text-2xl font-bold text-[#E2C45C]">
              Core Speaking Topics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Healing &amp; Personal Transformation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Purpose &amp; Self-Discovery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Confidence &amp; Personal Growth</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Career Success &amp; Direction</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Leadership &amp; Development</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Youth &amp; Empowerment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5EF] text-center border-t border-[#D4AF37]">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
            Book Keatlegile for Your Next Event
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            Enquire about availability, keynote themes, and institutional speaking packages.
          </p>
          <Link
            to="/start-a-conversation"
            className="px-8 py-3.5 bg-[#004C4C] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#006666] transition-colors inline-flex items-center gap-2"
          >
            <span>Invite Keatlegile to Speak</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
