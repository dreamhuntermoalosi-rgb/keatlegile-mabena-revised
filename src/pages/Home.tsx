import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  Compass,
  BookOpen,
  TrendingUp,
  Users,
  CheckCircle2,
  Quote,
  Star,
  GraduationCap,
  Award
} from 'lucide-react';

import { SEO } from '../components/SEO';
import { FIRM_DETAILS, TRUST_PILLARS } from '../data/firmData';
import { IMAGES } from '../data/images';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const Home: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <>
      <SEO
        title="Keatlegile Mabena | Speaker, Author & Mentor"
        description="Official website of Keatlegile Mabena — Keynote Speaker, Best-Selling Author, and Mentor helping people move towards purpose, clarity, and transformation."
        keywords={[
          'Keatlegile Mabena',
          'Self-Discovery Speaker',
          'Keynote Speaker South Africa',
          'Best-Selling Author',
          'Youth & Professional Mentor',
          'Healing and Purpose',
          'South Africa'
        ]}
        canonicalUrl="https://keatlegilemabena.com/"
        ogImage={IMAGES.heroDesktop}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#290c06] text-white overflow-hidden pt-12 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture className="w-full h-full">
            <source media="(min-width: 640px)" srcSet={IMAGES.heroDesktop} />
            <img
              src={IMAGES.heroMobile}
              alt="Keatlegile Mabena Brand Atmosphere"
              className="w-full h-full object-cover object-top sm:object-[center_top] opacity-90 sm:opacity-95 filter brightness-105 contrast-105 transform-gpu scale-105 -translate-y-4 sm:scale-100 sm:translate-y-0"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#290c06]/85 via-[#290c06]/40 sm:via-[#290c06]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#290c06]/60 via-transparent to-[#290c06]/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-6 sm:pt-8 pb-10 sm:pb-12">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="font-serif tracking-tight text-white space-y-2">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 drop-shadow-md">
                  KEATLEGILE MABENA
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#E2C45C] [text-shadow:_0_2px_10px_rgba(0,0,0,0.85)]">
                  Find Your Direction. <br />
                  Rediscover Your Confidence. <br />
                  Move With Purpose.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#D4AF37] rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-[#F8F5EF]/90 font-normal leading-relaxed max-w-2xl"
            >
              Helping people heal, discover purpose, build confidence and move towards meaningful personal and career growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Link
                to="/mentorship"
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 group border border-[#E2C45C]"
              >
                <span>Explore Mentorship</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#1C1C1C]" />
              </Link>

              <Link
                to="/books"
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-white/30 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Discover His Books</span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-white/50 hover:text-[#D4AF37] transition-colors cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
        >
          <span className="text-[10px] font-semibold tracking-widest uppercase mb-1">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </motion.div>
      </section>

      {/* Hero Strip */}
      <section className="bg-[#7e2e19] text-white py-5 sm:py-6 border-y-2 border-[#D4AF37] relative z-20 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center divide-x-2 divide-[#D4AF37]/30">
            {['Speaker', 'Author', 'Mentor'].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="px-2 py-1"
              >
                <span className="font-serif font-bold text-xs sm:text-base tracking-wider text-[#E2C45C] uppercase">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. BRIEF PERSONAL INTRODUCTION ================= */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#9a3820]" />
                <span>ABOUT KEATLEGILE MABENA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight">
                A Voice for Purpose, Clarity &amp; Leadership.
              </h2>

              <div className="space-y-4 text-base text-[#1C1C1C]/80 leading-relaxed">
                <p>
                  Keatlegile Mabena is a South African keynote speaker, published author, and youth mentor dedicated to helping people unlock their potential and navigate career and life transitions.
                </p>
                <p>
                  Holding a <strong>Master of Social Sciences (Cum Laude)</strong> and accredited as an NQF Assessor and Moderator, Keatlegile bridges rigorous academic understanding with authentic lived experience.
                </p>
                <p className="font-medium text-[#7e2e19] pt-1">
                  Whether addressing corporate stages, mentoring emerging leaders, or writing for readers seeking direction, his mission is simple: to help you move from uncertainty towards confidence and purposeful action.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="px-7 py-3.5 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Read Full Biography</span>
                  <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
                </Link>
              </div>
            </motion.div>

            {/* Quick Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm shadow-2xl border-l-4 border-[#D4AF37] space-y-6 relative overflow-hidden">
                <div className="text-xs font-bold tracking-widest text-[#E2C45C] uppercase">
                  BACKGROUND AT A GLANCE
                </div>
                <div className="space-y-4 divide-y divide-white/10 text-sm">
                  <div className="pt-2 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#E2C45C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Master of Social Sciences (Cum Laude)</div>
                      <div className="text-xs text-white/70">Population and Sustainable Development, NWU</div>
                    </div>
                  </div>
                  <div className="pt-3 flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#E2C45C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Published Author</div>
                      <div className="text-xs text-white/70">Breaking the Chains</div>
                    </div>
                  </div>
                  <div className="pt-3 flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#E2C45C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Accredited Assessor &amp; Moderator</div>
                      <div className="text-xs text-white/70">NQF Level 5 Assessor &amp; NQF Level 6 Moderator</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 3. SPEAKER, AUTHOR & MENTOR OFFERINGS ================= */}
      <section className="py-20 bg-[#F8F5EF] border-y-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              AREAS OF ENGAGEMENT
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C]">
              Core Offerings
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Speaking */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#9a3820] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#7e2e19]/10 rounded-sm flex items-center justify-center text-[#9a3820]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">
                  KEYNOTE SPEAKING
                </h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                  High-impact addresses and workshops for corporate stages, conferences, and institutional leadership events.
                </p>
              </div>
              <Link
                to="/speaking"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors pt-2"
              >
                <span>Book Keatlegile to Speak</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Mentorship */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#D4AF37] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center text-[#A88616]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">
                  MENTORSHIP
                </h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                  Personalised 1-on-1 and cohort guidance for emerging leaders, students, and professionals seeking clarity.
                </p>
              </div>
              <Link
                to="/mentorship"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors pt-2"
              >
                <span>Explore Mentorship</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Books & Writing */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#9a3820] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#7e2e19]/10 rounded-sm flex items-center justify-center text-[#9a3820]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">
                  BOOKS &amp; AUTHORSHIP
                </h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                  Author of <em>Breaking the Chains</em> and transformational writings on personal growth.
                </p>
              </div>
              <Link
                to="/books"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors pt-2"
              >
                <span>Discover His Books</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 4. CORE PILLARS ================= */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              GUIDING PRINCIPLES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C]">
              Authentic &amp; Purposeful Guidance.
            </h2>
            <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
              Keatlegile's strength lies in connecting lived experience, authorship, and practical mentorship to support personal transformation and career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F8F5EF] rounded-sm border border-[#D4AF37]/20 space-y-3 hover:border-[#D4AF37] transition-all"
              >
                <div className="text-xs font-extrabold tracking-widest text-[#9a3820] uppercase">
                  {pillar.title}
                </div>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. FEATURED BOOK ================= */}
      <section className="py-20 bg-[#F8F5EF] border-t-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Featured Book Banner */}
          <div className="bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm border-2 border-[#D4AF37] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#D4AF37] text-[#1C1C1C] px-2.5 py-1 rounded-xs">
                FEATURED BOOK
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Breaking the Chains: Bailing Out Imprisoned Potential
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
                A transformative read addressing the internal fear, self-doubt, and past experiences that prevent people from stepping into their full capability.
              </p>
              <div className="pt-2">
                <Link
                  to="/books"
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Discover His Books</span>
                  <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 p-6 rounded-sm border border-white/20 text-center space-y-3">
              <div className="text-xl font-serif font-bold text-[#E2C45C]">Breaking the Chains</div>
              <div className="text-xs font-medium text-white/90">Published 2019 • 126 Pages</div>
              <div className="text-[11px] text-white/60 italic font-mono">ISBN: 9780620840668</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. FINAL BOOKING CALL TO ACTION ================= */}
      <section className="py-20 bg-[#7e2e19] text-white border-t-2 border-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Ready to Begin Your Next Chapter?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Whether you are seeking mentorship or ordering books, take the first step today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/mentorship"
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 group border border-[#E2C45C]"
            >
              <span>Explore Mentorship</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#1C1C1C]" />
            </Link>
            <Link
              to="/books"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-white/30 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
            >
              <span>Discover His Books</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
