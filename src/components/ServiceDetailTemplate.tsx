import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Building2,
  Landmark,
  FileCheck2,
  Scale,
  Users2,
  HeartHandshake,
  Calendar,
  MessageSquare
} from 'lucide-react';

import { SEO } from './SEO';
import { Breadcrumbs } from './Breadcrumbs';
import { SERVICES, FIRM_DETAILS } from '../data/firmData';
import { IMAGES } from '../data/images';

interface ServiceDetailTemplateProps {
  serviceId: string;
}

export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({ serviceId }) => {
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter((s) => s.id !== serviceId);

  const IconComp =
    service.id === 'municipal-law-compliance'
      ? Building2
      : service.id === 'property-development-law'
      ? Landmark
      : service.id === 'contract-commercial-advisory'
      ? FileCheck2
      : service.id === 'litigation-dispute-resolution'
      ? Scale
      : service.id === 'labour-law'
      ? Users2
      : HeartHandshake;

  return (
    <>
      <SEO
        title={`${service.title} | Services | Keatlegile Mabena`}
        description={service.shortDescription}
        ogImage={service.image}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title, path: `/services/${service.slug}` }
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': service.title,
          'provider': {
            '@type': 'Person',
            'name': 'Keatlegile Mabena'
          },
          'description': service.shortDescription,
          'areaServed': 'South Africa'
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Services', path: '/services' },
          { label: service.title }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-[#290c06] text-white py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt={service.title}
            className="w-full h-full object-cover opacity-70 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#38120a]/85 via-[#42160c]/60 to-[#290c06]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#290c06]/75 via-transparent to-[#290c06]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37] rounded-sm text-xs font-bold text-[#E2C45C] uppercase tracking-wider">
            <IconComp className="w-4 h-4" />
            <span>Practice Area</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed font-light">
            {service.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/book-keatlegile"
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl inline-flex items-center gap-2"
            >
              <span>Book Keatlegile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Service Content */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Detailed Content Sections */}
            {service.detailedSections.map((sec, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm border border-[#D4AF37]/30 shadow-md space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#9a3820] border-b-2 border-gray-100 pb-3">
                  {sec.heading}
                </h2>
                <p className="text-sm text-[#1C1C1C]/80 leading-relaxed">
                  {sec.content}
                </p>

                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#1C1C1C]/80">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#9a3820] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Key Focus Areas List */}
            <div className="bg-white p-8 rounded-sm border border-[#D4AF37]/30 shadow-md space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#7e2e19]">
                Key Service Offerings in {service.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyAreas.map((area) => (
                  <div key={area} className="p-4 bg-gray-50 rounded border border-gray-200 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#9a3820] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#1C1C1C]">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutional Benefits */}
            <div className="p-8 bg-[#9a3820] text-white rounded-sm shadow-xl space-y-4 border border-[#D4AF37]">
              <h3 className="font-serif text-2xl font-bold text-[#E2C45C]">
                Strategic Advantages &amp; Client Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {service.benefits.map((ben, bIdx) => (
                  <div key={bIdx} className="p-3 bg-white/10 rounded border border-white/20 space-y-2">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <p className="text-white/90 font-medium leading-relaxed">{ben}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Consultation Card */}
            <div className="bg-[#1C1C1C] text-white p-8 rounded-sm border-2 border-[#D4AF37] shadow-xl space-y-6">
              <div className="space-y-2 border-b-2 border-white/10 pb-4">
                <span className="text-[10px] font-bold text-[#E2C45C] uppercase tracking-widest">
                  Direct Advisory Access
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Schedule Consultation
                </h3>
                <p className="text-xs text-white/70">
                  Discuss your requirements directly with Keatlegile Mabena.
                </p>
              </div>

              <div className="space-y-3 text-xs text-white/80">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Prompt Response &amp; Assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Privileged &amp; Confidential</span>
                </div>
              </div>

              <Link
                to="/book-keatlegile"
                className="w-full py-3 bg-[#9a3820] hover:bg-[#7e2e19] text-white text-xs font-bold uppercase tracking-wider rounded-sm text-center block shadow transition-colors border border-[#D4AF37]/40"
              >
                Book Keatlegile
              </Link>
            </div>

            {/* Other Practice Areas List */}
            <div className="bg-white p-6 rounded-sm border border-[#D4AF37]/30 shadow-md space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#7e2e19] border-b-2 border-gray-100 pb-2">
                Other Practice Areas
              </h4>
              <ul className="space-y-2 text-xs">
                {otherServices.map((os) => (
                  <li key={os.id}>
                    <Link
                      to={`/services/${os.slug}`}
                      className="text-[#1C1C1C]/80 hover:text-[#9a3820] hover:bg-[#F8F5EF] p-2 rounded transition-colors block font-medium"
                    >
                      {os.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
