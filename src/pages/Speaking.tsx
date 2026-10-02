import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mic, Quote } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';

export const Speaking: React.FC = () => {
  return (
    <>
      <SEO
        title="Speaking & Keynotes | Keatlegile Mabena"
        description="From finding my voice to helping others find theirs. Speaking on mental health, grief, resilience, healing and personal growth for schools, universities, workplaces and communities."
        keywords={['Keatlegile Mabena Speaking', 'Keynote Speaker', 'Mental Health Speaker', 'Resilience Speaker', 'Grief Speaker']}
        canonicalUrl="https://keatlegilemabena.co.za/speaking"
        breadcrumbs={[{ label: 'Speaking', path: '/speaking' }]}
      />

      <Breadcrumbs items={[{ label: 'Speaking' }]} />

      {/* Hero Header */}
      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Speaking"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5" />
            <span>Speaking</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
            Speaking &amp; Keynotes
          </h1>
        </div>
      </section>

      {/* Personal intro — speaking journey */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="space-y-4 text-base sm:text-lg text-[#1C1C1C]/85 leading-relaxed">
            <p>
              My speaking journey began in high school. Back then, I was discovering the power of using my voice: standing before others, sharing ideas and learning how words can make people think, feel and see things differently. I could not have known then how much that early experience would shape the work I do today.
            </p>
            <p>
              Over the years, that first spark has grown into a deeper purpose. I have developed from a young person learning to speak with confidence into a speaker who brings lived experience, reflection and care to conversations about mental health, grief, resilience, healing and personal growth. Today, I speak to schools, universities, workplaces, organisations and community groups, creating space for people to engage with subjects that are often difficult to talk about.
            </p>
            <p>
              I know that an audience does not need polished words alone; it needs to feel that the speaker understands why the conversation matters. I draw on my own journey, my work in education and the stories people carry to make each talk thoughtful, relatable and grounded. My aim is for people to leave feeling seen, with a new perspective and a meaningful next step to consider.
            </p>
          </div>
        </div>
      </section>

      {/* Core Speaking Topics */}
      <section className="py-20 bg-[#F8F5EF] border-y-2 border-[#D4AF37]/30 text-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="bg-[#7e2e19] text-white p-8 sm:p-10 rounded-sm space-y-6 border border-[#D4AF37]/30">
            <h2 className="font-serif text-2xl font-bold text-[#E2C45C]">
              Core speaking topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Mental health &amp; wellbeing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Grief &amp; healing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Resilience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Self-discovery &amp; identity</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Personal growth</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Career progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback from speaking engagements */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              Feedback from speaking engagements
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
              What institutions and audiences have said
            </h2>
          </div>

          <div className="space-y-8">
            {/* Feedback 1 */}
            <div className="bg-[#F8F5EF] p-6 sm:p-8 rounded-sm border-l-4 border-[#D4AF37] shadow-sm">
              <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-3" />
              <p className="font-serif text-base sm:text-lg italic text-[#1C1C1C]/85 leading-relaxed">
                &ldquo;Your presentation on gender equality and equity promotion in the workplace provided valuable insight and meaningful perspectives to the audience. Your engagement on this important topic was both informative and relatable.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20">
                <p className="text-sm font-bold text-[#7e2e19]">North-West University</p>
                <p className="text-xs text-[#1C1C1C]/60 italic">Gender Awareness Week Presentation</p>
              </div>
            </div>

            {/* Feedback 2 */}
            <div className="bg-[#F8F5EF] p-6 sm:p-8 rounded-sm border-l-4 border-[#D4AF37] shadow-sm">
              <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-3" />
              <p className="font-serif text-base sm:text-lg italic text-[#1C1C1C]/85 leading-relaxed">
                &ldquo;Mr Mabena created a space for honest reflection, accountability and growth. Students were encouraged to confront issues of identity, responsibility, integrity, and purpose in a way that was both empowering and practical.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20">
                <p className="text-sm font-bold text-[#7e2e19]">North-West University</p>
                <p className="text-xs text-[#1C1C1C]/60 italic">Gentlemen&rsquo;s Conference</p>
              </div>
            </div>

            {/* Feedback 3 */}
            <div className="bg-[#F8F5EF] p-6 sm:p-8 rounded-sm border-l-4 border-[#D4AF37] shadow-sm">
              <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-3" />
              <p className="font-serif text-base sm:text-lg italic text-[#1C1C1C]/85 leading-relaxed">
                &ldquo;Your efforts in presenting &lsquo;Silencing the Imposter Syndrome&rsquo; to the entire Transnet Property division demonstrated not only technical skill but also a strong sense of responsibility and integrity.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20">
                <p className="text-sm font-bold text-[#7e2e19]">Transnet Property</p>
                <p className="text-xs text-[#1C1C1C]/60 italic">Wellness Wednesdays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F5EF] text-center border-t-2 border-[#D4AF37]">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
            Enquire about speaking
          </h2>
          <p className="text-sm text-[#1C1C1C]/80">
            Enquire about availability, keynote themes, and institutional speaking packages.
          </p>
          <Link
            to="/book-keatlegile?service=speaking"
            className="px-8 py-3.5 bg-[#7e2e19] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#9a3820] transition-colors inline-flex items-center gap-2 shadow-md"
          >
            <span>Enquire about speaking</span>
            <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
          </Link>
        </div>
      </section>
    </>
  );
};
