import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Search,
  ShieldCheck,
  Compass,
  FileCheck2,
  Settings,
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const OurApproach: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();
  const steps = [
    {
      number: '01',
      title: 'Understand',
      desc: 'We conduct a thorough diagnosis of your unique operational, legislative, and institutional environment before issuing any legal advice.',
      icon: Search,
      details: 'In-depth consultation, reviewing existing governance structures, and identifying operational constraints.'
    },
    {
      number: '02',
      title: 'Assess',
      desc: 'Rigorous legal risk assessment against statutory frameworks including PFMA, MFMA, SPLUMA, PAJA, and common law.',
      icon: ShieldCheck,
      details: 'Auditing regulatory compliance, identifying liability exposures, and pinpointing contractual vulnerabilities.'
    },
    {
      number: '03',
      title: 'Strategise',
      desc: 'Formulating clear, actionable legal strategies that align strictly with constitutional principles and institutional goals.',
      icon: Compass,
      details: 'Developing legal roadmaps, procedural frameworks, and proactive risk mitigation protocols.'
    },
    {
      number: '04',
      title: 'Advise',
      desc: 'Delivering authoritative, unambiguous legal opinions and formal risk appraisals that enable executive decision-making.',
      icon: FileCheck2,
      details: 'Clear written opinions, council briefing memoranda, and executive risk appraisals.'
    },
    {
      number: '05',
      title: 'Implement',
      desc: 'Translating legal strategy into practical operational execution, contract drafting, and policy formulation.',
      icon: Settings,
      details: 'Drafting bulletproof SLAs, by-laws, and guiding council or corporate implementation steps.'
    },
    {
      number: '06',
      title: 'Protect',
      desc: 'Providing ongoing compliance monitoring, dispute defense, and court representation to safeguard institutional interests.',
      icon: Shield,
      details: 'High Court representation, CCMA advocacy, interdict proceedings, and legal audit updates.'
    }
  ];

  return (
    <>
      <SEO
        title="Strategic Legal Approach & Methodology | Matlala M&M Attorneys Inc."
        description="Our 6-step legal methodology combines rigorous statutory mastery with institutional understanding to deliver practical, enforceable outcomes."
        keywords={[
          'Legal Methodology Polokwane',
          'Legal Strategy Matlala M&M',
          'Strategic Legal Advisory South Africa'
        ]}
        breadcrumbs={[{ label: 'Our Strategic Approach', path: '/our-approach' }]}
      />

      <Breadcrumbs items={[{ label: 'Our Strategic Approach' }]} />

      {/* Hero Header */}
      <section className="relative bg-[#7e2e19] text-white py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Strategic Approach"
            className="w-full h-full object-cover opacity-70 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <span className="inline-block text-xs font-bold tracking-widest text-[#E2C45C] uppercase border-b-2 border-[#D4AF37] pb-1">
            Methodology &amp; Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
            Strategy Grounded in Real-World Purpose &amp; Transformation
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light">
            Combining structured methodology with personal growth, career success, and practical implementation to deliver outcomes that elevate lives.
          </p>
        </div>
      </section>

      {/* Philosophy Formula Banner */}
      <section className="py-12 bg-[#9a3820] text-white border-y-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E2C45C]">Our Core Equation</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Healing + Self-Discovery + Purpose = Sustainable Career Success
              </h2>
            </div>
            <button
              type="button"
              onClick={() =>
                openWhatsAppModal({
                  title: 'Start a Conversation',
                  subtitle: 'Explore our structured methodology and purpose-driven frameworks',
                  defaultService: 'General Direct Enquiry'
                })
              }
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shrink-0 shadow border border-[#E2C45C] cursor-pointer"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Animated Process Timeline */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1">
              Step-by-Step Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#7e2e19]">
              How We Drive Personal &amp; Career Transformation
            </h2>
            <p className="text-sm text-[#1C1C1C]/75">
              A structured roadmap ensuring every coaching session, book, or service moves you from pain to power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, idx) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-sm border-2 border-[#D4AF37]/30 shadow-md hover:shadow-2xl hover:border-[#9a3820] transition-all relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-[#D4AF37]/30 group-hover:text-[#9a3820]/20 transition-colors">
                  {s.number}
                </div>

                <div className="w-12 h-12 bg-[#9a3820]/10 text-[#9a3820] group-hover:bg-[#9a3820] group-hover:text-white rounded-sm flex items-center justify-center transition-colors mb-6">
                  <s.icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#7e2e19] mb-2">
                  {s.title}
                </h3>

                <p className="text-xs text-[#1C1C1C]/80 leading-relaxed mb-4">
                  {s.desc}
                </p>

                <div className="pt-4 border-t-2 border-gray-100 flex items-start gap-2 text-[11px] text-[#9a3820] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D4AF37]" />
                  <span>{s.details}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Implementation Explanation */}
      <section className="py-20 bg-[#F8F5EF] border-t-2 border-[#9a3820]/10 text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              Transformation Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7e2e19]">
              Why Structured Mentorship &amp; Strategy Matters
            </h2>
            <p className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed">
              Inspiration without strategy leads to temporary motivation. True career success and personal transformation require deep alignment between internal healing, purpose discovery, and strategic skill building.
            </p>
            <p className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed">
              Through Keatlegile Mabena's speaking engagements, mentorship programmes, authored books, and MBN Empire enterprise services, individuals and organizations receive practical, structured roadmaps designed for sustained excellence.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-sm border-2 border-[#D4AF37] shadow-xl space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#9a3820] border-b-2 border-gray-100 pb-2">
              Our Core Commitments
            </h3>
            <ul className="space-y-3 text-xs text-[#1C1C1C]/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#9a3820] shrink-0 mt-0.5" />
                <span>Empathetic, purpose-driven guidance tailored to your unique career path.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#9a3820] shrink-0 mt-0.5" />
                <span>Practical, actionable frameworks rather than generic motivational talk.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#9a3820] shrink-0 mt-0.5" />
                <span>End-to-end commercial excellence through MBN Empire services.</span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                type="button"
                onClick={() =>
                  openWhatsAppModal({
                    title: 'Connect With Us',
                    subtitle: 'Consulting, Mentorship & Growth Solutions',
                    defaultService: 'General Direct Enquiry'
                  })
                }
                className="w-full py-3 bg-[#9a3820] hover:bg-[#7e2e19] text-white text-xs font-bold uppercase tracking-widest rounded-sm text-center block shadow transition-colors border border-[#D4AF37]/40 cursor-pointer"
              >
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
