import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Users, Compass, TrendingUp, BookOpen, Lightbulb, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICES } from '../data/firmData';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Offerings & Work | Keatlegile Mabena"
        description="Explore Keatlegile Mabena's work across speaking, mentorship, career development, books, thought leadership, and MBN Empire."
        canonicalUrl="https://keatlegilemabena.com/services"
      />

      <Breadcrumbs items={[{ label: 'Offerings & Work' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest text-[#E2C45C] uppercase">
            KEATLEGILE MABENA
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Areas of Impact &amp; Offerings
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Different ways to move forward — through speaking, mentorship, career development, authorship, and commercial services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#006666] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1C1C1C]">{s.title}</h3>
                  <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">{s.subtitle}</p>
                  <p className="text-sm text-[#1C1C1C]/75 leading-relaxed">{s.shortDescription}</p>
                </div>
                <Link
                  to={s.slug === 'insights' ? '/insights' : s.slug === 'mbn-empire' ? '/mbn-empire' : `/${s.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006666] hover:text-[#D4AF37] transition-colors"
                >
                  <span>Explore {s.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
