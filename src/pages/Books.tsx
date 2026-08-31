import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Books: React.FC = () => {
  return (
    <>
      <SEO
        title="Books & Authorship | Keatlegile Mabena"
        description="Words can become windows. Ideas, stories and reflections that help people understand themselves, their journeys and the possibilities ahead."
        canonicalUrl="https://keatlegilemabena.com/books"
      />

      <Breadcrumbs items={[{ label: 'Books & Authorship' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>BOOKS &amp; AUTHORSHIP</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Words Can Become Windows.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Ideas, stories and reflections that help people understand themselves, their journeys and the possibilities ahead.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
              The Written Work
            </h2>
            <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
              A book can give language to an experience. It can challenge a belief. It can create perspective. It can remind someone that they are not alone. Through authorship, Keatlegile explores ideas around healing, purpose, self-discovery, career success and transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-2 border-[#D4AF37]/30 space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">
                PUBLISHED &amp; FORTHCOMING TITLES
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#004C4C]">
                Books by Keatlegile Mabena
              </h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Explore published books, upcoming manuscript announcements, and purchasing options for readers and institutions.
              </p>
              <Link
                to="/start-a-conversation"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006666] hover:text-[#D4AF37] transition-colors"
              >
                <span>Order or Pre-Register Interest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 bg-[#004C4C] text-white rounded-sm space-y-4 border border-[#D4AF37]/30">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E2C45C]">
                REFLECTIONS &amp; ESSAYS
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Thought Leadership Articles
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Short essays and articles exploring personal growth, resilience, and career advancement.
              </p>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E2C45C] hover:text-white transition-colors"
              >
                <span>Read Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
