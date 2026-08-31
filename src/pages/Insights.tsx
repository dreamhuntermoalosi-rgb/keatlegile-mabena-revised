import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const InsightsPage: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <>
      <SEO
        title="Insights & Thoughts for the Journey | Keatlegile Mabena"
        description="Reflections and thought leadership on healing, purpose, self-discovery, mentorship, and transformation."
        canonicalUrl="https://keatlegilemabena.com/insights"
      />

      <Breadcrumbs items={[{ label: 'Insights & Thoughts' }]} />

      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Insights & Thoughts for the Journey"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>THOUGHTS FOR THE JOURNEY</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Insights &amp; Reflections
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Thought leadership, articles, and practical reflections on healing, purpose, and career growth.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F8F5EF] text-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 sm:p-14 rounded-sm border-2 border-[#D4AF37]/30 shadow-xl space-y-6"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#7e2e19]/10 border-2 border-[#D4AF37]/40 flex items-center justify-center text-[#7e2e19]">
              <BookOpen className="w-10 h-10 text-[#7e2e19]" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9a3820] inline-block border-b-2 border-[#D4AF37] pb-1">
                Editorial Publication
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7e2e19]">
                No content here
              </h2>
              <p className="text-lg font-medium text-[#1C1C1C]/90">
                Articles coming soon.
              </p>
              <p className="text-sm text-[#1C1C1C]/70 max-w-md mx-auto leading-relaxed pt-1">
                New essays and deep dives on personal transformation, resilience, career navigation, and leadership by Keatlegile Mabena are currently being curated for publication.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/books"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Published Books</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#E2C45C]" />
              </Link>
              
              <button
                onClick={() =>
                  openWhatsAppModal({
                    title: 'Inquire About Upcoming Articles & Speaking',
                    defaultService: 'Insights & Thought Leadership'
                  })
                }
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current stroke-none" />
                <span>Get Updates on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
