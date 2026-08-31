import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FIRM_DETAILS } from '../data/firmData';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy & POPIA Statement | Keatlegile Mabena"
        description="Protection of Personal Information Act (POPIA) privacy policy and confidentiality statement for Keatlegile Mabena."
        breadcrumbs={[{ label: 'Privacy Policy & POPIA', path: '/privacy-policy' }]}
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy & POPIA' }]} />

      <section className="py-16 bg-white text-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 bg-white p-8 sm:p-12 rounded-sm border border-[#D74B27]/30 shadow-lg">
          <div className="border-b border-gray-100 pb-4 space-y-2">
            <span className="text-xs font-bold text-[#006666] uppercase tracking-widest">
              South African Compliance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004C4C]">
              Privacy Policy &amp; Protection of Personal Information Act (POPIA) Statement
            </h1>
            <p className="text-xs text-gray-500">
              Effective Date: 1 January 2026 | Keatlegile Mabena
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#1C1C1C]/80 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#006666]">1. Introduction &amp; Commitment to Privacy</h2>
              <p>
                Keatlegile Mabena is committed to protecting the privacy and personal information of clients, event delegates, mentorship participants, and website visitors. This Privacy Policy sets out how we collect, use, store, and safeguard personal information in accordance with the Protection of Personal Information Act 4 of 2013 (&quot;POPIA&quot;).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#006666]">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when submitting contact requests, booking speaking engagements, applying for mentorship, or contacting us. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full name and professional designation</li>
                <li>Email address and contact telephone numbers</li>
                <li>Details regarding speaking invitations, mentorship applications, or book enquiries</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#006666]">3. Purpose of Processing Personal Data</h2>
              <p>
                Personal information is processed strictly for legitimate communication and service delivery, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responding to speaking, mentorship, and book enquiries</li>
                <li>Delivering agreed mentorship sessions and corporate speaking workshops</li>
                <li>Communicating newsletter reflections and brand updates</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#006666]">4. Information Contact</h2>
              <p>
                If you have questions regarding POPIA compliance or wish to update your records, please contact:
              </p>
              <div className="p-4 bg-[#F8F5EF] rounded border border-[#D74B27]/30 space-y-1 font-mono text-xs">
                <div><strong>Brand &amp; Contact:</strong> Keatlegile Mabena</div>
                <div><strong>Telephone:</strong> {FIRM_DETAILS.contact.phone}</div>
                <div><strong>Email:</strong> {FIRM_DETAILS.contact.email}</div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
