import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, CheckCircle2, Users, GraduationCap, Target, Building2, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';

export const Mentorship: React.FC = () => {
  return (
    <>
      <SEO
        title="Youth & Student Mentorship | Keatlegile Mabena"
        description="Structured 1-on-1 and cohort mentorship tailored specifically for emerging leaders, university students, and motivated youth."
        canonicalUrl="https://keatlegilemabena.com/mentorship"
      />

      <Breadcrumbs items={[{ label: 'Mentorship' }]} />

      {/* Header Banner */}
      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Mentorship & Guidance"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>YOUTH &amp; STUDENT MENTORSHIP</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
            Structured Guidance for Emerging Leaders.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Targeted 1-on-1 and cohort mentorship helping young adults and university students build discipline, self-efficacy, and purposeful direction.
          </p>
        </div>
      </section>

      {/* Primary Audience Definition */}
      <section className="py-16 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          {/* Target Audience Banner */}
          <div className="bg-[#F8F5EF] p-8 rounded-sm border-t-4 border-[#7e2e19] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9a3820]">
              <Target className="w-4 h-4 text-[#D4AF37]" />
              <span>Primary Audience &amp; Focus Area</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded border border-gray-200 space-y-2">
                <div className="w-8 h-8 bg-[#7e2e19]/10 text-[#7e2e19] rounded flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="font-serif font-bold text-[#7e2e19] text-base">University Students &amp; Scholars</h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                  Undergraduates and postgraduate scholars navigating academic rigor, personal discipline, and post-graduation direction.
                </p>
              </div>

              <div className="bg-white p-5 rounded border border-gray-200 space-y-2">
                <div className="w-8 h-8 bg-[#D4AF37]/20 text-[#7e2e19] rounded flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="font-serif font-bold text-[#7e2e19] text-base">High-Potential Youth &amp; Emerging Leaders</h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                  Young adults seeking structured accountability, value alignment, and emotional resilience to overcome internal constraints.
                </p>
              </div>

              <div className="bg-white p-5 rounded border border-gray-200 space-y-2">
                <div className="w-8 h-8 bg-[#7e2e19]/10 text-[#7e2e19] rounded flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="font-serif font-bold text-[#7e2e19] text-base">Institutional Youth Cohorts</h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                  Schools, youth foundations, and bursary programs seeking customized cohort mentorship frameworks for their beneficiaries.
                </p>
              </div>
            </div>
          </div>

          {/* Offerings Focus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#F8F5EF] p-8 rounded-sm border-l-4 border-[#9a3820] space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#7e2e19]">Core Mentorship Pillars</h3>
              <ul className="space-y-4 text-sm text-[#1C1C1C]/85">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#7e2e19] font-medium">Self-Efficacy &amp; Mindset Transformation</strong>
                    <span className="text-xs text-[#1C1C1C]/70">Dismantling internal fear, self-doubt, and past constraints.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#7e2e19] font-medium">Academic &amp; Personal Discipline</strong>
                    <span className="text-xs text-[#1C1C1C]/70">Establishing consistent routines, focus, and time stewardship.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#7e2e19] font-medium">Ethical Leadership &amp; Values</strong>
                    <span className="text-xs text-[#1C1C1C]/70">Cultivating integrity, community responsibility, and clear personal ethics.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#7e2e19] font-medium">Sustained Accountability</strong>
                    <span className="text-xs text-[#1C1C1C]/70">Structured check-ins to measure progress and maintain forward momentum.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#7e2e19] text-white p-8 rounded-sm space-y-6 flex flex-col justify-between border border-[#D4AF37]/30 shadow-xl">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-[#E2C45C]">Apply for Mentorship</div>
                <h3 className="font-serif text-2xl font-bold text-white">Join the Next Mentorship Cohort</h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Mentorship with Keatlegile Mabena begins with an initial background review to understand your personal goals, current challenges, and growth objectives.
                </p>
                <div className="pt-2 text-xs text-[#E2C45C] font-medium">
                  Available as 1-on-1 virtual sessions or institutional group cohorts.
                </div>
              </div>
              <Link
                to="/book-keatlegile"
                className="px-6 py-4 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center justify-center gap-2 border border-[#E2C45C] shadow-md"
              >
                <span>Submit Mentorship Request</span>
                <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
              </Link>
            </div>
          </div>

          {/* Offerings Audience Delineation Summary */}
          <div className="pt-8 border-t border-gray-200 space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#7e2e19] text-center">
              Clear Audience Alignment Across Keatlegile Mabena's Offerings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded space-y-1">
                <div className="font-bold text-[#7e2e19] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>Keynote Speaking</span>
                </div>
                <div className="text-gray-600 font-medium">Primary Audience:</div>
                <div className="text-gray-500">Corporates, Universities &amp; Summit Organisers</div>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded space-y-1">
                <div className="font-bold text-[#7e2e19] flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                  <span>Mentorship</span>
                </div>
                <div className="text-gray-600 font-medium">Primary Audience:</div>
                <div className="text-gray-500">Youth, University Students &amp; Emerging Leaders</div>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded space-y-1">
                <div className="font-bold text-[#7e2e19] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>Authorship</span>
                </div>
                <div className="text-gray-600 font-medium">Primary Audience:</div>
                <div className="text-gray-500">Individual Readers, Libraries &amp; Book Clubs</div>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded space-y-1">
                <div className="font-bold text-[#7e2e19] flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Workshops</span>
                </div>
                <div className="text-gray-600 font-medium">Primary Audience:</div>
                <div className="text-gray-500">Corporate Teams &amp; Educational Faculties</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
