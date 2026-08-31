import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const CareerDevelopment: React.FC = () => {
  return (
    <>
      <SEO
        title="Career Development | Keatlegile Mabena"
        description="Your career is part of your story. Practical guidance for navigating career decisions, professional growth and the journey towards career success."
        canonicalUrl="https://keatlegilemabena.com/career-development"
      />

      <Breadcrumbs items={[{ label: 'Career Development' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>CAREER DEVELOPMENT</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Your Career Is Part of Your Story.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Practical guidance for navigating career decisions, professional growth and the journey towards career success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
              Career Success Starts With Clarity
            </h2>
            <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
              A career is more than a job. It is a journey of learning, capability, opportunity and growth. Yet navigating that journey can be difficult — especially when you are uncertain about your direction, struggling to articulate your strengths or wondering why your progress does not seem to match your potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#006666] space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#004C4C]">Find Your Direction</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Set clear short and long-term career goals aligned with your personal strengths and values.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#D4AF37] space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#004C4C]">Articulate Your Strengths</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Learn how to present your value confidently to employers, panels, and professional networks.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#006666] space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#004C4C]">Workplace Confidence</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Build professional resilience, manage workplace dynamics, and position yourself for promotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5EF] text-center border-t border-[#D4AF37]">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
            Take the Next Step in Your Career
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            For individual career coaching or MBN Empire career services (CVs, LinkedIn, interview prep), get in touch today.
          </p>
          <Link
            to="/start-a-conversation"
            className="px-8 py-3.5 bg-[#004C4C] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#006666] transition-colors inline-flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
