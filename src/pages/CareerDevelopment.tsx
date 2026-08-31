import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const CareerDevelopment: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();
  return (
    <>
      <SEO
        title="Career Development | Keatlegile Mabena"
        description="Your career is part of your story. Practical guidance for navigating career decisions, professional growth and the journey towards career success."
        canonicalUrl="https://keatlegilemabena.com/career-development"
      />

      <Breadcrumbs items={[{ label: 'Career Development' }]} />

      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Career Development"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>CAREER DEVELOPMENT</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Your Career Is Part of Your Story.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Practical guidance for navigating career decisions, professional growth and the journey towards professional success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
              Career Growth Starts With Clarity
            </h2>
            <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
              A career is more than a job. It is a journey of learning, capability, opportunity and growth. Yet navigating that journey can be difficult — especially when you are uncertain about your direction, struggling to articulate your strengths or wondering why your progress does not seem to match your potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#9a3820] space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#7e2e19]">Find Your Direction</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Set clear short and long-term career goals aligned with your personal strengths and values.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#D4AF37] space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#7e2e19]">Articulate Your Strengths</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Learn how to present your value confidently to employers, panels, and professional networks.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#9a3820] space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#7e2e19]">Workplace Confidence</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Build professional resilience, manage workplace dynamics, and position yourself for promotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5EF] text-center border-t-2 border-[#D4AF37]">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
            Take the Next Step in Your Career
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            For individual career coaching or MBN Empire career services (CVs, LinkedIn, interview prep), get in touch today.
          </p>
          <button
            type="button"
            onClick={() =>
              openWhatsAppModal({
                title: 'Career Development & Advisory',
                subtitle: 'Employability, CV Enhancement & Professional Coaching',
                defaultService: 'Career Development & Employability'
              })
            }
            className="px-8 py-3.5 bg-[#7e2e19] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#9a3820] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </button>
        </div>
      </section>
    </>
  );
};
