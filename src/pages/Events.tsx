import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const Events: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();
  return (
    <>
      <SEO
        title="Events & Keynotes | Keatlegile Mabena"
        description="Upcoming speaking engagements, book launches, workshops, and community events with Keatlegile Mabena."
        canonicalUrl="https://keatlegilemabena.com/events"
      />

      <Breadcrumbs items={[{ label: 'Events & Keynotes' }]} />

      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Events & Appearances"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>EVENTS &amp; APPEARANCES</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Upcoming Events &amp; Keynotes
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Where you can connect with Keatlegile Mabena in person and online.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="p-8 bg-[#F8F5EF] rounded-sm border-l-4 border-[#D4AF37] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <Calendar className="w-4 h-4" />
              <span>UPCOMING ENGAGEMENT</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#7e2e19]">
              Youth Empowerment &amp; Career Transformation Summit 2026
            </h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed">
              A national gathering bringing together students, graduates, and young professionals for keynote sessions on purpose, career strategy, and self-confidence.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#1C1C1C]/70 pt-2 border-t-2 border-black/5">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#9a3820]" />
                <span>Pretoria / Johannesburg, South Africa</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5EF] text-center border-t-2 border-[#D4AF37]">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
            Host an Event with Keatlegile
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            Submit an invitation for keynote speaking, masterclasses, or corporate workshops.
          </p>
          <button
            type="button"
            onClick={() =>
              openWhatsAppModal({
                title: 'Host an Event with Keatlegile',
                subtitle: 'Keynotes, Masterclasses & Corporate Workshops',
                defaultService: 'Speaking & Keynote Addresses'
              })
            }
            className="px-8 py-3.5 bg-[#7e2e19] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#9a3820] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Submit Event Invitation</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </button>
        </div>
      </section>
    </>
  );
};
