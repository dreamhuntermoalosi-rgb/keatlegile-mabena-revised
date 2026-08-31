import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  Building2,
  Compass,
  FileText,
  HeartHandshake,
  ShieldCheck,
  Mail,
  Phone,
  Globe
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CORE_VALUES, FIRM_DETAILS } from '../data/firmData';
import { IMAGES } from '../data/images';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Keatlegile Mabena | Academic & Professional Profile"
        description="Comprehensive profile of Keatlegile Mabena — Speaker, Career Success Expert, Author, Philanthropist, and Specialist in Human & Social Development."
        keywords={[
          'Keatlegile Mabena',
          'Academic Profile South Africa',
          'Development Studies Specialist',
          'Career Success Expert',
          'Youth Empowerment Mentor',
          'Author South Africa'
        ]}
        canonicalUrl="https://keatlegilemabena.co.za/about"
        ogImage={IMAGES.profileCard}
      />

      <Breadcrumbs items={[{ label: 'Academic & Professional Profile' }]} />

      {/* Hero Header - Institutional Academic Profile Style */}
      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header Copy */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>FACULTY &amp; PRACTITIONER PROFILE</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                Keatlegile Mabena
              </h1>
              <p className="text-lg sm:text-xl text-[#E2C45C] font-serif italic">
                Speaker • Career Success Expert • Author • Philanthropist &amp; Development Specialist
              </p>
              <p className="text-base text-white/85 max-w-2xl leading-relaxed pt-2">
                Grounding human development, career advancement, emotional resilience, and socio-economic empowerment in lived experience and structured institutional frameworks.
              </p>
            </div>

            {/* Right Quick-Facts Badge */}
            <div className="lg:col-span-4 bg-[#003333]/90 border border-[#D4AF37]/40 p-6 rounded-sm space-y-3 shadow-xl text-xs text-white/90">
              <div className="text-[11px] font-bold text-[#E2C45C] uppercase tracking-widest border-b border-white/10 pb-2">
                Institutional Overview
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#E2C45C] shrink-0" />
                <span>Focus: <strong>Human &amp; Social Development</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#E2C45C] shrink-0" />
                <span>Enterprise: <strong>MBN Empire Founder</strong></span>
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
              <div className="text-xs font-bold tracking-widest text-[#006666] uppercase flex items-center gap-2 border-b border-gray-100 pb-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Biographical Overview &amp; Foundations</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#004C4C] leading-snug">
                Rooted in Lived Experience. Committed to Institutional &amp; Human Transformation.
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-[#1C1C1C]/85 leading-relaxed">
                <p>
                  Growing up in <strong>Shakung Village, North-West Province</strong>, Keatlegile Mabena experienced firsthand the socio-economic challenges, structural limitations, and personal uncertainties that confront youth across South Africa’s rural and township communities. 
                </p>
                <p>
                  Rather than allowing circumstances to define his trajectory, Keatlegile channeled these early realities into an enduring commitment to <strong>education, self-discovery, career advancement, and institutional governance</strong>. His journey combines rigorous academic development, hands-on enterprise leadership, published authorship, and high-impact community mentorship.
                </p>
                <p>
                  Today, Keatlegile Mabena operates at the intersection of <strong>human development studies and practical career execution</strong>, providing individuals, graduates, corporate teams, and educational institutions with clear, actionable models to move from uncertainty towards purpose, confidence, and meaningful impact.
                </p>
              </div>

              {/* Institutional Quote Box */}
              <div className="pt-4 border-t border-black/10">
                <blockquote className="font-serif text-lg italic text-[#004C4C] border-l-4 border-[#D4AF37] pl-4 py-2 bg-[#F8F5EF] rounded-r-sm">
                  "Healing, self-discovery, purpose, confidence, career success, and institutional governance sit at the heart of everything we build."
                </blockquote>
              </div>
            </div>

            {/* Right Column - Profile Image & Core Capabilities Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8F5EF] p-4 rounded-sm border-2 border-[#D4AF37]/40 shadow-xl overflow-hidden">
                <img
                  src={IMAGES.profileCard}
                  alt="Keatlegile Mabena Profile"
                  className="w-full h-80 object-cover rounded-sm shadow-md mb-4 border border-black/5"
                />
                <div className="space-y-2 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#004C4C]">Keatlegile Mabena</h3>
                  <p className="text-xs text-[#006666] font-semibold uppercase tracking-wider">
                    Author, Speaker &amp; Social Development Leader
                  </p>
                </div>
              </div>

              {/* Core Values / Institutional Pillars */}
              <div className="bg-[#004C4C] text-white p-6 rounded-sm border border-[#D4AF37]/40 space-y-4 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[#E2C45C] border-b border-white/10 pb-2">
                  Core Foundational Pillars
                </h3>
                <div className="space-y-3 text-xs text-white/90">
                  {CORE_VALUES.map((val, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-bold text-[#E2C45C] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{val.name}</span>
                      </div>
                      <p className="text-[11px] text-white/75 pl-6">{val.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Departmental Specializations & Areas of Expertise */}
      <section className="py-20 bg-[#F8F5EF] border-y border-[#D4AF37]/30 text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#006666] uppercase border-b-2 border-[#D4AF37] pb-1">
              DOMAINS OF SPECIALIZATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#004C4C]">
              Areas of Focus &amp; Practical Execution
            </h2>
            <p className="text-sm text-[#1C1C1C]/75">
              Bridging academic insights with real-world application across key human and institutional development pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Domain 1 */}
            <div className="bg-white p-6 rounded-sm border-t-4 border-[#004C4C] shadow-md hover:shadow-xl transition-shadow space-y-3">
              <div className="w-10 h-10 bg-[#004C4C]/10 text-[#004C4C] rounded-sm flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#004C4C]">
                Human &amp; Career Development
              </h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                Graduate employability, career trajectory modeling, CV and interview strategy, and transition guidance for entering the modern workforce.
              </p>
            </div>

            {/* Domain 2 */}
            <div className="bg-white p-6 rounded-sm border-t-4 border-[#D4AF37] shadow-md hover:shadow-xl transition-shadow space-y-3">
              <div className="w-10 h-10 bg-[#D4AF37]/10 text-[#004C4C] rounded-sm flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#004C4C]">
                Youth &amp; Community Mentorship
              </h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                Direct engagement with students and young adults in rural and township schools to ignite self-worth, emotional healing, and goal setting.
              </p>
            </div>

            {/* Domain 3 */}
            <div className="bg-white p-6 rounded-sm border-t-4 border-[#006666] shadow-md hover:shadow-xl transition-shadow space-y-3">
              <div className="w-10 h-10 bg-[#006666]/10 text-[#006666] rounded-sm flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#004C4C]">
                Authorship &amp; Intellectual Work
              </h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                Publishing books and reflective essays that serve as self-coaching manuals (*"Walking Through the Valley of Death"*, *"Finding My Voice"*).
              </p>
            </div>

            {/* Domain 4 */}
            <div className="bg-white p-6 rounded-sm border-t-4 border-[#003333] shadow-md hover:shadow-xl transition-shadow space-y-3">
              <div className="w-10 h-10 bg-[#003333]/10 text-[#003333] rounded-sm flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#004C4C]">
                Institutional Strategy &amp; Governance
              </h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                Advising organizations on corporate social responsibility (CSR), strategic compliance, youth development alignment, and MBN Empire enterprise initiatives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Teaching, Mentorship & Student Engagement Portfolio */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#006666] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
                STRUCTURED METHODOLOGY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#004C4C]">
                Teaching, Mentorship &amp; Campus Engagement
              </h2>
              <p className="text-sm sm:text-base text-[#1C1C1C]/85 leading-relaxed">
                Mentorship is not treated as abstract inspiration, but as a structured, step-by-step framework. Keatlegile Mabena conducts campus masterclasses, school outreach programs, and executive mentorship sessions across 4 key phases:
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[#F8F5EF] rounded border-l-4 border-[#004C4C]">
                  <span className="font-bold text-[#004C4C]">Phase 1: Emotional &amp; Mindset Healing</span>
                  <p className="text-[#1C1C1C]/75 pt-1">Addressing past trauma, overcoming imposter syndrome, and cultivating emotional stability.</p>
                </div>
                <div className="p-3 bg-[#F8F5EF] rounded border-l-4 border-[#D4AF37]">
                  <span className="font-bold text-[#004C4C]">Phase 2: Self-Discovery &amp; Talent Identification</span>
                  <p className="text-[#1C1C1C]/75 pt-1">Mapping unique personal strengths, values, and intrinsic motivators.</p>
                </div>
                <div className="p-3 bg-[#F8F5EF] rounded border-l-4 border-[#006666]">
                  <span className="font-bold text-[#004C4C]">Phase 3: Purpose &amp; Career Alignment</span>
                  <p className="text-[#1C1C1C]/75 pt-1">Formulating clear academic and career roadmaps with industry relevance.</p>
                </div>
                <div className="p-3 bg-[#F8F5EF] rounded border-l-4 border-[#003333]">
                  <span className="font-bold text-[#004C4C]">Phase 4: Actionable Execution &amp; Branding</span>
                  <p className="text-[#1C1C1C]/75 pt-1">Building professional presence, CV refinement, networking, and consistent execution.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Key Engagements Card */}
            <div className="lg:col-span-6 bg-[#004C4C] text-white p-8 rounded-sm border-2 border-[#D4AF37] shadow-2xl space-y-6">
              <div className="space-y-2 border-b border-white/20 pb-4">
                <div className="text-xs font-bold text-[#E2C45C] uppercase tracking-wider">
                  Impact Metrics &amp; Key Engagements
                </div>
                <h3 className="font-serif text-2xl font-bold">Keynote Addresses &amp; Workshops</h3>
              </div>

              <div className="space-y-4 text-xs text-white/90">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#E2C45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#E2C45C]">Higher Education &amp; Campus Keynotes</span>
                    <p className="text-white/75 pt-0.5">Delivering inspirational and career-readiness lectures to undergraduate and postgraduate students.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#E2C45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#E2C45C]">Rural &amp; Township School Initiatives</span>
                    <p className="text-white/75 pt-0.5">Mentorship visits providing study materials, career exposure, and self-confidence tools.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#E2C45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#E2C45C]">Corporate &amp; Public Sector Seminars</span>
                    <p className="text-white/75 pt-0.5">Keynote sessions on governance, resilience in leadership, and employee career trajectory management.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/speaking"
                  className="w-full py-3 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-widest rounded text-center block shadow transition-colors border border-[#E2C45C]"
                >
                  Explore Speaking Topics
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MBN Empire Enterprise Connection */}
      <section className="py-20 bg-[#003333] text-white border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#E2C45C] uppercase border-b border-[#D4AF37] pb-1 inline-block">
              ENTERPRISE &amp; COMMERCIAL ECOSYSTEM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Connecting Personal Brand Vision with MBN Empire.
            </h2>
            <p className="text-base text-white/85 leading-relaxed">
              While Keatlegile Mabena focuses on keynotes, mentorship, authorship, and thought leadership, <strong>MBN Empire</strong> serves as the commercial enterprise powering professional career consulting, business development, academic guidance, and publishing.
            </p>
            <div className="pt-2">
              <Link
                to="/mbn-empire"
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center gap-2 border border-[#E2C45C]"
              >
                <span>Learn About MBN Empire</span>
                <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 bg-white text-center border-t border-[#D4AF37]/40">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#004C4C]">
            Invite Keatlegile Mabena to Address Your Institution or Event
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            Available for keynote addresses, campus lectures, mentorship masterclasses, authorships, and strategic advisory.
          </p>
          <Link
            to="/start-a-conversation"
            className="px-8 py-3.5 bg-[#004C4C] hover:bg-[#006666] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors inline-flex items-center gap-2 border border-[#D4AF37]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
