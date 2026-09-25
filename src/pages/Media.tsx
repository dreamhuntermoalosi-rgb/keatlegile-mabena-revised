import React from 'react';
import { motion } from 'motion/react';
import {
  Newspaper,
  Twitter,
  Youtube,
  ExternalLink,
  Play
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';
import { MEDIA_ARTICLES, MEDIA_VIDEOS } from '../data/mediaData';

export const Media: React.FC = () => {
  const articles = MEDIA_ARTICLES.filter((a) => a.type === 'article');
  const socials = MEDIA_ARTICLES.filter((a) => a.type === 'social');

  return (
    <>
      <SEO
        title="Media & Press | Keatlegile Mabena"
        description="Media features, press coverage, and video appearances of Keatlegile Mabena — Speaker, Author, and Mentor."
        keywords={[
          'Keatlegile Mabena Media',
          'Press Coverage',
          'Speaker South Africa',
          'Author Interviews',
          'Media Appearances'
        ]}
        canonicalUrl="https://keatlegilemabena.co.za/media"
        breadcrumbs={[{ label: 'Media', path: '/media' }]}
      />

      <Breadcrumbs items={[{ label: 'Media' }]} />

      {/* Hero Header */}
      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Media & Press"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" />
            <span>MEDIA &amp; PRESS</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Features, Coverage &amp; Appearances
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            A collection of media features, press coverage, and video appearances of Keatlegile Mabena across publications and platforms.
          </p>
        </div>
      </section>

      {/* Video Appearances */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              VIDEO APPEARANCES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
              Watch &amp; Listen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDIA_VIDEOS.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F8F5EF] rounded-sm border border-[#D4AF37]/20 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Responsive YouTube embed */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9a3820]">
                    <Youtube className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1C1C1C] leading-tight">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles & Press */}
      <section className="py-20 bg-[#F8F5EF] border-t-2 border-[#D4AF37]/30 text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              PRESS &amp; FEATURES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
              In the News
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm border border-[#D4AF37]/20 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9a3820]">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{article.source}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1C1C1C] leading-tight group-hover:text-[#7e2e19] transition-colors">
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9a3820] group-hover:text-[#D4AF37] transition-colors">
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Posts (X / Twitter) */}
      <section className="py-20 bg-white border-t-2 border-[#D4AF37]/30 text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#9a3820] uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">
              SOCIAL FEATURES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
              Featured on Social
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socials.map((post, idx) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F8F5EF] p-6 rounded-sm border border-[#D4AF37]/20 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9a3820]">
                    <Twitter className="w-3.5 h-3.5" />
                    <span>{post.source}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1C1C1C] leading-tight group-hover:text-[#7e2e19] transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9a3820] group-hover:text-[#D4AF37] transition-colors">
                  <span>View Post</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-[#7e2e19] text-white text-center border-t-2 border-[#D4AF37]">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Engage Keatlegile Mabena for Your Next Feature
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            For media enquiries, interviews, or speaking engagements, get in touch directly.
          </p>
          <a
            href="mailto:info@keatlegilemabena.co.za"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all border border-[#E2C45C] shadow-md"
          >
            <span>Media Enquiry</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
};
