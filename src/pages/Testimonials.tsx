import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Quote,
  MessageSquare,
  Sparkles,
  BookOpen,
  Heart,
  ArrowRight,
  CheckCircle2,
  Send,
  Pause,
  Play
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { BOOK_TESTIMONIALS, IMPACT_TESTIMONIALS, Testimonial } from '../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [isPausedRow1, setIsPausedRow1] = useState<boolean>(false);
  const [isPausedRow2, setIsPausedRow2] = useState<boolean>(false);

  // Modal Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'On "Breaking The Chains"',
    quote: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.quote) return;
    setSubmittedSuccess(true);
    setTimeout(() => {
      setIsSubmitModalOpen(false);
      setSubmittedSuccess(false);
      setFormData({ name: '', category: 'On "Breaking The Chains"', quote: '' });
    }, 2500);
  };

  // Triple the arrays to ensure seamless infinite looping without gaps
  const row1Triple = [...BOOK_TESTIMONIALS, ...BOOK_TESTIMONIALS, ...BOOK_TESTIMONIALS];
  const row2Triple = [...IMPACT_TESTIMONIALS, ...IMPACT_TESTIMONIALS, ...IMPACT_TESTIMONIALS];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1C1C1C]">
      <SEO
        title="Testimonials & Reader Reflections | Keatlegile Mabena"
        description="Read authentic reflections and messages from readers of 'Breaking the Chains' and participants in Keatlegile Mabena's personal growth journeys."
        canonicalUrl="https://keatlegilemabena.co.za/testimonials"
      />

      {/* Hero Banner - NO COUNTER NUMBERS */}
      <section className="relative bg-[#7e2e19] text-white pt-20 pb-20 px-4 sm:px-8 border-b-4 border-[#D4AF37]/50 overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-[#5a1f10]/50 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 text-[#E2C45C] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E2C45C]" />
            <span>Readers' Reflections &amp; Personal Impact</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Words of Transformation &amp; Hope
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Real notes, heartfelt reflections, and life-changing testimonials shared by readers of <em>Breaking the Chains</em> and people empowered by Keatlegile Mabena's work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-wider rounded shadow-md transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share Your Story</span>
            </button>

            <Link
              to="/books"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 transition-colors inline-flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#E2C45C]" />
              <span>Explore The Book</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area - Infinite Loop Carousels */}
      <div className="py-16 space-y-16 overflow-hidden">
        {/* CAROUSEL SECTION 1: ON "BREAKING THE CHAINS" (THE BOOK) */}
        <section className="space-y-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#7e2e19]/10 text-[#7e2e19] rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1C1C]">
                  ON "BREAKING THE CHAINS" (THE BOOK)
                </h2>
                <p className="text-xs text-slate-500">
                  Hover over any card to pause scrolling
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsPausedRow1(!isPausedRow1)}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 shadow-sm"
            >
              {isPausedRow1 ? <Play className="w-3.5 h-3.5 text-[#7e2e19]" /> : <Pause className="w-3.5 h-3.5 text-[#7e2e19]" />}
              <span>{isPausedRow1 ? 'Resume Scroll' : 'Pause Scroll'}</span>
            </button>
          </div>

          {/* Continuous Infinite Marquee Track 1 */}
          <div className="relative w-full overflow-hidden pause-on-hover py-4 bg-gradient-to-r from-transparent via-[#FAF8F5] to-transparent">
            {/* Fade Edges */}
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

            <div
              className={`animate-marquee-slow flex gap-6 ${isPausedRow1 ? '[animation-play-state:paused!important]' : ''}`}
            >
              {row1Triple.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="w-[320px] sm:w-[380px] shrink-0 bg-white p-6 rounded-xl border-t-4 border-t-[#D4AF37] border-x border-b border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#7e2e19]/10 text-[#7e2e19] rounded-full border border-[#7e2e19]/20">
                        {t.category}
                      </span>
                      <Quote className="w-5 h-5 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal mb-4 whitespace-normal">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#7e2e19] text-[#E2C45C] flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                        {t.name.charAt(0)}
                      </div>
                      <span className="text-xs font-bold text-[#1C1C1C]">{t.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">Verified Reader</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAROUSEL SECTION 2: 💫 LIFE-CHANGING IMPACT & PERSONAL GROWTH */}
        <section className="space-y-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#D4AF37]/20 text-[#A88616] rounded-lg">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1C1C]">
                  💫 LIFE-CHANGING IMPACT &amp; PERSONAL GROWTH
                </h2>
                <p className="text-xs text-slate-500">
                  Hover over any card to pause scrolling
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsPausedRow2(!isPausedRow2)}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 shadow-sm"
            >
              {isPausedRow2 ? <Play className="w-3.5 h-3.5 text-[#7e2e19]" /> : <Pause className="w-3.5 h-3.5 text-[#7e2e19]" />}
              <span>{isPausedRow2 ? 'Resume Scroll' : 'Pause Scroll'}</span>
            </button>
          </div>

          {/* Continuous Infinite Marquee Track 2 (Reverse direction) */}
          <div className="relative w-full overflow-hidden pause-on-hover py-4 bg-gradient-to-r from-transparent via-[#FAF8F5] to-transparent">
            {/* Fade Edges */}
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

            <div
              className={`animate-marquee-slow-reverse flex gap-6 ${isPausedRow2 ? '[animation-play-state:paused!important]' : ''}`}
            >
              {row2Triple.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="w-[320px] sm:w-[380px] shrink-0 bg-white p-6 rounded-xl border-t-4 border-t-[#7e2e19] border-x border-b border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#7e2e19] rounded-full border border-[#D4AF37]/30">
                        {t.category}
                      </span>
                      <Quote className="w-5 h-5 text-[#7e2e19]/40 group-hover:text-[#7e2e19] transition-colors" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal mb-4 whitespace-normal">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-[#1C1C1C] flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                        {t.name.charAt(0)}
                      </div>
                      <span className="text-xs font-bold text-[#1C1C1C]">{t.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">Verified Message</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Share Feedback Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl border border-slate-200 max-w-lg w-full p-6 relative">
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>

            {submittedSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-serif font-bold text-[#1C1C1C]">Thank You!</h3>
                <p className="text-xs text-slate-600 mt-2 max-w-xs mx-auto">
                  Your message has been received and will be added to the community wall soon.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-[#7e2e19]" />
                  <h3 className="text-lg font-serif font-bold text-[#1C1C1C]">
                    Share Your Experience
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-6">
                  Has <em>Breaking the Chains</em> or Keatlegile's work impacted your life? Share your reflection with us!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name or Initials *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Winnie M. or Anonymous Reader"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7e2e19]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7e2e19]"
                    >
                      <option value='On "Breaking The Chains"'>On "Breaking The Chains"</option>
                      <option value="Life-Changing Impact & Personal Growth">Life-Changing Impact &amp; Personal Growth</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message / Reflection *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.quote}
                      onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                      placeholder="Write your thoughts or how the book touched your journey..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7e2e19]"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitModalOpen(false)}
                      className="px-4 py-2 text-xs text-slate-600 hover:text-slate-800 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#7e2e19] hover:bg-[#5a1f10] text-white text-xs font-bold rounded shadow flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Booking CTA Banner */}
      <section className="bg-[#7e2e19] text-white py-14 px-4 sm:px-8 border-t-4 border-[#D4AF37]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            Ready to Begin Your Own Journey of Purpose?
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Discover Keatlegile Mabena's best-selling book <em>Breaking the Chains</em> or book a keynote address or mentorship session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/books"
              className="w-full sm:w-auto px-6 py-3 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-wider rounded shadow-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Explore His Books</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/book-keatlegile"
              className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 transition-colors inline-flex items-center justify-center"
            >
              Book Keatlegile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
