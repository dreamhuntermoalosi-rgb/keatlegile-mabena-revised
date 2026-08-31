import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileText,
  AlertTriangle,
  Scale,
  Award,
  ArrowRight,
  Landmark
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';

export const GovernanceCompliance: React.FC = () => {
  return (
    <>
      <SEO
        title="Governance & Statutory Compliance Advisory | Matlala M&M Attorneys Inc."
        description="Flagship governance and compliance advisory for municipal councils, government institutions, and corporate boards across South Africa. PFMA, MFMA, and King IV expertise."
        keywords={[
          'Governance and Compliance Lawyer South Africa',
          'PFMA Compliance Lawyers Limpopo',
          'MFMA Audit Lawyers Polokwane',
          'Municipal Legislative Governance',
          'State Institutional Advisory'
        ]}
        breadcrumbs={[{ label: 'Governance & Compliance', path: '/governance-compliance' }]}
      />

      <Breadcrumbs items={[{ label: 'Governance & Compliance' }]} />

      {/* Flagship Hero Header */}
      <section className="relative bg-[#004C4C] text-white py-24 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Governance & Strategy"
            className="w-full h-full object-cover opacity-70 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003333]/85 via-[#004C4C]/60 to-[#003333]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004C4C]/75 via-transparent to-[#004C4C]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#006666] border border-[#D4AF37] rounded-sm text-xs font-bold text-[#E2C45C] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Governance &amp; Strategy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
            Governance That Withstands Scrutiny. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2C45C] via-[#D4AF37] to-[#A88616]">
              Compliance That Creates Confidence.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
            Supporting public sector bodies, institutions, and corporate boards with strategic governance alignment, organizational leadership, and compliance solutions.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/start-a-conversation"
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl inline-flex items-center gap-2 border border-[#E2C45C]"
            >
              <span>Schedule Advisory Session</span>
              <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Focus Pillars */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#006666] uppercase border-b-2 border-[#D4AF37] pb-1">
              Institutional Frameworks
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#004C4C]">
              Comprehensive Governance Solutions
            </h2>
            <p className="text-sm text-[#1C1C1C]/75">
              Empowering leadership teams to navigate operational mandates with integrity and strategic clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Governance Advisory',
                desc: 'Advising executive leaders, council speakers, and managers on procedural governance, delegation of authority, and decision-making frameworks.',
                icon: Building2
              },
              {
                title: 'Procurement & Compliance Audits',
                desc: 'Reviewing operational compliance and supply chain processes to support transparent, accountable organizational expenditure.',
                icon: FileText
              },
              {
                title: 'Risk Management Assessment',
                desc: 'Identifying regulatory vulnerabilities across operations before external audits or institutional reviews arise.',
                icon: AlertTriangle
              },
              {
                title: 'Policy & Framework Alignment',
                desc: 'Drafting, reviewing, and aligning organizational policies, codes of conduct, and administrative guidelines with regulatory standards.',
                icon: Scale
              },
              {
                title: 'Administrative Advisory',
                desc: 'Guiding executive teams through fair administrative procedures, resolution drafting, and compliance reviews.',
                icon: ShieldCheck
              },
              {
                title: 'Executive & Board Training',
                desc: 'Delivering specialized training workshops for boards, executive committees, and young leaders on fiduciary responsibilities.',
                icon: Award
              }
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-sm border-2 border-[#D4AF37]/30 shadow-md hover:shadow-2xl hover:border-[#006666] transition-all space-y-4 group"
              >
                <div className="w-12 h-12 bg-[#006666]/10 text-[#006666] group-hover:bg-[#006666] group-hover:text-white rounded-sm flex items-center justify-center transition-colors">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#004C4C] group-hover:text-[#006666] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-20 bg-[#F8F5EF] border-t border-[#006666]/10 text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#006666] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              Strategic Insight
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#004C4C]">
              Why Governance Alignment Is Key To Success
            </h2>
            <p className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed">
              In public and private organizations alike, procedural ambiguities or weak governance frameworks slow execution and damage trust.
            </p>
            <p className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed">
              We provide proactive reviews, strategic policy frameworks, and guidance to ensure organizational decision-making is robust, transparent, and legally defensible.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#006666] shrink-0 mt-0.5" />
                <span>Protection against operational inefficiencies and procedural errors</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#006666] shrink-0 mt-0.5" />
                <span>Defensible administrative procedures and delegation frameworks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#006666] shrink-0 mt-0.5" />
                <span>Strict adherence to fairness and compliance standards</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
              <img
                src={IMAGES.boardroom}
                alt="Executive Boardroom"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004C4C] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#1C1C1C]/90 text-white border-l-4 border-[#D4AF37] rounded-r-sm">
                <div className="text-xs font-bold text-[#E2C45C] uppercase mb-1">Executive Leadership</div>
                <div className="text-xs text-white/90">Keatlegile Mabena &amp; MBN Empire Advisory</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#006666] text-white border-y-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Strengthen Governance in Your Institution Today
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Book an executive consultation or request a governance advisory session with Keatlegile Mabena.
          </p>
          <Link
            to="/start-a-conversation"
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm inline-flex items-center gap-2 shadow-lg border border-[#E2C45C]"
          >
            <span>Request Governance Advisory</span>
            <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
