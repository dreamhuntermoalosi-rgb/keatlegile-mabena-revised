import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FIRM_DETAILS } from '../data/firmData';
import { Shield, Lock, FileText, UserCheck, AlertCircle, Phone, Mail } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy & POPIA Statement | Keatlegile Mabena"
        description="Comprehensive Protection of Personal Information Act (POPIA) compliance policy, data handling practices, and privacy notice for Keatlegile Mabena."
        breadcrumbs={[{ label: 'Privacy Policy & POPIA', path: '/privacy-policy' }]}
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy & POPIA' }]} />

      <section className="py-16 sm:py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
          
          {/* Header Banner */}
          <div className="bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm border-2 border-[#D4AF37] shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-xs text-[11px] font-bold text-[#E2C45C] uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>South African POPIA Compliance Statement</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Privacy Policy &amp; Protection of Personal Information Notice
            </h1>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              In accordance with the Protection of Personal Information Act 4 of 2013 (&quot;POPIA&quot;) of the Republic of South Africa, this policy outlines how Keatlegile Mabena collects, processes, stores, and protects your personal data.
            </p>
            <div className="text-[11px] text-[#E2C45C] pt-2 border-t border-white/10 font-mono">
              Effective Date: 1 January 2026 • Last Reviewed: September 2026
            </div>
          </div>

          <div className="space-y-8 text-xs sm:text-sm text-[#1C1C1C]/85 leading-relaxed bg-[#F8F5EF] p-8 sm:p-12 rounded-sm border border-[#D4AF37]/30 shadow-sm">
            
            {/* 1. Responsible Party */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#9a3820]" />
                <span>1. Responsible Party &amp; Scope</span>
              </h2>
              <p>
                This website and brand platform operate under the personal advisory and authorship practice of <strong>Keatlegile Mabena</strong> (hereinafter &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We act as the <strong>Responsible Party</strong> in terms of POPIA for all personal information collected through our website, contact forms, WhatsApp business integrations, mentorship enrollments, book order portals, and speaking engagement inquiries.
              </p>
            </section>

            {/* 2. Personal Information We Collect */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19] flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#9a3820]" />
                <span>2. Personal Information Collected &amp; Purpose</span>
              </h2>
              <p>
                We collect personal information that you voluntarily provide to us when submitting an inquiry or placing an order. The categories of information collected include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity Data:</strong> Full name, title, and institutional/corporate affiliation or designation.</li>
                <li><strong>Contact Data:</strong> Email address, mobile/WhatsApp telephone number, and delivery physical address (for book orders).</li>
                <li><strong>Enquiry &amp; Event Details:</strong> Event dates, venue locations, budget ranges, mentorship goals, or specific guidance requests.</li>
                <li><strong>Consent Records:</strong> Records of your explicit consent to receive communications, workshop materials, or newsletters.</li>
              </ul>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#9a3820]" />
                <span>3. Specific Purpose &amp; Limitation of Processing</span>
              </h2>
              <p>
                In compliance with Condition 3 of POPIA (Specific Purpose), your personal information is processed strictly for the explicit purpose for which it was collected:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded border border-black/10 space-y-1">
                  <div className="font-bold text-[#7e2e19]">Keynote &amp; Speaking Inquiries</div>
                  <p className="text-[11px] text-[#1C1C1C]/70">To evaluate availability, prepare custom presentation proposals, coordinate event logistics, and issue agreements.</p>
                </div>
                <div className="p-4 bg-white rounded border border-black/10 space-y-1">
                  <div className="font-bold text-[#7e2e19]">Mentorship &amp; Career Advisory</div>
                  <p className="text-[11px] text-[#1C1C1C]/70">To review participant backgrounds, schedule 1-on-1 consultations, and track individual career development goals.</p>
                </div>
                <div className="p-4 bg-white rounded border border-black/10 space-y-1">
                  <div className="font-bold text-[#7e2e19]">Book Orders &amp; Publishing</div>
                  <p className="text-[11px] text-[#1C1C1C]/70">To process book sales, coordinate door-to-door courier deliveries, and issue payment receipts.</p>
                </div>
                <div className="p-4 bg-white rounded border border-black/10 space-y-1">
                  <div className="font-bold text-[#7e2e19]">Direct WhatsApp Communications</div>
                  <p className="text-[11px] text-[#1C1C1C]/70">To provide prompt customer support and direct response to client messages initiated by you.</p>
                </div>
              </div>
            </section>

            {/* 4. Non-Disclosure & Security */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19] flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#9a3820]" />
                <span>4. Information Security &amp; Third-Party Non-Disclosure</span>
              </h2>
              <p>
                We implement appropriate, reasonable technical and organizational measures to safeguard your personal information against loss, damage, unauthorized destruction, or unlawful access.
              </p>
              <div className="p-4 bg-[#7e2e19]/10 rounded border-l-4 border-[#7e2e19] text-xs font-medium space-y-1">
                <p className="text-[#7e2e19] font-bold">Strict Anti-Spam &amp; Non-Sale Guarantee:</p>
                <p className="text-[#1C1C1C]/80">
                  We <strong>never sell, rent, lease, or trade</strong> your personal information to third parties or marketing agencies. Information is shared with third parties strictly when necessary for service delivery (e.g., courier services for book delivery, encrypted WhatsApp Business API for messaging).
                </p>
              </div>
            </section>

            {/* 5. Data Subject Rights under POPIA */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19] flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#9a3820]" />
                <span>5. Your Legal Rights under POPIA</span>
              </h2>
              <p>
                As a Data Subject under South African law, you hold the following rights regarding your personal information held by us:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Right of Access:</strong> Request confirmation of whether we hold personal information about you and request a copy of such records.</li>
                <li><strong>Right to Rectification:</strong> Request correction or updating of inaccurate, incomplete, or out-of-date information.</li>
                <li><strong>Right to Object &amp; Erasure:</strong> Object to processing on reasonable grounds or request destruction/deletion of your personal data.</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw previously granted consent for marketing or communication at any time.</li>
                <li><strong>Right to Complain:</strong> Lodge a complaint with the South African Information Regulator if you believe your privacy rights have been infringed.</li>
              </ul>
            </section>

            {/* 6. Contact Information Officer */}
            <section className="space-y-3 pt-4 border-t border-[#D4AF37]/30">
              <h2 className="font-serif text-xl font-bold text-[#7e2e19]">
                6. Information Officer Contact Details
              </h2>
              <p>
                To exercise any of your data rights, request information deletion, or clarify our privacy practices, please contact our Information Officer:
              </p>

              <div className="p-5 bg-white rounded border border-[#D4AF37] space-y-2 font-mono text-xs shadow-sm">
                <div className="font-bold text-[#7e2e19] text-sm font-serif">Information Officer: Keatlegile Mabena</div>
                <div className="flex items-center gap-2 text-[#1C1C1C]">
                  <Mail className="w-4 h-4 text-[#9a3820]" />
                  <span>Email: {FIRM_DETAILS.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-[#1C1C1C]">
                  <Phone className="w-4 h-4 text-[#9a3820]" />
                  <span>Telephone / WhatsApp: {FIRM_DETAILS.contact.phone}</span>
                </div>
                <div className="text-[11px] text-gray-500 pt-1">
                  Location: Gauteng &amp; Nationwide, Republic of South Africa
                </div>
              </div>

              <div className="text-[11px] text-gray-600 pt-2 italic">
                You may also contact the South African Information Regulator directly at: <br />
                JD House, 27 Stiemans Street, Braamfontein, Johannesburg, 2001 • Email: enquiries@inforegulator.org.za
              </div>
            </section>

          </div>
        </div>
      </section>
    </>
  );
};
