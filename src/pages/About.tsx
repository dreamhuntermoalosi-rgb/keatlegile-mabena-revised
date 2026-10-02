import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  Building2,
  ChevronDown,
  ChevronUp,
  FileText,
  HeartHandshake,
  Mic,
  ShieldCheck,
  Mail,
  Phone,
  Globe,
  Briefcase,
  Layers,
  Medal,
  Calendar,
  BookmarkCheck,
  Check,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CORE_VALUES, FIRM_DETAILS } from '../data/firmData';
import { LETTERS } from '../data/mediaData';
import { IMAGES } from '../data/images';

export const About: React.FC = () => {
  // Academic Accordion state
  const [activeAccordion, setActiveAccordion] = useState<string | null>('qualifications');

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const qualificationsList = [
    {
      title: 'Master of Social Sciences: Population and Sustainable Development',
      institution: 'North-West University',
      year: '2020',
      badge: 'Postgraduate Master Degree',
      highlight: false
    },
    {
      title: 'Honours bachelor of Social science: Population studies',
      institution: 'North-West University',
      year: '2018',
      distinction: 'Cum laude',
      badge: 'Honours Degree (Distinction)',
      highlight: true
    },
    {
      title: 'Bachelor of Social Science: Population and Development Studies',
      institution: 'North-West University',
      year: '2017',
      distinction: 'Cum laude',
      badge: 'Undergraduate Degree (Distinction)',
      highlight: true
    },
    {
      title: 'Moderator Training - NQF level 6',
      institution: 'ENJO Consultants',
      year: '2022',
      badge: 'Professional Accreditation',
      highlight: false
    },
    {
      title: 'Assessor Training - NQF level 5 (Conduct Outcomes-based Assessments)',
      institution: 'Primeserv Training Consulting Services',
      year: '2020',
      badge: 'Professional Accreditation',
      highlight: false
    }
  ];

  const positionsAndAwardsList = [
    {
      title: '2018 NWU: Certificate of Academic excellence: Honours bachelor of Social science - Population studies with Distinction (Cum Laude)',
      type: 'Academic Excellence Award'
    },
    {
      title: '2017 NWU: Certificate of Academic excellence: BSocSc in Population and Development Studies with Distinction (Cum Laude)',
      type: 'Academic Excellence Award'
    },
    {
      title: 'National Research Foundation (NRF) Freestanding, Innovation and Scarce Skills Masters Scholarship',
      type: 'Masters Scholarship (2018)'
    },
    {
      title: 'Golden Key International Society Membership: Best International Academic Performance recognition',
      type: 'Honor Society Recognition (2015)'
    },
    {
      title: 'Certificate for Best performing 2014 First year student in Population and Development Studies',
      type: 'Top Student Award (2014)'
    },
    {
      title: 'Certificate for being a Supplemental Instruction Leader (Tutor) - NWU (Philosophy Dept.)',
      type: 'Supplemental Instruction Leader (2017)'
    },
    {
      title: 'Certificate for being a Supplemental Instruction Leader (Tutor) - NWU (Philosophy Dept.)',
      type: 'Supplemental Instruction Leader (2016)'
    },
    {
      title: 'Post-graduate Assistant: NWU (Population Training and Research Unit)',
      type: 'Academic Appointment (2017)'
    },
    {
      title: 'Student Assistant: NWU (English Dept.)',
      type: 'Departmental Appointment (2016)'
    },
    {
      title: 'South African Development Association (SADSA)',
      type: 'Professional Association'
    }
  ];

  return (
    <>
      <SEO
        title="About Me | Keatlegile Mabena"
        description="Combining qualifications in Population & Sustainable Development Studies with published authorship, youth mentorship, and keynote speaking."
        keywords={[
          'Keatlegile Mabena',
          'About Keatlegile Mabena',
          'South African Author',
          'Speaker South Africa',
          'Mentor',
          'UNISA Lecturer',
          'PhD Candidate',
          'Sunday World Unsung Hero'
        ]}
        canonicalUrl="https://keatlegilemabena.co.za/about"
        ogImage={IMAGES.profileCard}
      />

      <Breadcrumbs items={[{ label: 'Personal & Professional Profile' }]} />

      {/* Hero Header */}
      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] [clip-path:inset(0)] overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img
            src={IMAGES.pageTitleBg}
            alt="Keatlegile Mabena Background"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header Copy */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>PERSONAL &amp; PROFESSIONAL PROFILE</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Keatlegile Mabena
              </h1>
              <p className="text-base text-white/85 max-w-2xl leading-relaxed pt-2">
                Combining qualifications in Population &amp; Sustainable Development Studies with published authorship, youth mentorship, and keynote speaking.
              </p>
            </div>

            {/* Right Quick-Facts Badge removed */}

          </div>
        </div>
      </section>

      {/* Main Biography & Professional Background Section */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - Main Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold tracking-widest text-[#9a3820] uppercase flex items-center gap-2 border-b-2 border-gray-100 pb-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>About Keatlegile Mabena</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#7e2e19] leading-snug">
                From Shakung Village to a life of service
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#1C1C1C]/85 leading-relaxed">
                <p>
                  I&rsquo;m Keatlegile Mabena, a South African self-published, best-selling author, speaker and mentor, born and raised in Shakung, North-West. Through my mentorship and speaking, I create space for honest conversations about resilience, self-discovery, career progress, healing and grief. I support people as they make sense of what they have lived through and find direction for what comes next.
                </p>
                <p>
                  My books reflect that journey. In <em>Breaking the Chains: Bailing Out the Imprisoned Potential, Power and Persistence</em>, I write about facing pain and recognising the possibility of change. My forthcoming book, <em>The Weight I Didn&rsquo;t Choose: Healing, Rising and Becoming</em>, is for those learning to live beyond the grief, wounds and burdens they never chose.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="relative bg-[#F8F5EF] border-l-4 border-[#D4AF37] p-5 sm:p-6 rounded-r-sm">
                <p className="font-serif text-base sm:text-lg italic text-[#7e2e19] leading-relaxed">
                  &ldquo;Healing, self-discovery, purpose and confidence shape the way I live, lead and serve. I believe growth takes courage, and that discipline helps us keep moving towards the lives we are becoming.&rdquo;
                </p>
                <footer className="mt-3 text-xs font-bold uppercase tracking-wider text-[#9a3820]">
                  &mdash; Keatlegile Mabena
                </footer>
              </blockquote>
            </div>

            {/* Right Column - Profile Image & Core Capabilities Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8F5EF] p-4 rounded-sm border-2 border-[#D4AF37]/40 shadow-xl overflow-hidden">
                <div className="w-full h-[520px] sm:h-[750px] md:h-[900px] lg:h-[680px] rounded-sm overflow-hidden border-2 border-[#D4AF37]/25 bg-gradient-to-b from-[#7e2e19]/10 via-[#F8F5EF] to-[#7e2e19]/5 flex items-center justify-center">
                  <img
                    src={IMAGES.profileCard}
                    alt="Keatlegile Mabena Profile"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transform-gpu"
                  />
                </div>
                <div className="space-y-2 text-center pt-3">
                  <h3 className="font-serif text-xl font-bold text-[#7e2e19]">Keatlegile Mabena</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATIONAL VALUES — full-width horizontal section */}
      <section className="py-16 bg-[#7e2e19] text-white border-y-2 border-[#D4AF37]/40">
        <div className="px-4 sm:px-8 space-y-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#E2C45C] border-b-2 border-white/10 pb-3">
              Foundational Values
            </h3>
          </div>
          {/* Full-width horizontal grid — 5 values across on desktop */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-xs text-white/90">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="font-bold text-[#E2C45C] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{val.name}</span>
                </div>
                <p className="text-[11px] text-white/75 pl-6 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Footer Section */}
      <section className="py-16 bg-[#F8F5EF] text-[#1C1C1C] text-center border-t-2 border-[#D4AF37]/40">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#7e2e19]">
            Invite Keatlegile Mabena to speak or collaborate
          </h2>
          <p className="text-sm text-[#1C1C1C]/70">
            Available for speaking engagements, facilitated conversations, mentorship programmes and purpose-driven collaborations across educational, corporate and community settings.
          </p>
          <Link
            to="/book-keatlegile"
            className="px-8 py-3.5 bg-[#7e2e19] hover:bg-[#9a3820] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors inline-flex items-center gap-2 border border-[#D4AF37]/40 shadow-md"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
