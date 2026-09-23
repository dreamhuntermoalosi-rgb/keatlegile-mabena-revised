import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  Compass,
  BookOpen,
  Users,
  GraduationCap,
  Award,
  Quote,
  Mic,
  Sparkles,
  ExternalLink
} from 'lucide-react';

import { SEO } from '../components/SEO';
import { FIRM_DETAILS, CREDIBILITY, BOOKS } from '../data/firmData';
import { ALL_TESTIMONIALS } from '../data/testimonialsData';
import { IMAGES } from '../data/images';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Compass,
  Mic
};

export const Home: React.FC = () => {
  // Featured book = the one flagged as featured (has a real cover image)
  const featuredBook = BOOKS.find((b) => b.featured) ?? BOOKS[0];

  // Subset of testimonials for the homepage carousel
  const carouselTestimonials = ALL_TESTIMONIALS.slice(0, 6);
  const carouselTriple = [...carouselTestimonials, ...carouselTestimonials, ...carouselTestimonials];

  return (
    <>
      <SEO
        title="Keatlegile Mabena | Speaker, Author & Mentor"
        description="Keatlegile Mabena is a Speaker, Author and Mentor helping people move towards healing, clarity, confidence and purposeful action."
        keywords={[
          'Keatlegile Mabena',
          'Speaker',
          'Author',
          'Mentor',
          'Keynote Speaker South Africa',
          'Healing and Purpose',
          'Mentorship'
        ]}
        canonicalUrl="https://keatlegilemabena.co.za/"
        ogImage={IMAGES.heroDesktop}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#290c06] text-white [clip-path:inset(0)] pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-24">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <picture className="w-full h-full">
            <source media="(min-width: 640px)" srcSet={IMAGES.heroDesktop} />
            <img
              src={IMAGES.heroMobile}
              alt="Keatlegile Mabena Brand Atmosphere"
              className="w-full h-full object-cover object-[center_12%] sm:object-[center_15%] opacity-90 sm:opacity-95 filter brightness-105 contrast-105"
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
                  Speaker &bull; Author &bull; Mentor
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
              className="text-sm sm:text-base text-[#F8F5EF]/85 font-normal leading-relaxed max-w-xl"
            >
              Helping people move from pain and uncertainty toward healing, clarity, confidence and purposeful action.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Link
                to="/book-keatlegile"
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 group border border-[#E2C45C]"
              >
                <span>Book Keatlegile to Speak</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#1C1C1C]" />
              </Link>

              <Link
                to="/mentorship"
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-white/30 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Mentorship</span>
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

      {/* ================= 2. SPEAKER / AUTHOR / MENTOR STRIP (functional links) ================= */}
      <section className="bg-[#7e2e19] text-white py-5 sm:py-6 border-y-2 border-[#D4AF37] relative z-20 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center divide-x-2 divide-[#D4AF37]/30">
            {[
              { label: 'Speaker', path: '/speaking' },
              { label: 'Author', path: '/books' },
              { label: 'Mentor', path: '/mentorship' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="px-2 py-1"
              >
                <Link
                  to={item.path}
                  className="font-serif font-bold text-xs sm:text-base tracking-wider text-[#E2C45C] uppercase hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. BRIEF PERSONAL INTRODUCTION + BACKGROUND AT A GLANCE ================= */}
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

              <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#1C1C1C] leading-tight">
                From Shakung Village to a Life of Service.
              </h2>

              {/* Journey intro (does NOT repeat qualifications) */}
              <div className="space-y-4 text-base text-[#1C1C1C]/80 leading-relaxed">
                <p>
                  Keatlegile Mabena is a South African speaker, author and mentor. His work grew from lived experience, education and a desire to help others rise beyond difficult beginnings.
                </p>
                <p>
                  Growing up in Shakung Village in North-West shaped an early understanding of resilience, possibility and transformation. He holds a Master of Social Sciences (Cum Laude) from the North-West University and is a member of the Population Association of Southern Africa (PASA).
                </p>
                <p className="font-medium text-[#7e2e19] pt-1">
                  What makes his perspective distinctive is the combination of lived experience, academic credibility and authorship — connecting human transformation with practical guidance.
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

            {/* Quick Profile Card — Background at a Glance (3 real credential highlights) */}
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
                  {CREDIBILITY.highlights.map((item, idx) => {
                    const Icon = iconMap[item.icon] ?? Award;
                    return (
                      <div key={idx} className="pt-2 flex items-start gap-3">
                        <Icon className="w-5 h-5 text-[#E2C45C] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="text-xs text-white/70">{item.detail}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 4. CORE OFFERINGS — Speaker, Author, Mentor ================= */}
      <section className="py-20 bg-[#F8F5EF] border-y-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              CORE OFFERINGS
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#1C1C1C]">
              What I Do, Who It Is For &amp; The Outcome
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
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">
                  KEYNOTE SPEAKING
                </h3>
                <div className="space-y-2 text-xs text-[#1C1C1C]/75 leading-relaxed">
                  <p><span className="font-semibold text-[#7e2e19]">What:</span> Keynote addresses and talks for conferences, institutions and gatherings.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Who:</span> Organisations, institutions and audiences seeking honest, reflective conversation.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Outcome:</span> A shift in perspective, renewed confidence and practical steps to act on.</p>
                </div>
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
                <div className="space-y-2 text-xs text-[#1C1C1C]/75 leading-relaxed">
                  <p><span className="font-semibold text-[#7e2e19]">What:</span> One-on-one and cohort guidance for people navigating their next chapter.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Who:</span> Students, graduates and young professionals seeking personal growth, emotional healing, confidence, purpose and career direction.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Outcome:</span> Clearer direction, steady support and greater confidence to move forward.</p>
                </div>
              </div>
              <Link
                to="/mentorship"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors pt-2"
              >
                <span>Apply for Mentorship</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Books & Authorship */}
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
                <div className="space-y-2 text-xs text-[#1C1C1C]/75 leading-relaxed">
                  <p><span className="font-semibold text-[#7e2e19]">What:</span> Published books offering language for deep personal experiences.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Who:</span> Readers seeking healing, direction and personal growth.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Outcome:</span> New perspectives and reflections that translate into meaningful next steps.</p>
                </div>
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

      {/* ================= 5. CREDIBILITY & IMPACT (replaces Guiding Principles) ================= */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              CREDIBILITY &amp; IMPACT
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#1C1C1C]">
              Evidence of the Work
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CREDIBILITY.highlights.map((item, idx) => {
              const Icon = iconMap[item.icon] ?? Award;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-[#F8F5EF] rounded-sm border border-[#D4AF37]/20 space-y-3 hover:border-[#D4AF37] transition-all"
                >
                  <div className="w-10 h-10 bg-[#7e2e19]/10 rounded-sm flex items-center justify-center text-[#9a3820]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-serif text-base font-bold text-[#1C1C1C]">{item.title}</div>
                  <p className="text-xs text-[#1C1C1C]/70 leading-relaxed">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <p className="text-xs text-[#1C1C1C]/50 italic max-w-2xl">{CREDIBILITY.note}</p>
        </div>
      </section>

      {/* ================= 6. FEATURED BOOK ================= */}
      <section className="py-20 bg-[#F8F5EF] border-t-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm border-2 border-[#D4AF37] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Book cover image */}
            {featuredBook.coverImage && (
              <div className="lg:col-span-4 flex justify-center">
                <img
                  src={featuredBook.coverImage}
                  alt={`${featuredBook.title} — book cover`}
                  className="w-48 sm:w-56 h-auto object-contain rounded-sm shadow-2xl border-2 border-[#D4AF37]"
                />
              </div>
            )}

            <div className={featuredBook.coverImage ? "lg:col-span-8 space-y-4" : "lg:col-span-12 space-y-4"}>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#D4AF37] text-[#1C1C1C] px-2.5 py-1 rounded-xs">
                FEATURED BOOK
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {featuredBook.title}
              </h3>
              {featuredBook.subtitle && (
                <p className="font-serif text-base sm:text-lg text-[#E2C45C] italic leading-snug">
                  {featuredBook.subtitle}
                </p>
              )}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
                Keatlegile Mabena's {featuredBook.id === 'the-weight-i-did-not-choose' ? 'latest' : ''} published work — {featuredBook.subtitle.toLowerCase()}.
              </p>

              {/* Purchasing information */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {featuredBook.priceLabel && (
                  <span className="text-xl font-serif font-bold text-[#E2C45C]">{featuredBook.priceLabel}</span>
                )}
                <a
                  href={featuredBook.orderUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center gap-2"
                >
                  <span>{featuredBook.orderLabel}</span>
                  <ExternalLink className="w-4 h-4 text-[#1C1C1C]" />
                </a>
              </div>

              {/* Metadata where available */}
              {(featuredBook.year || featuredBook.pages || featuredBook.isbn) && (
                <div className="pt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-white/60 border-t border-white/10">
                  {featuredBook.year && <span>Published {featuredBook.year}</span>}
                  {featuredBook.pages && <span>{featuredBook.pages} Pages</span>}
                  {featuredBook.isbn && <span className="font-mono">ISBN: {featuredBook.isbn}</span>}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. TESTIMONIALS CAROUSEL (preview + link to full page) ================= */}
      <section className="py-20 bg-white text-[#1C1C1C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              TESTIMONIALS
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#1C1C1C]">
              Words From Readers &amp; Audiences
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          {/* Continuous marquee */}
          <div className="relative w-full overflow-hidden pause-on-hover py-4">
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-slow flex gap-6">
              {carouselTriple.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="w-[300px] sm:w-[360px] shrink-0 bg-[#F8F5EF] p-6 rounded-sm border-t-4 border-[#D4AF37] border-x border-b border-[#D4AF37]/20 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <Quote className="w-5 h-5 text-[#D4AF37]/40 mb-3" />
                    <p className="text-xs sm:text-sm text-[#1C1C1C]/80 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#D4AF37]/20 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#7e2e19] text-[#E2C45C] flex items-center justify-center font-bold text-xs uppercase">
                      {t.name.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-[#1C1C1C]">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all duration-300"
            >
              <span>Read More Testimonials</span>
              <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 8. FINAL CALL TO ACTION ================= */}
      <section className="py-20 bg-[#7e2e19] text-white border-t-2 border-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-white">
            Engage Keatlegile Mabena
          </h2>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/book-keatlegile"
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 group border border-[#E2C45C]"
            >
              <span>Book Keatlegile to Speak</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#1C1C1C]" />
            </Link>
            <Link
              to="/mentorship"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-white/30 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for Mentorship</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
