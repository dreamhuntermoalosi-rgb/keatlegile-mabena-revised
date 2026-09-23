import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Users, Compass, TrendingUp, BookOpen, Lightbulb, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICES } from '../data/firmData';
import { IMAGES } from '../data/images';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Offerings & Work | Keatlegile Mabena"
        description="Explore Keatlegile Mabena's work across speaking, mentorship, career development, books, and thought leadership."
        canonicalUrl="https://keatlegilemabena.co.za/services"
      />

      <Breadcrumbs items={[{ label: 'Offerings & Work' }]} />

      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Areas of Impact & Offerings"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest text-[#E2C45C] uppercase">
            KEATLEGILE MABENA
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Areas of Impact &amp; Offerings
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Different ways to move forward — through speaking, mentorship, career development, and authorship.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#9a3820] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1C1C1C]">{s.title}</h3>
                  <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">{s.subtitle}</p>
                  <p className="text-sm text-[#1C1C1C]/75 leading-relaxed">{s.shortDescription}</p>
                </div>
                <Link
                  to={s.slug === 'insights' ? '/insights' : `/${s.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors"
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
