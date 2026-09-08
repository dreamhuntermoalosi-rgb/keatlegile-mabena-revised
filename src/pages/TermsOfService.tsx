import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FIRM_DETAILS } from '../data/firmData';
import { FileCheck, BookOpen, ShieldAlert, Award, Phone, Mail } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Engagement & Service | Keatlegile Mabena"
        description="Terms of engagement, speaking booking conditions, mentorship agreement parameters, and intellectual property policies for Keatlegile Mabena."
        breadcrumbs={[{ label: 'Terms of Service', path: '/terms-of-service' }]}
      />

      <Breadcrumbs items={[{ label: 'Terms of Engagement' }]} />

      <section className="py-16 sm:py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
          
          {/* Header Banner */}
          <div className="bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm border-2 border-[#D4AF37] shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-xs text-[11px] font-bold text-[#E2C45C] uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Professional Engagement Framework</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Terms of Engagement &amp; Service Conditions
            </h1>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              These terms govern keynote speaking bookings, mentorship enrollments, publication sales, and advisory consultations conducted with Keatlegile Mabena.
            </p>
            <div className="text-[11px] text-[#E2C45C] pt-2 border-t border-white/10 font-mono">
              Effective Date: 1 January 2026 • Republic of South Africa
            </div>
          </div>

          <div className="space-y-8 text-xs sm:text-sm text-[#1C1C1C]/85 leading-relaxed bg-[#F8F5EF] p-8 sm:p-12 rounded-sm border border-[#D4AF37]/30 shadow-sm">
            
            {/* 1. Engagement & Services Scope */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#9a3820]" />
                <span>1. Scope of Professional Services</span>
              </h2>
              <p>
                Keatlegile Mabena provides keynote addresses, corporate workshops, structured 1-on-1 mentorship programs, career development guidance, and author publications. All engagements are customized to institutional or individual needs upon formal confirmation.
              </p>
            </section>

            {/* 2. Keynote & Speaking Engagements */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19]">
                2. Keynote &amp; Event Booking Terms
              </h2>
              <p>
                To secure a keynote presentation, workshop facilitation, or conference address:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Confirmation:</strong> Speaking dates are strictly provisional until a formal written proposal or engagement agreement is signed and agreed upon.</li>
                <li><strong>Logistics &amp; Travel:</strong> For events outside Gauteng, South Africa, travel, accommodation, and subsistence requirements are agreed upon in advance.</li>
                <li><strong>Media Rights:</strong> Event recording, broadcasting, or live-streaming rights must be explicitly stated in the booking contract.</li>
              </ul>
            </section>

            {/* 3. Mentorship & Coaching Code */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19]">
                3. Mentorship &amp; Advisory Code of Practice
              </h2>
              <p>
                Mentorship and career advisory relationships operate on mutual respect, confidentiality, and active commitment:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Confidentiality:</strong> All personal, career, or corporate details shared during 1-on-1 mentorship sessions remain strictly confidential.</li>
                <li><strong>Participant Responsibility:</strong> Mentorship provides strategic roadmaps, accountability, and guidance; individual career or personal outcomes depend on the participant&apos;s effort and implementation.</li>
              </ul>
            </section>

            {/* 4. Book Orders & Publications */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#9a3820]" />
                <span>4. Books &amp; Publication Orders</span>
              </h2>
              <p>
                Direct orders for <em>Breaking the Chains</em> and associated published works:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Fulfillment:</strong> Book orders placed via WhatsApp or official channels are dispatched via recognized door-to-door courier services upon proof of payment.</li>
                <li><strong>Bulk Orders:</strong> Institutional or corporate bulk book purchases receive custom delivery schedules and invoice terms.</li>
              </ul>
            </section>

            {/* 5. Intellectual Property */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19]">
                5. Intellectual Property Rights
              </h2>
              <p>
                All books, presentation slide decks, workshop materials, training frameworks, articles, and audio-visual recordings produced by Keatlegile Mabena are protected under copyright law in South Africa and internationally. Unauthorized reproduction, resale, or distribution without prior written consent is strictly prohibited.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#9a3820]" />
                <span>6. Limitation of Liability &amp; Governing Law</span>
              </h2>
              <p>
                Information, advice, and perspectives provided across speeches, mentorships, books, and website content are intended for educational, personal growth, and professional development purposes. They do not constitute formal legal or financial advice.
              </p>
              <p className="pt-1">
                These terms shall be governed by and construed in accordance with the laws of the Republic of South Africa.
              </p>
            </section>

            {/* 7. Inquiries */}
            <section className="space-y-3 pt-4 border-t border-[#D4AF37]/30">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19]">
                7. Legal &amp; Booking Inquiries
              </h2>
              <p>
                For questions regarding engagement terms, corporate proposals, or booking contracts, please reach out to:
              </p>

              <div className="p-5 bg-white rounded border border-[#D4AF37] space-y-2 font-mono text-xs shadow-sm">
                <div className="font-bold text-[#7e2e19] text-sm font-serif">Keatlegile Mabena Advisory &amp; Speaking</div>
                <div className="flex items-center gap-2 text-[#1C1C1C]">
                  <Mail className="w-4 h-4 text-[#9a3820]" />
                  <span>Email: {FIRM_DETAILS.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-[#1C1C1C]">
                  <Phone className="w-4 h-4 text-[#9a3820]" />
                  <span>Telephone / WhatsApp: {FIRM_DETAILS.contact.phone}</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>
    </>
  );
};
