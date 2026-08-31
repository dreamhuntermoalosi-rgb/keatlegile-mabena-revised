import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Events: React.FC = () => {
  return (
    <>
      <SEO
        title="Events & Keynotes | Keatlegile Mabena"
        description="Upcoming speaking engagements, book launches, workshops, and community events with Keatlegile Mabena."
        canonicalUrl="https://keatlegilemabena.com/events"
      />

      <Breadcrumbs items={[{ label: 'Events & Keynotes' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
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
            <h3 className="font-serif text-2xl font-bold text-[#004C4C]">
              Youth Empowerment &amp; Career Transformation Summit 2026
            </h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed">
              A national gathering bringing together students, graduates, and young professionals for keynote sessions on purpose, career strategy, and self-confidence.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#1C1C1C]/70 pt-2 border-t border-black/5">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#006666]" />
                <span>Pretoria / Johannesburg, South Africa</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5EF] text-center border-t border-[#D4AF37]">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
            Host an Event with Keatlegile
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            Submit an invitation for keynote speaking, masterclasses, or corporate workshops.
          </p>
          <Link
            to="/start-a-conversation"
            className="px-8 py-3.5 bg-[#004C4C] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#006666] transition-colors inline-flex items-center gap-2"
          >
            <span>Submit Event Invitation</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
