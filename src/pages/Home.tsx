import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Compass,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Building2,
  Users,
  CheckCircle2,
  Shield,
  Target
} from 'lucide-react';

import { SEO } from '../components/SEO';
import { FIRM_DETAILS, WHO_THIS_IS_FOR, TRANSFORMATION_JOURNEY, TRUST_PILLARS } from '../data/firmData';
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#290c06] text-white overflow-hidden pt-12 pb-20">
        {/* Responsive Background Image (Mobile & Desktop per user request) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture className="w-full h-full">
            <source media="(min-width: 640px)" srcSet={IMAGES.heroDesktop} />
            <img
              src={IMAGES.heroMobile}
              alt="Keatlegile Mabena Brand Atmosphere"
              className="w-full h-full object-cover object-top sm:object-[center_top] opacity-80 sm:opacity-85 filter brightness-105 contrast-105 transform-gpu scale-110 -translate-y-8 sm:scale-100 sm:translate-y-0"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#290c06]/95 via-[#290c06]/70 sm:via-[#290c06]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#290c06]/85 via-transparent to-[#290c06]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.15),transparent_50%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-6 sm:pt-8 pb-10 sm:pb-12">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            {/* Top Eyebrow Tagline - Clean text without background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden sm:flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#E2C45C]"
            >
              <span className="text-[#D4AF37] font-bold text-sm sm:text-base shrink-0">|</span>
              <span>Speaker | Author | Mentor</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="font-serif tracking-tight text-white space-y-2">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
                  KEATLEGILE MABENA
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E2C45C] via-[#D4AF37] to-[#A88616]">
                  Find Your Direction. <br />
                  Rediscover Your Confidence. <br />
                  Move With Purpose.
                </span>
              </h1>
            </motion.div>

            {/* Animated Gold Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#D4AF37] rounded-full"
            />

            {/* Supporting Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-[#F8F5EF]/90 font-normal leading-relaxed max-w-2xl"
            >
              Helping people heal, discover purpose, build confidence and move towards meaningful personal and career growth.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                type="button"
                onClick={() =>
                  openWhatsAppModal({
                    title: 'Start a Conversation',
                    subtitle: 'Connect directly with Keatlegile Mabena',
                    defaultService: 'Speaking & Keynote Addresses'
                  })
                }
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 group border border-[#E2C45C] cursor-pointer"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#1C1C1C]" />
              </button>

              <Link
                to="/about"
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-white/30 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Keatlegile's Work</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
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

      {/* ================= HERO BANNER STRIP ================= */}
      <section className="bg-[#7e2e19] text-white py-5 sm:py-6 border-y-2 border-[#D4AF37] relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center divide-x-2 divide-[#D4AF37]/20">
            {['Healing', 'Self-Discovery', 'Purpose', 'Confidence', 'Mentorship', 'Transformation'].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="px-2 py-1"
              >
                <span className="font-serif font-bold text-xs sm:text-sm tracking-wider text-[#E2C45C] uppercase">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#9a3820]" />
                <span>INTRODUCTION</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight">
                You Are Capable of More Than Where You Are Right Now.
              </h2>

              <div className="space-y-4 text-base text-[#1C1C1C]/80 leading-relaxed">
                <p>There are seasons when life feels uncertain.</p>
                <p>You may know that you want more, but not know what "more" looks like.</p>
                <p>You may have ambition, but feel stuck.</p>
                <p>You may be working hard while quietly wondering whether you are moving in the right direction.</p>
                <p>You may simply be trying to find yourself again after a difficult season.</p>
                <p className="font-medium text-[#7e2e19] pt-2">
                  Keatlegile Mabena's work exists for people navigating these moments — helping them move from pain and uncertainty towards healing, clarity, confidence and purposeful action.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="px-7 py-3.5 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Discover His Story</span>
                  <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
                </Link>
              </div>
            </motion.div>

            {/* Visual Card / Highlight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm shadow-2xl border-l-4 border-[#D4AF37] space-y-6 relative overflow-hidden">
                <div className="text-xs font-bold tracking-widest text-[#E2C45C] uppercase">
                  THE BRAND PROMISE
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                  From Where You Are to Where You Can Go.
                </h3>
                <div className="space-y-3 text-sm text-white/80 leading-relaxed">
                  <p>Growth is not always about doing more.</p>
                  <p>Sometimes it begins with understanding yourself more deeply.</p>
                  <p>Sometimes it requires healing.</p>
                  <p>Sometimes it requires finding the courage to make a different decision.</p>
                  <p>And sometimes it simply requires having the right person, perspective or conversation at the right time.</p>
                </div>
                <p className="text-xs text-[#E2C45C] italic pt-2 border-t-2 border-white/10">
                  Through speaking, mentorship, books and thought leadership, Keatlegile creates spaces for people to reflect, grow, make sense of their journeys and move forward with greater intention.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHAT KEATLEGILE DOES ================= */}
      <section className="py-20 bg-[#F8F5EF] border-y-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              WHAT KEATLEGILE DOES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C]">
              Different Ways to Move Forward
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Speaking */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#9a3820] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#7e2e19]/10 rounded-sm flex items-center justify-center text-[#9a3820]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1C1C]">
                  SPEAKING
                </h3>
                <p className="text-sm text-[#1C1C1C]/75 leading-relaxed">
                  Meaningful conversations that challenge perspectives, create reflection and inspire purposeful action.
                </p>
              </div>
              <Link
                to="/speaking"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors"
              >
                <span>Explore Speaking</span>
                <ArrowRight className="w-4 h-4" />
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
                <h3 className="font-serif text-2xl font-bold text-[#1C1C1C]">
                  MENTORSHIP
                </h3>
                <p className="text-sm text-[#1C1C1C]/75 leading-relaxed">
                  Personalised support for people seeking clarity, confidence, direction and meaningful growth.
                </p>
              </div>
              <Link
                to="/mentorship"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors"
              >
                <span>Explore Mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Career Development */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#9a3820] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#7e2e19]/10 rounded-sm flex items-center justify-center text-[#9a3820]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1C1C]">
                  CAREER DEVELOPMENT
                </h3>
                <p className="text-sm text-[#1C1C1C]/75 leading-relaxed">
                  Practical guidance for navigating career decisions, professional growth and the journey towards career success.
                </p>
              </div>
              <Link
                to="/career-development"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors"
              >
                <span>Explore Career Development</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Books & Writing */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#D4AF37] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center text-[#A88616]">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F8F5EF] text-[#7e2e19] px-2 py-0.5 rounded border border-[#D4AF37]/30">
                    7,000+ Copies Sold
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1C1C]">
                  BOOKS &amp; WRITING
                </h3>
                <p className="text-sm text-[#1C1C1C]/75 leading-relaxed">
                  Author of <em>Breaking the Chains</em> (2019) and upcoming manuscripts. Ideas, stories, and frameworks for healing and purpose.
                </p>
              </div>
              <Link
                to="/books"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors"
              >
                <span>Explore Books &amp; Writing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Thought Leadership */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#9a3820] flex flex-col justify-between space-y-6 transition-all md:col-span-2 lg:col-span-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#7e2e19]/10 rounded-sm flex items-center justify-center text-[#9a3820]">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1C1C]">
                  THOUGHT LEADERSHIP
                </h3>
                <p className="text-sm text-[#1C1C1C]/75 leading-relaxed">
                  Conversations and perspectives around healing, purpose, self-discovery, career success and transformation.
                </p>
              </div>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors"
              >
                <span>Explore Insights</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
                WHO THIS IS FOR
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C]">
                For People Who Know There Is More.
              </h2>
              <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
                Keatlegile primarily works with individuals seeking healing, purpose, confidence, career growth and personal development, as well as institutions seeking speaking and development programmes.
              </p>
              <div className="p-4 bg-[#F8F5EF] border-l-4 border-[#D4AF37] rounded-sm text-sm font-medium text-[#7e2e19]">
                You do not need to have everything figured out before you begin.
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm shadow-xl space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#E2C45C] border-b-2 border-white/10 pb-3">
                You may be...
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90">
                {WHO_THIS_IS_FOR.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 py-1">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE TRANSFORMATION ================= */}
      <section className="py-20 bg-[#42160c] text-white relative overflow-hidden border-y-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-bold tracking-widest text-[#E2C45C] uppercase">
              THE TRANSFORMATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              What Could Change?
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {/* FROM */}
            <div className="bg-white/5 p-8 rounded-sm border border-white/10 space-y-6">
              <div className="text-sm font-bold tracking-widest text-red-300 uppercase border-b-2 border-white/10 pb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span>FROM</span>
              </div>
              <ul className="space-y-3 text-base text-white/80">
                {TRANSFORMATION_JOURNEY.from.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-red-400">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TOWARDS */}
            <div className="bg-[#7e2e19] p-8 rounded-sm border-2 border-[#D4AF37] space-y-6 shadow-2xl">
              <div className="text-sm font-bold tracking-widest text-[#E2C45C] uppercase border-b-2 border-[#D4AF37]/30 pb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E2C45C]" />
                <span>TOWARDS</span>
              </div>
              <ul className="space-y-3 text-base text-white font-medium">
                {TRANSFORMATION_JOURNEY.towards.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#E2C45C]">
                    <span>✓</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-xs text-white/60 pt-8 italic">
            This is the central transformation described in the strategy.
          </p>
        </div>
      </section>

      {/* ================= WHY KEATLEGILE ================= */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              WHY KEATLEGILE
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C]">
              A Different Kind of Conversation.
            </h2>
            <p className="text-base text-[#1C1C1C]/80 leading-relaxed">
              Keatlegile's advantage lies in bringing together lived experience, academic credibility, authorship, mentorship and community impact in a way that is authentic, practical and relatable.
            </p>
            <p className="text-sm font-semibold text-[#7e2e19]">
              The result is a perspective that connects human transformation with practical progress.
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

      {/* ================= FEATURED INSIGHTS ================= */}
      <section className="py-20 bg-[#F8F5EF] border-t-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
                FEATURED INSIGHTS
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
                Thoughts for the Journey.
              </h2>
              <p className="text-sm text-[#1C1C1C]/70">
                Sometimes one idea can change the way you see your situation.
              </p>
            </div>
            <Link
              to="/insights"
              className="px-6 py-3 bg-[#7e2e19] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#9a3820] transition-colors inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                topic: 'Career',
                title: 'Your Career Is More Than a Job.',
                desc: 'Career success is not simply about securing a position. It is about understanding your strengths, making intentional choices and continuing to grow.'
              },
              {
                topic: 'Purpose',
                title: 'What Are You Building Your Life Around?',
                desc: 'Purpose begins with asking better questions about who you are and what matters to you.'
              },
              {
                topic: 'Confidence',
                title: 'When Your Potential and Your Confidence Don’t Match.',
                desc: 'Sometimes the person you could become is waiting for you to believe that becoming is possible.'
              },
              {
                topic: 'Growth',
                title: 'You Are Allowed to Outgrow Your Old Direction.',
                desc: 'Growth can mean changing your mind, changing direction and choosing a path that better reflects who you are becoming.'
              }
            ].map((art, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-sm shadow-sm border border-black/5 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">
                    {art.topic}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1C1C1C]">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <Link
                  to="/insights"
                  className="text-xs font-bold text-[#9a3820] hover:underline inline-flex items-center gap-1 pt-2"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#1C1C1C]/50 italic">
            These are proposed editorial topics for inspiration and reflections.
          </p>
        </div>
      </section>

      {/* ================= MBN EMPIRE SECTION ================= */}
      <section className="py-20 bg-[#7e2e19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-bold tracking-widest text-[#E2C45C] uppercase">
                MBN EMPIRE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                A Personal Vision. A Growing Enterprise.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed">
                <p>
                  Keatlegile Mabena is distinct from, but strategically connected to, <strong>MBN Empire</strong>, the commercial group through which scalable professional businesses will be developed.
                </p>
                <p>
                  While Keatlegile's personal brand focuses on speaking, authorship, and mentorship, MBN Empire is being developed as the commercial platform for scalable businesses in career services, research and academic consulting, business services and publishing.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/mbn-empire"
                  className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center gap-2 border border-[#E2C45C]"
                >
                  <span>Explore MBN Empire</span>
                  <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 p-8 rounded-sm border border-white/20 space-y-4">
              <Building2 className="w-10 h-10 text-[#E2C45C]" />
              <h3 className="font-serif text-xl font-bold text-white">
                Commercial Divisions
              </h3>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <span className="text-[#E2C45C]">▸</span> Career Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E2C45C]">▸</span> Research &amp; Academic Consulting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E2C45C]">▸</span> Business Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E2C45C]">▸</span> Publishing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-white text-[#1C1C1C] border-t-2 border-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1C1C]">
            Your Next Chapter Can Begin Here.
          </h2>
          <div className="space-y-2 text-base text-[#1C1C1C]/80">
            <p>You don't have to know every step.</p>
            <p className="font-semibold text-[#7e2e19]">You just need to be willing to take the next one.</p>
          </div>
          <div className="pt-4">
            <button
              type="button"
              onClick={() =>
                openWhatsAppModal({
                  title: 'Start a Conversation',
                  subtitle: 'Take the next step with Keatlegile Mabena',
                  defaultService: 'General Direct Enquiry'
                })
              }
              className="px-9 py-4 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all inline-flex items-center gap-3 cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
