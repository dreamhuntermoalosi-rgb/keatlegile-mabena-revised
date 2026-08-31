import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Impact: React.FC = () => {
  return (
    <>
      <SEO
        title="Social Impact & Community | Keatlegile Mabena"
        description="Growth that serves others is the only kind that lasts. Discover Keatlegile Mabena's social impact, youth empowerment, and community initiatives."
        canonicalUrl="https://keatlegilemabena.com/impact"
      />

      <Breadcrumbs items={[{ label: 'Social Impact' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>SOCIAL IMPACT &amp; COMMUNITY</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Growth That Serves Others Is the Only Kind That Lasts.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Keatlegile's journey from Shakung Village fuels a deep commitment to mentoring youth, supporting underprivileged students, and building sustainable community initiatives.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#006666] space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#004C4C]">Youth &amp; Student Outreach</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Visiting schools and universities in rural and township areas to share career guidance, motivation, and practical employability tools.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#D4AF37] space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#004C4C]">Mentorship Initiatives</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Providing structured mentorship pathways for young adults seeking direction, self-worth, and career opportunities.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#006666] space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#004C4C]">Community &amp; Corporate CSR</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Partnering with organizations to design meaningful social responsibility programs that deliver lasting value to communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5EF] text-center border-t border-[#D4AF37]">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
            Partner with Keatlegile for Impact
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            Learn how your institution or business can collaborate on community mentorship and student outreach.
          </p>
          <Link
            to="/start-a-conversation"
            className="px-8 py-3.5 bg-[#004C4C] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#006666] transition-colors inline-flex items-center gap-2"
          >
            <span>Partner for Impact</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
