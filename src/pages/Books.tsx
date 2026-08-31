import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookmarkCheck,
  ShoppingBag,
  Award,
  FileText,
  Calendar,
  Building,
  Hash,
  BookMarked,
  Clock
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const Books: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();
  return (
    <>
      <SEO
        title="Books & Authorship | Keatlegile Mabena"
        description="Breaking the Chains: Bailing Out the Imprisoned Potential, Power and Persistence by Keatlegile Mabena. Over 7,000+ copies sold."
        keywords={[
          'Breaking the Chains',
          'Keatlegile Mabena Book',
          'Bailing Out the Imprisoned Potential',
          'South African Author',
          'Personal Development Books',
          'Healing and Purpose',
          '9780620840668'
        ]}
        canonicalUrl="https://keatlegilemabena.com/books"
        ogImage={IMAGES.profileCard}
      />

      <Breadcrumbs items={[{ label: 'Books & Authorship' }]} />

      {/* Hero Header */}
      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Books & Authorship"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>AUTHORSHIP &amp; LITERARY WORKS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Words Can Become Windows.
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            Ideas, stories, and frameworks that help people make sense of where they are, break free from limitations, and move forward with unshakeable conviction.
          </p>
        </div>
      </section>



      {/* Featured Main Book Section: Breaking the Chains */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Book Presentation & Metadata Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Book Spine / Cover Mockup Card */}
              <div className="bg-gradient-to-br from-[#5a1f10] via-[#7e2e19] to-[#38120a] text-white p-8 sm:p-10 rounded-sm border-2 border-[#D4AF37] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#D4AF37] text-[#1C1C1C] px-2.5 py-1 rounded">
                      Published Book
                    </span>
                    <span className="text-xs font-semibold text-[#E2C45C]">
                      2019 Release
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                      Breaking the Chains
                    </h2>
                    <p className="font-serif text-base sm:text-lg text-[#E2C45C] italic leading-snug">
                      Bailing Out the Imprisoned Potential, Power and Persistence
                    </p>
                  </div>

                  <div className="pt-2 text-sm text-white/90">
                    <span className="text-white/60 text-xs block uppercase tracking-wider">Author</span>
                    <span className="font-bold text-base text-white">Keatlegile Mabena</span>
                  </div>

                  {/* Impact Highlight Badge */}
                  <div className="bg-[#38120a]/80 border border-[#D4AF37]/50 p-3.5 rounded-sm flex items-center gap-3">
                    <Award className="w-6 h-6 text-[#D4AF37] shrink-0" />
                    <div>
                      <div className="font-bold text-[#E2C45C] text-sm">7,000+ Copies Sold</div>
                      <div className="text-[11px] text-white/70">Nationwide readership and impact</div>
                    </div>
                  </div>

                  {/* Metadata Specs */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t-2 border-white/10">
                    <div>
                      <span className="text-white/50 block text-[10px] uppercase">Length</span>
                      <span className="font-semibold text-white">126 Pages</span>
                    </div>
                    <div>
                      <span className="text-white/50 block text-[10px] uppercase">Publisher</span>
                      <span className="font-semibold text-white">Self-Published</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-white/50 block text-[10px] uppercase">ISBN</span>
                      <span className="font-mono text-[#E2C45C] font-semibold">9780620840668</span>
                    </div>
                  </div>

                  {/* Order CTA Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() =>
                        openWhatsAppModal({
                          title: 'Order "The Power of Pain"',
                          subtitle: 'Direct WhatsApp order / delivery inquiry with the author',
                          defaultService: 'The Power of Pain Book Order'
                        })
                      }
                      className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm text-center block shadow-lg transition-all border border-[#E2C45C] cursor-pointer"
                    >
                      Inquire / Order Copies
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Picture Framing - Responsive & Full Height Contain */}
              <div className="bg-[#F8F5EF] p-4 rounded-sm border-2 border-[#D4AF37]/30 shadow-md">
                <div className="w-full h-[480px] sm:h-[720px] md:h-[800px] lg:h-[640px] rounded-sm overflow-hidden border-2 border-[#D4AF37]/20 bg-gradient-to-b from-[#7e2e19]/10 via-[#F8F5EF] to-[#7e2e19]/5 flex items-center justify-center">
                  <img
                    src={IMAGES.profileCard}
                    alt="Keatlegile Mabena Author"
                    className="w-full h-full object-cover object-top sm:object-bottom lg:object-top filter brightness-105 contrast-105 transform-gpu"
                  />
                </div>
                <div className="text-center pt-3 space-y-1">
                  <div className="font-serif text-sm font-bold text-[#7e2e19]">Keatlegile Mabena</div>
                  <div className="text-[11px] text-[#9a3820] font-semibold uppercase tracking-wider">
                    Speaker | Author | Mentor
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Book Excerpt, Themes, and Core Narrative */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
                  CENTRAL PHILOSOPHICAL ESSENCE
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#7e2e19]">
                  What Are Your Chains?
                </h3>
              </div>

              {/* High-Impact Excerpt Block */}
              <div className="bg-[#F8F5EF] p-8 rounded-sm border-l-4 border-[#D4AF37] space-y-5 shadow-sm">
                <p className="font-serif text-lg sm:text-xl font-bold text-[#7e2e19] uppercase tracking-wide">
                  WHAT ARE YOUR CHAINS?
                </p>
                <div className="space-y-4 text-base sm:text-lg text-[#1C1C1C]/90 font-serif italic leading-relaxed">
                  <p>Sometimes the chains are circumstances.</p>
                  <p>Sometimes they are fear.</p>
                  <p>Sometimes they are unresolved experiences.</p>
                  <p>Sometimes they are the beliefs we have developed about ourselves.</p>
                  <p className="font-bold text-[#7e2e19] not-italic pt-2">
                    And sometimes we become so accustomed to carrying them that we forget that another way of living is possible.
                  </p>
                </div>
              </div>

              {/* Book Description & Insights */}
              <div className="space-y-4 text-base text-[#1C1C1C]/85 leading-relaxed">
                <p>
                  <em>Breaking the Chains</em> is an intimate, rigorous, and inspiring exploration of what holds individuals back from realizing their true capabilities. Drawing from personal vulnerability, rural roots in Shakung Village, and deep studies in human development, Keatlegile Mabena provides readers with a structured blueprint to bail out their imprisoned potential.
                </p>
                <p>
                  With over <strong>7,000 copies sold</strong>, this book has resonated deeply with students, professionals, youth leaders, and executives across South Africa who find themselves trapped by past failures, imposter syndrome, or systemic limitations.
                </p>
              </div>

              {/* Key Pillars Explored in the Book */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#7e2e19] border-b-2 border-gray-200 pb-2">
                  Key Transformational Themes Explored:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-sm border border-gray-200 space-y-1">
                    <div className="font-bold text-[#7e2e19] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Imprisoned Potential</span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Identifying invisible mental constraints and unexpressed gifts.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-sm border border-gray-200 space-y-1">
                    <div className="font-bold text-[#7e2e19] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Reclaiming Personal Power</span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Transitioning from a victim of circumstances to an agent of change.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-sm border border-gray-200 space-y-1">
                    <div className="font-bold text-[#7e2e19] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>The Architecture of Persistence</span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Building the stamina to endure difficult seasons without surrendering vision.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-sm border border-gray-200 space-y-1">
                    <div className="font-bold text-[#7e2e19] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Freedom &amp; Purpose</span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Stepping boldly into meaningful academic, career, and personal contribution.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Upcoming Book Section */}
          <div className="bg-[#42160c] text-white p-8 sm:p-12 rounded-sm border-2 border-[#D4AF37] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37] rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>FORTHCOMING TITLE</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                  Upcoming Book — Coming Soon
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  Keatlegile Mabena is currently finalizing his next manuscript, expanding upon the intersection of emotional healing, structured self-discovery, and institutional career mastery in modern South Africa.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openWhatsAppModal({
                      title: 'Pre-Register for Upcoming Book',
                      subtitle: 'Get notified first upon launch and receive exclusive author updates',
                      defaultService: 'Upcoming Book Pre-Registration'
                    })
                  }
                  className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm text-center transition-colors border border-[#E2C45C] shadow cursor-pointer"
                >
                  Pre-Register Interest
                </button>
                <Link
                  to="/insights"
                  className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-sm text-center transition-colors border border-white/30"
                >
                  Read Latest Articles
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Book Orders & Institutional Bulk Inquiries CTA */}
      <section className="py-16 bg-[#7e2e19] text-white text-center border-t-2 border-[#D4AF37]/40">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#E2C45C]">
            Order Books for Yourself, Schools, or Your Organization
          </h2>
          <p className="text-sm text-white/80">
            For individual book orders, school distribution, or corporate bulk purchases accompanied by keynote talks, reach out directly.
          </p>
          <button
            type="button"
            onClick={() =>
              openWhatsAppModal({
                title: 'Bulk Book Order Inquiry',
                subtitle: 'Schools, Corporate Distribution & Group Orders',
                defaultService: 'The Power of Pain Book Order'
              })
            }
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-widest rounded-sm transition-colors inline-flex items-center gap-2 border border-[#E2C45C] cursor-pointer shadow-md"
          >
            <span>Start an Order Inquiry</span>
            <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
          </button>
        </div>
      </section>
    </>
  );
};
