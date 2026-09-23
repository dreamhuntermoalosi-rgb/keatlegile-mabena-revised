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
      title: 'Member of Population Association of Southern Africa (PASA)',
      type: 'Professional Membership'
    },
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

  const publicationsList = [
    {
      title: 'Breaking the Chains: Bailing Out the Imprisoned Potential, Power and Persistence',
      category: 'Published Book (2019)',
      subtitle: 'ISBN: 9780620840668 | 126 Pages',
      description: 'An inspiring and actionable exploration of personal liberation, dismantling internal constraints, and bailing out imprisoned potential across life and personal growth.'
    },
    {
      title: 'Upcoming Book',
      category: 'Forthcoming Publication',
      subtitle: 'In Manuscript Development',
      description: 'A new manuscript expanding on healing, purpose, emotional resilience, and personal growth (Coming Soon).'
    }
  ];

  return (
    <>
      <SEO
        title="About Keatlegile Mabena | Personal & Professional Profile"
        description="Official profile of Keatlegile Mabena — Master of Social Sciences (NWU), Cum Laude graduate, Author, Speaker, and Mentor."
        keywords={[
          'Keatlegile Mabena',
          'Profile',
          'North-West University Cum Laude',
          'Population and Sustainable Development',
          'Youth Mentor',
          'Author',
          'Keynote Speaker',
          'Qualifications Keatlegile Mabena',
          'PASA Member'
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
              <p className="text-xs sm:text-sm text-[#E2C45C] font-serif italic tracking-wide">
                Speaker | Author | Mentor
              </p>
              <p className="text-base text-white/85 max-w-2xl leading-relaxed pt-2">
                Combining qualifications in Population &amp; Sustainable Development Studies with published authorship, youth mentorship, and keynote speaking.
              </p>
            </div>

            {/* Right Quick-Facts Badge */}
            <div className="lg:col-span-4 bg-[#5a1f10]/90 border border-[#D4AF37]/40 p-6 rounded-sm space-y-3 shadow-xl text-xs text-white/90">
              <div className="text-[11px] font-bold text-[#E2C45C] uppercase tracking-widest border-b-2 border-white/10 pb-2 flex items-center justify-between">
                <span>Educational Background</span>
                <span className="text-[10px] text-[#E2C45C]">NWU Alumnus</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#E2C45C] shrink-0" />
                <span><strong>MSocSc</strong> (NWU, 2020)</span>
              </div>
              <div className="flex items-center gap-2">
                <Medal className="w-4 h-4 text-[#E2C45C] shrink-0" />
                <span><strong>Honours &amp; BSocSc</strong> (<em>Cum Laude</em>)</span>
              </div>
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-[#E2C45C] shrink-0" />
                <span><strong>Published Author &amp; Mentor</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E2C45C] shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.contact.email}`} className="hover:text-[#E2C45C] underline">
                  {FIRM_DETAILS.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E2C45C] shrink-0" />
                <a href={`tel:${FIRM_DETAILS.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#E2C45C]">
                  {FIRM_DETAILS.contact.phone}
                </a>
              </div>
            </div>

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
                <span>Biographical Foundations</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#7e2e19] leading-snug">
                From Lived Experience to Academic Distinction and Impact.
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-[#1C1C1C]/85 leading-relaxed">
                <p>
                  From an early age, Keatlegile Mabena experienced firsthand the socio-economic challenges, structural limitations, and personal uncertainties that confront youth across under-resourced communities.
                </p>
                <p>
                  Rather than allowing circumstances to define his trajectory, Keatlegile channeled these realities into rigorous academic discipline and leadership. At <strong>North-West University</strong>, he earned his <strong>Bachelor of Social Science</strong> with Distinction (<em>Cum Laude</em>, 2017), his <strong>Honours Bachelor of Social Science</strong> with Distinction (<em>Cum Laude</em>, 2018), and subsequently completed his <strong>Master of Social Sciences in Population and Sustainable Development</strong> (2020), supported by the prestigious <strong>National Research Foundation (NRF) Scarce Skills Masters Scholarship</strong>.
                </p>
                <p>
                  In addition to his academic research and lecturing assistantships at North-West University, Keatlegile expanded his qualifications with accredited <strong>Assessor (NQF Level 5)</strong> and <strong>Moderator (NQF Level 6)</strong> certifications, grounding his work in professional training, curriculum standards, and outcomes-based facilitation.
                </p>
                <p>
                  Today, through his books, keynote addresses, and structured mentorship programs, Keatlegile Mabena empowers individuals, students, and leaders to move from uncertainty to clarity, confidence, and purposeful achievement.
                </p>
              </div>

              {/* Quote Box */}
              <div className="pt-4 border-t-2 border-black/10">
                <blockquote className="font-serif text-lg italic text-[#7e2e19] border-l-4 border-[#D4AF37] pl-4 py-2 bg-[#F8F5EF] rounded-r-sm">
                  "Healing, self-discovery, purpose, confidence, mentorship, and institutional discipline sit at the heart of everything we build."
                </blockquote>
              </div>
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
                  <p className="text-xs text-[#9a3820] font-semibold uppercase tracking-wider">
                    {FIRM_DETAILS.positioningShort}
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-[#7e2e19] text-white p-6 rounded-sm border border-[#D4AF37]/40 space-y-4 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[#E2C45C] border-b-2 border-white/10 pb-2">
                  Foundational Values
                </h3>
                {/* Stacked on mobile, horizontal grid on tablet+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-white/90">
                  {CORE_VALUES.map((val, idx) => (
                    <div key={idx} className="space-y-1 sm:flex sm:flex-col sm:gap-1">
                      <div className="font-bold text-[#E2C45C] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{val.name}</span>
                      </div>
                      <p className="text-[11px] text-white/75 pl-6 sm:pl-6">{val.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL ACCORDIONS (PRECISE UNISA STYLE ACCORDION DOSSIER) */}
      <section className="py-20 bg-[#F8F5EF] border-y-2 border-[#D4AF37]/40 text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              CURRICULUM VITAE &amp; ACCREDITATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#7e2e19]">
              Qualifications, Positions &amp; Academic Awards
            </h2>
            <p className="text-sm text-[#1C1C1C]/75">
              Click the accordions below to review official academic degrees, professional assessor/moderator credentials, awards, fellowships, and authored publications.
            </p>
          </div>

          {/* Accordion Group */}
          <div className="space-y-4">
            
            {/* Accordion 1: Qualifications */}
            <div
              className={`bg-white rounded-sm border transition-all duration-200 overflow-hidden ${
                activeAccordion === 'qualifications' ? 'border-[#7e2e19] shadow-lg ring-1 ring-[#7e2e19]/20' : 'border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              <button
                onClick={() => toggleAccordion('qualifications')}
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors bg-white hover:bg-gray-50 focus:outline-none"
                aria-expanded={activeAccordion === 'qualifications'}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-sm ${activeAccordion === 'qualifications' ? 'bg-[#7e2e19] text-[#E2C45C]' : 'bg-[#F8F5EF] text-[#7e2e19]'}`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#9a3820]">
                      Academic &amp; Professional Qualifications
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#7e2e19]">
                      Qualifications
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#9a3820] hidden sm:inline">
                    {activeAccordion === 'qualifications' ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`p-1 rounded-full ${activeAccordion === 'qualifications' ? 'bg-[#7e2e19] text-[#E2C45C]' : 'bg-gray-100 text-gray-600'}`}>
                    {activeAccordion === 'qualifications' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {activeAccordion === 'qualifications' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t-2 border-gray-100 px-6 py-6 bg-[#FAFAF8]"
                  >
                    <div className="space-y-3">
                      {qualificationsList.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#D4AF37] transition-all"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                              <h4 className="font-serif text-base font-bold text-[#7e2e19]">
                                {item.title}
                                {item.distinction && (
                                  <span className="ml-2 inline-block text-xs font-serif italic text-[#A88616] font-normal">
                                    - {item.distinction}
                                  </span>
                                )}
                              </h4>
                            </div>
                            <p className="text-xs text-[#1C1C1C]/70 pl-4 font-medium">
                              {item.institution}, {item.year}
                            </p>
                          </div>

                          <div className="pl-4 sm:pl-0 shrink-0">
                            <span className="inline-block text-[11px] font-semibold bg-[#F8F5EF] text-[#7e2e19] border border-[#D4AF37]/30 px-2.5 py-1 rounded">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 2: Professional Positions, Fellowships & Awards */}
            <div
              className={`bg-white rounded-sm border transition-all duration-200 overflow-hidden ${
                activeAccordion === 'positions' ? 'border-[#7e2e19] shadow-lg ring-1 ring-[#7e2e19]/20' : 'border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              <button
                onClick={() => toggleAccordion('positions')}
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors bg-white hover:bg-gray-50 focus:outline-none"
                aria-expanded={activeAccordion === 'positions'}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-sm ${activeAccordion === 'positions' ? 'bg-[#7e2e19] text-[#E2C45C]' : 'bg-[#F8F5EF] text-[#7e2e19]'}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#9a3820]">
                      Academic Honors &amp; Institutional Appointments
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#7e2e19]">
                      Professional Positions, Fellowships &amp; Awards
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#9a3820] hidden sm:inline">
                    {activeAccordion === 'positions' ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`p-1 rounded-full ${activeAccordion === 'positions' ? 'bg-[#7e2e19] text-[#E2C45C]' : 'bg-gray-100 text-gray-600'}`}>
                    {activeAccordion === 'positions' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {activeAccordion === 'positions' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t-2 border-gray-100 px-6 py-6 bg-[#FAFAF8]"
                  >
                    <ul className="space-y-2.5">
                      {positionsAndAwardsList.map((item, idx) => (
                        <li
                          key={idx}
                          className="bg-white p-3.5 rounded-sm border border-gray-200 shadow-sm flex items-start justify-between gap-4 hover:border-[#D4AF37] transition-all"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#9a3820] shrink-0 mt-2" />
                            <span className="text-sm font-medium text-[#1C1C1C]">
                              {item.title}
                            </span>
                          </div>
                          <span className="text-[11px] font-semibold text-[#9a3820] bg-[#F8F5EF] px-2 py-0.5 rounded shrink-0 hidden md:inline">
                            {item.type}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 3: Publications & Authored Books */}
            <div
              className={`bg-white rounded-sm border transition-all duration-200 overflow-hidden ${
                activeAccordion === 'publications' ? 'border-[#7e2e19] shadow-lg ring-1 ring-[#7e2e19]/20' : 'border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              <button
                onClick={() => toggleAccordion('publications')}
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors bg-white hover:bg-gray-50 focus:outline-none"
                aria-expanded={activeAccordion === 'publications'}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-sm ${activeAccordion === 'publications' ? 'bg-[#7e2e19] text-[#E2C45C]' : 'bg-[#F8F5EF] text-[#7e2e19]'}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#9a3820]">
                      Published Works &amp; Literature
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#7e2e19]">
                      Authored Books &amp; Publications
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#9a3820] hidden sm:inline">
                    {activeAccordion === 'publications' ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`p-1 rounded-full ${activeAccordion === 'publications' ? 'bg-[#7e2e19] text-[#E2C45C]' : 'bg-gray-100 text-gray-600'}`}>
                    {activeAccordion === 'publications' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {activeAccordion === 'publications' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t-2 border-gray-100 px-6 py-6 bg-[#FAFAF8]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {publicationsList.map((book, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-5 rounded-sm border border-gray-200 shadow-sm space-y-3 hover:border-[#D4AF37] transition-all"
                        >
                          <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#9a3820] bg-[#F8F5EF] px-2 py-0.5 rounded">
                              {book.category}
                            </span>
                            <span className="text-xs text-[#D4AF37] font-semibold">Keatlegile Mabena</span>
                          </div>
                          <h4 className="font-serif text-lg font-bold text-[#7e2e19]">
                            "{book.title}"
                          </h4>
                          {book.subtitle && (
                            <p className="text-[11px] font-mono font-semibold text-[#A88616]">
                              {book.subtitle}
                            </p>
                          )}
                          <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                            {book.description}
                          </p>
                          <div className="pt-2">
                            <Link
                              to="/books"
                              className="text-xs font-bold text-[#9a3820] hover:text-[#7e2e19] inline-flex items-center gap-1.5"
                            >
                              <span>Learn more about this book</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* Domains of Specialization */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1">
              CORE DOMAINS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#7e2e19]">
              Areas of Focus &amp; Practical Execution
            </h2>
            <p className="text-sm text-[#1C1C1C]/75">
              Connecting Population and Development Studies expertise with high-impact youth mentorship, authorship, and speaking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Domain 1: Keynote Speaking */}
            <div className="bg-white p-6 rounded-sm border-t-4 border-[#7e2e19] shadow-md hover:shadow-xl transition-shadow space-y-3 border-x border-b-2 border-gray-100">
              <div className="w-10 h-10 bg-[#7e2e19]/10 text-[#7e2e19] rounded-sm flex items-center justify-center">
                <Mic className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#7e2e19]">
                Keynote Speaking
              </h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                Transformational keynote addresses for corporate summits, university convocations, youth conferences, and institutional gatherings.
              </p>
            </div>

            {/* Domain 2: Authorship & Publications */}
            <div className="bg-white p-6 rounded-sm border-t-4 border-[#D4AF37] shadow-md hover:shadow-xl transition-shadow space-y-3 border-x border-b-2 border-gray-100">
              <div className="w-10 h-10 bg-[#D4AF37]/10 text-[#7e2e19] rounded-sm flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#7e2e19]">
                Authorship &amp; Publications
              </h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                Published author of <em>Breaking the Chains: Bailing Out the Imprisoned Potential, Power and Persistence</em> and ongoing thought leadership.
              </p>
            </div>

            {/* Domain 3: Youth & Student Mentorship */}
            <div className="bg-white p-6 rounded-sm border-t-4 border-[#9a3820] shadow-md hover:shadow-xl transition-shadow space-y-3 border-x border-b-2 border-gray-100">
              <div className="w-10 h-10 bg-[#9a3820]/10 text-[#9a3820] rounded-sm flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#7e2e19]">
                Youth &amp; Student Mentorship
              </h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                Structured 1-on-1 and cohort mentorship pathways for high school learners and university students to foster purpose and resilience.
              </p>
            </div>

            {/* Domain 4: Empowerment Workshops */}
            <div className="bg-white p-6 rounded-sm border-t-4 border-[#5a1f10] shadow-md hover:shadow-xl transition-shadow space-y-3 border-x border-b-2 border-gray-100">
              <div className="w-10 h-10 bg-[#5a1f10]/10 text-[#5a1f10] rounded-sm flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#7e2e19]">
                Empowerment Workshops
              </h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                Interactive group masterclasses focusing on mindset transformation, discipline, goal-setting, and purpose discovery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Letters of Recognition */}
      <section className="py-20 bg-[#F8F5EF] border-t-2 border-[#D4AF37]/30 text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              LETTERS &amp; RECOGNITION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#7e2e19]">
              Formal Recognition
            </h2>
            <p className="text-sm text-[#1C1C1C]/75">
              Letters of appreciation, testimonial, and recognition received in acknowledgment of Keatlegile Mabena's work and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LETTERS.map((letter, idx) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm border-t-4 border-[#D4AF37] border-x border-b border-[#D4AF37]/20 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-[#7e2e19]/10 rounded-sm flex items-center justify-center text-[#9a3820]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a3820]">
                      {letter.type}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1C1C1C] leading-tight">
                      {letter.title}
                    </h3>
                    <span className="text-[11px] text-[#1C1C1C]/50 uppercase tracking-wider">
                      {letter.format.toUpperCase()} Document
                    </span>
                  </div>
                </div>
                <a
                  href={letter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-sm"
                >
                  <span>View Letter</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 bg-[#7e2e19] text-white text-center border-t-2 border-[#D4AF37]/40">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#E2C45C]">
            Invite Keatlegile Mabena to Speak or Collaborate
          </h2>
          <p className="text-sm text-white/80">
            Available for keynote addresses, campus masterclasses, corporate empowerment sessions, and structured mentorship programs.
          </p>
          <Link
            to="/book-keatlegile"
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-widest rounded-sm transition-colors inline-flex items-center gap-2 border border-[#E2C45C] shadow-md"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
