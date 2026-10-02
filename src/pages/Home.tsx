import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  BookOpen,
  Users,
  GraduationCap,
  Award,
  Quote,
  Mic,
  Sparkles,
  ExternalLink,
  ShoppingBag,
  Newspaper
} from 'lucide-react';

import { SEO } from '../components/SEO';
import { FIRM_DETAILS, AT_A_GLANCE, BOOKS } from '../data/firmData';
import { ALL_TESTIMONIALS } from '../data/testimonialsData';
import { MEDIA_PREVIEW } from '../data/mediaData';
import { IMAGES } from '../data/images';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Compass,
  Mic
};

/* Featured book card — mirrors the Books page shop card style (cream backdrop,
   full-bleed cover, auto-sliding carousel with pagination dots, white body) */
const FeaturedBookCard: React.FC<{ book: typeof BOOKS[number] }> = ({ book }) => {
  const images = book.galleryImages.length > 0 ? book.galleryImages : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const hasGallery = images.length > 1;

  useEffect(() => {
    if (!hasGallery) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [hasGallery, images.length]);

  const activeImage = images[activeIndex] ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-sm shadow-md border border-[#D4AF37]/20 overflow-hidden flex flex-col max-w-md mx-auto w-full"
    >
      {/* Cover image area — cream backdrop, auto-sliding carousel */}
      <div className="bg-[#F8F5EF] flex items-center justify-center relative border-b border-[#D4AF37]/20 overflow-hidden">
        {book.launchDate && (
          <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-[#D4AF37] text-[#1C1C1C] px-2.5 py-1 rounded z-20 shadow-md">
            Launching {book.launchDate}
          </span>
        )}
        {book.badge && (
          <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-[#D4AF37] text-[#1C1C1C] px-2.5 py-1 rounded z-20 shadow-md">
            {book.badge}
          </span>
        )}
        {activeImage ? (
          <>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${book.title} — image ${i + 1}`}
                className="w-full h-auto max-h-[60vh] object-cover absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
                aria-hidden={i !== activeIndex}
              />
            ))}
            <img
              src={images[activeIndex]}
              alt=""
              aria-hidden="true"
              className="w-full h-auto max-h-[60vh] object-cover invisible pointer-events-none select-none"
            />
          </>
        ) : (
          <div className="w-full h-64 flex items-center justify-center text-center bg-[#F8F5EF] p-6">
            <span className="text-xs text-[#9a3820] uppercase tracking-wider font-semibold">
              Cover image coming soon
            </span>
          </div>
        )}

        {/* Pagination dots */}
        {hasGallery && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-7 sm:p-8 space-y-4 flex-1 flex flex-col">
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-bold text-[#1C1C1C] leading-tight">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="font-serif text-base text-[#7e2e19] italic leading-snug">
              {book.subtitle}
            </p>
          )}
        </div>

        <div className="text-xs text-[#1C1C1C]/60">
          by <span className="font-bold text-[#1C1C1C]">{book.author}</span>
        </div>

        {/* Description (if provided) */}
        {book.description && (
          <p className="text-sm text-[#1C1C1C]/80 leading-relaxed">
            {book.description}
          </p>
        )}

        {/* Price + Buy button */}
        <div className="mt-auto pt-5 space-y-4">
          {book.priceLabel && (
            <div className="text-2xl font-serif font-bold text-[#7e2e19]">{book.priceLabel}</div>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {book.orderUrl ? (
              <a
                href={book.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center justify-center gap-2 border border-[#E2C45C] shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-[#1C1C1C]" />
                <span>{book.orderLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#1C1C1C]" />
              </a>
            ) : (
              <span
                className="flex-1 px-6 py-3.5 bg-gray-200 text-gray-500 font-bold text-xs uppercase tracking-widest rounded-sm inline-flex items-center justify-center gap-2 border border-gray-300 cursor-not-allowed"
              >
                <span>{book.orderLabel}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* Media carousel — smooth auto-advancing, 3 cards per view on desktop,
   2 on tablet, 1 on mobile. Pauses on hover. */
const MediaCarousel: React.FC = () => {
  const items = MEDIA_PREVIEW;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Number of cards per view by breakpoint (tracked via window width)
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, items.length - perView);

  // Auto-advance every 4.5s, pause on hover
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  // Clamp index if perView changes
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const go = (dir: -1 | 1) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  };

  return (
    <section className="py-20 bg-white text-[#1C1C1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              SPEAKING ENGAGEMENTS, MEDIA FEATURES &amp; RECOGNITION
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#1C1C1C]">
              In the public eye
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/40 text-[#7e2e19] hover:bg-[#7e2e19] hover:text-white transition-colors flex items-center justify-center"
              aria-label="Previous media"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/40 text-[#7e2e19] hover:bg-[#7e2e19] hover:text-white transition-colors flex items-center justify-center"
              aria-label="Next media"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F8F5EF] rounded-sm border border-[#D4AF37]/20 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all overflow-hidden flex flex-col h-full group block"
                >
                  {/* Image / thumbnail */}
                  {item.image ? (
                    <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                          <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-[#1C1C1C] ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative w-full bg-[#7e2e19] flex items-center justify-center" style={{ paddingBottom: '56.25%' }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Newspaper className="w-12 h-12 text-[#E2C45C]/40" />
                      </div>
                    </div>
                  )}

                  {/* Card body */}
                  <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a3820]">
                        {item.source}
                      </span>
                      <h3 className="font-sans text-sm font-semibold text-[#1C1C1C] leading-snug group-hover:text-[#7e2e19] transition-colors line-clamp-3">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9a3820] group-hover:text-[#D4AF37] transition-colors">
                      <span>{item.type === 'video' ? 'Watch' : 'Read'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60'
              }`}
            />
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/media"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all duration-300"
          >
            <span>View All Media</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </Link>
        </div>
      </div>
    </section>
  );
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
        description="Speaker, author and mentor helping people move from pain and uncertainty toward healing, clarity, confidence and purposeful action. Keynote speaking, mentorship and books for life's turning points."
        keywords={[
          'Keatlegile Mabena',
          'Speaker',
          'Author',
          'Mentor',
          'Keynote Speaker South Africa',
          'Mental Health Speaker',
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
              <h1 className="font-serif tracking-tight text-white space-y-3">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 drop-shadow-md">
                  KEATLEGILE MABENA
                </span>
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight text-[#E2C45C] [text-shadow:_0_2px_10px_rgba(0,0,0,0.85)]">
                  <span className="font-serif italic">Speaker</span>
                  <span className="text-[#D4AF37]/60 text-sm">&bull;</span>
                  <span className="font-serif italic">Author</span>
                  <span className="text-[#D4AF37]/60 text-sm">&bull;</span>
                  <span className="font-serif italic">Mentor</span>
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/60 to-transparent"
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
                to="/book-keatlegile?service=speaking"
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 group border border-[#E2C45C]"
              >
                <span>Invite me to speak</span>
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
                <span>About Keatlegile Mabena</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#1C1C1C] leading-tight">
                From Shakung Village to a life of service
              </h2>

              <div className="space-y-4 text-base text-[#1C1C1C]/80 leading-relaxed">
                <p>
                  I grew up in Shakung (North-West Province, South Africa), carrying experiences that could have narrowed my sense of what was possible. Today, I&rsquo;m a speaker, author and mentor, using my voice and lived experience to open honest conversations about mental health, resilience, grief and growth.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="px-7 py-3.5 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Read full biography</span>
                  <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
                </Link>
              </div>
            </motion.div>

            {/* Quick Profile Card — At a Glance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm shadow-2xl border-l-4 border-[#D4AF37] space-y-6 relative overflow-hidden">
                <div className="text-xs font-bold tracking-widest text-[#E2C45C] uppercase">
                  AT A GLANCE
                </div>
                <div className="space-y-5 divide-y divide-white/10 text-sm">
                  {AT_A_GLANCE.map((item, idx) => {
                    const Icon = iconMap[item.icon] ?? Award;
                    return (
                      <div key={idx} className="pt-2 flex items-start gap-3">
                        <Icon className="w-5 h-5 text-[#E2C45C] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="text-xs text-white/70 leading-relaxed">{item.detail}</div>
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
              Speaking, mentorship and books for life&rsquo;s turning points.
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
                  SPEAKING &amp; KEYNOTES
                </h3>
                <div className="space-y-2 text-xs text-[#1C1C1C]/75 leading-relaxed">
                  <p><span className="font-semibold text-[#7e2e19]">What:</span> Keynotes and talks on mental health and wellbeing, resilience, healing, grief, self-discovery, personal growth and career progress.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Who:</span> Conferences, institutions, organisations and community groups seeking an honest, engaging speaker.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Outcome:</span> Fresh perspectives and practical ideas audiences can carry into their lives and work.</p>
                </div>
              </div>
              <Link
                to="/speaking"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors pt-2"
              >
                <span>Invite me to speak</span>
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
                  <p><span className="font-semibold text-[#7e2e19]">What:</span> One-on-one mentorship for people navigating personal or career transitions.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Who:</span> Students, graduates and young professionals seeking support with resilience, self-discovery, healing, grief, confidence or career progress.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Outcome:</span> Greater clarity, practical next steps and steady support as you move forward.</p>
                </div>
              </div>
              <Link
                to="/mentorship"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors pt-2"
              >
                <span>Apply for mentorship</span>
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
                  <p><span className="font-semibold text-[#7e2e19]">What:</span> Breaking the Chains and my forthcoming book, The Weight I Didn&rsquo;t Choose: Healing, Rising and Becoming, explore mental health, grief, healing, resilience and personal growth.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Who:</span> Readers looking for honest reflections on mental health, grief, healing and self-discovery.</p>
                  <p><span className="font-semibold text-[#7e2e19]">Outcome:</span> Stories and reflections that help readers feel seen and find hope as they navigate their own journeys.</p>
                </div>
              </div>
              <Link
                to="/books"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors pt-2"
              >
                <span>Explore my books</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 5. SPEAKING ENGAGEMENTS, MEDIA FEATURES & RECOGNITION ================= */}
      <MediaCarousel />

      {/* ================= 6. FEATURED BOOK ================= */}
      <section className="py-20 bg-[#F8F5EF] border-t-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase">
              Published Books
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#1C1C1C]">
              A book worth reading
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          <FeaturedBookCard book={featuredBook} />

          <div className="text-center">
            <Link
              to="/books"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a3820] hover:text-[#D4AF37] transition-colors"
            >
              <span>View All Books</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
              Words from readers &amp; audiences
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
              to="/book-keatlegile?service=speaking"
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 group border border-[#E2C45C]"
            >
              <span>Enquire about speaking</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#1C1C1C]" />
            </Link>
            <Link
              to="/book-keatlegile?service=mentorship"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-white/30 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for mentorship</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
