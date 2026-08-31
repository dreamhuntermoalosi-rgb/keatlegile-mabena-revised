import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, CheckCircle2, TrendingUp, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const MbnEmpire: React.FC = () => {
  return (
    <>
      <SEO
        title="MBN Empire | Scalable Professional Services"
        description="MBN Empire is Keatlegile Mabena's commercial ecosystem delivering career services, research & academic consulting, business services, and publishing."
        canonicalUrl="https://keatlegilemabena.com/mbn-empire"
      />

      <Breadcrumbs items={[{ label: 'MBN Empire' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>COMMERCIAL ECOSYSTEM</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            MBN Empire: Scalable Enterprise Solutions.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            From personal vision to scalable enterprise. The commercial platform powering career services, research &amp; academic consulting, business services, and publishing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
              Strategic Business Divisions
            </h2>
            <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
              While Keatlegile Mabena focuses on personal brand elements like speaking, mentorship, and authorship, MBN Empire handles high-execution professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Division 1: Career Services */}
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-l-4 border-[#006666] space-y-4">
              <div className="flex items-center gap-3 text-[#006666]">
                <Briefcase className="w-6 h-6" />
                <h3 className="font-serif text-2xl font-bold text-[#004C4C]">1. Career Services</h3>
              </div>
              <ul className="space-y-2 text-xs text-[#1C1C1C]/80">
                <li className="flex items-center gap-2">▸ Professional CV Writing &amp; Re-design</li>
                <li className="flex items-center gap-2">▸ Cover Letters &amp; Motivation Letters</li>
                <li className="flex items-center gap-2">▸ LinkedIn Profile Optimisation</li>
                <li className="flex items-center gap-2">▸ Mock Interview Preparation</li>
                <li className="flex items-center gap-2">▸ One-on-One Career Coaching</li>
              </ul>
            </div>

            {/* Division 2: Research & Academic Consulting */}
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-l-4 border-[#D4AF37] space-y-4">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <GraduationCap className="w-6 h-6" />
                <h3 className="font-serif text-2xl font-bold text-[#004C4C]">2. Research &amp; Academic Consulting</h3>
              </div>
              <ul className="space-y-2 text-xs text-[#1C1C1C]/80">
                <li className="flex items-center gap-2">▸ Academic Research Support &amp; Consultancy</li>
                <li className="flex items-center gap-2">▸ Methodology &amp; Analytical Guidance</li>
                <li className="flex items-center gap-2">▸ Academic Editing &amp; Proofreading</li>
                <li className="flex items-center gap-2">▸ Research Training Workshops</li>
              </ul>
            </div>

            {/* Division 3: Business Services */}
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-l-4 border-[#D4AF37] space-y-4">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <TrendingUp className="w-6 h-6" />
                <h3 className="font-serif text-2xl font-bold text-[#004C4C]">3. Business Services</h3>
              </div>
              <ul className="space-y-2 text-xs text-[#1C1C1C]/80">
                <li className="flex items-center gap-2">▸ Comprehensive Business Plans</li>
                <li className="flex items-center gap-2">▸ Company Profiles &amp; Pitch Decks</li>
                <li className="flex items-center gap-2">▸ Funding Proposals</li>
                <li className="flex items-center gap-2">▸ Strategic Marketing Plans &amp; Market Research</li>
              </ul>
            </div>

            {/* Division 4: Publishing */}
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-l-4 border-[#006666] space-y-4">
              <div className="flex items-center gap-3 text-[#006666]">
                <BookOpen className="w-6 h-6" />
                <h3 className="font-serif text-2xl font-bold text-[#004C4C]">4. Publishing Services</h3>
              </div>
              <ul className="space-y-2 text-xs text-[#1C1C1C]/80">
                <li className="flex items-center gap-2">▸ End-to-End Book Publishing Guidance</li>
                <li className="flex items-center gap-2">▸ Manuscript Development &amp; Editing</li>
                <li className="flex items-center gap-2">▸ Cover Design &amp; Layout Formatting</li>
                <li className="flex items-center gap-2">▸ Self-Publishing Strategy &amp; Distribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#004C4C] text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-white">
            Engage MBN Empire for Services
          </h2>
          <p className="text-sm text-white/80">
            Send an enquiry to discuss your business plan, academic editing, CV re-design, or publishing requirements.
          </p>
          <Link
            to="/start-a-conversation"
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-widest rounded-sm transition-all inline-flex items-center gap-2 border border-[#E2C45C]"
          >
            <span>Enquire With MBN Empire</span>
            <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
