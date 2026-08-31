import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Mic, FileText, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const Media: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();
  return (
    <>
      <SEO
        title="Media & Press | Keatlegile Mabena"
        description="Media appearances, press kit, interviews, podcast features, and press contacts for Keatlegile Mabena."
        canonicalUrl="https://keatlegilemabena.com/media"
      />

      <Breadcrumbs items={[{ label: 'Media & Press' }]} />

      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Media & Press"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Video className="w-3.5 h-3.5" />
            <span>MEDIA &amp; PRESS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Media Features &amp; Press Enquiries
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Interviews, podcast conversations, press releases, and media commentary on youth empowerment, purpose, and career development.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#9a3820] space-y-4">
              <Mic className="w-8 h-8 text-[#9a3820]" />
              <h3 className="font-serif text-xl font-bold text-[#7e2e19]">Podcasts &amp; Radio</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Key discussions on career growth, personal transformation, and overcoming self-doubt.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#D4AF37] space-y-4">
              <Video className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="font-serif text-xl font-bold text-[#7e2e19]">Television &amp; Video</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Guest features and panel commentary on youth affairs, higher education, and economic empowerment.
              </p>
            </div>

            <div className="p-8 bg-[#F8F5EF] rounded-sm border-t-4 border-[#9a3820] space-y-4">
              <FileText className="w-8 h-8 text-[#9a3820]" />
              <h3 className="font-serif text-xl font-bold text-[#7e2e19]">Press Kit &amp; Bio</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                Download official biography, high-resolution headshots, and media boilerplate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5EF] text-center border-t-2 border-[#D4AF37]">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
            Media Enquiries
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            For interview requests, podcast bookings, or comment, please get in touch.
          </p>
          <button
            type="button"
            onClick={() =>
              openWhatsAppModal({
                title: 'Media & Press Enquiry',
                subtitle: 'Interviews, Podcast Guest Appearances & Press Features',
                defaultService: 'Speaking & Keynote Addresses'
              })
            }
            className="px-8 py-3.5 bg-[#7e2e19] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#9a3820] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Contact Media Team</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </button>
        </div>
      </section>
    </>
  );
};
