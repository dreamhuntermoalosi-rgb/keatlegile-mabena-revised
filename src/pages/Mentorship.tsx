import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { IMAGES } from '../data/images';

const MENTORSHIP_PILLARS = [
  {
    number: '1',
    title: 'Identity and self-discovery',
    description: 'Understand who you are, what matters to you and what you want your next chapter to look like.'
  },
  {
    number: '2',
    title: 'Emotional well-being and self-worth',
    description: 'Make space to process difficult experiences and strengthen the way you see and value yourself.'
  },
  {
    number: '3',
    title: 'Healthy relationships and boundaries',
    description: 'Recognise the boundaries, choices and relationship patterns that support your well-being and growth.'
  },
  {
    number: '4',
    title: 'Career clarity and personal direction',
    description: 'Explore what you want from your career and identify practical steps towards greater clarity and progress.'
  },
  {
    number: '5',
    title: 'Accountability and forward movement',
    description: 'Turn reflection into achievable action, with support to stay focused on the steps you choose.'
  }
];

export const Mentorship: React.FC = () => {
  return (
    <>
      <SEO
        title="Mentorship | Keatlegile Mabena"
        description="A thoughtful space to find your next step. One-on-one mentorship for people seeking clarity, confidence or direction in their personal or career lives."
        canonicalUrl="https://keatlegilemabena.co.za/mentorship"
        breadcrumbs={[{ label: 'Mentorship', path: '/mentorship' }]}
      />


      {/* Header Banner */}
      <section className="relative bg-[#7e2e19] text-white pt-5 pb-10 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Mentorship"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Mentorship</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
            Mentorship
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            A thoughtful space to find your next step.
          </p>
        </div>
      </section>

      {/* Personal intro */}
      <section className="pt-10 pb-15 bg-white text-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="space-y-4 text-base sm:text-lg text-[#1C1C1C]/85 leading-relaxed">
            <p>
              My growth has never been mine alone. Along the way, people opened doors for me, offered opportunities and stood beside me when I could not yet see in myself what they saw. Their belief did not do the growing for me, but it helped me believe that growth was possible. Each opportunity became a chance to rise, learn and take another step forward.
            </p>
            <p>
              That experience shapes the way I mentor. I want to offer others the kind of thoughtful support that can help them recognise their own potential, especially when uncertainty, grief, disappointment or self-doubt makes it hard to see a way ahead. My mentorship is for people who feel stuck, have lost confidence, are navigating change or want to make progress in their personal or career lives.
            </p>
            <p>
              Together, we make space to understand what is happening, reconnect with your strengths and identify practical next steps. I will not hand you a ready-made life plan; I will walk alongside you as you work out what moving forward can look like for you. This is personal-development mentorship; a space for reflection, encouragement and accountability as you build a future that feels more purposeful and your own.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mentorship Pillars */}
      <section className="py-20 bg-[#F8F5EF] border-y-2 border-[#D4AF37]/30 text-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              Core mentorship pillars
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
              What we work through together
            </h2>
          </div>

          <div className="space-y-6">
            {MENTORSHIP_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-6 sm:p-7 rounded-sm border border-[#D4AF37]/20 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all flex flex-col sm:flex-row gap-5"
              >
                <div className="w-12 h-12 shrink-0 bg-[#7e2e19] text-[#E2C45C] rounded-full flex items-center justify-center font-serif font-bold text-lg">
                  {pillar.number}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#7e2e19] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#1C1C1C]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this mentorship is for */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              Who this mentorship is for
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
              You don&rsquo;t need to have everything figured out
            </h2>
          </div>
          <div className="space-y-4 text-base text-[#1C1C1C]/85 leading-relaxed">
            <p>
              This one-on-one mentorship is for people seeking greater clarity, confidence or direction in their personal or career lives. You may be rebuilding your self-belief, working through a difficult chapter, strengthening your boundaries, considering a career change or trying to follow through on goals that matter to you.
            </p>
            <p>
              You do not need to have everything figured out before you begin. Each online, 60-minute session is tailored to your needs, goals and challenges.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/book-keatlegile?service=mentorship"
              className="px-7 py-3.5 bg-[#7e2e19] hover:bg-[#9a3820] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Apply for mentorship</span>
              <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
