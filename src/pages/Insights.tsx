import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, Calendar, Clock, User, ArrowRight, Lightbulb } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { INSIGHTS_ARTICLES } from '../data/firmData';

export const InsightsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = INSIGHTS_ARTICLES.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <SEO
        title="Insights & Thoughts for the Journey | Keatlegile Mabena"
        description="Reflections and thought leadership on healing, purpose, self-discovery, career success, and transformation."
        canonicalUrl="https://keatlegilemabena.com/insights"
      />

      <Breadcrumbs items={[{ label: 'Insights & Thoughts' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D74B27]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D74B27]/40 rounded-sm text-xs font-semibold text-[#E86543] uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>THOUGHTS FOR THE JOURNEY</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Insights &amp; Reflections
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Sometimes one idea can change the way you see your situation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          {/* Search Bar */}
          <div className="max-w-md relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F5EF] border border-black/10 rounded-sm text-xs focus:outline-none focus:border-[#D74B27]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ y: -4 }}
                className="bg-[#F8F5EF] p-8 rounded-sm border border-[#D74B27]/30 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-[#1C1C1C]/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D74B27]" />
                      <span>{article.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D74B27]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-[#004C4C]">
                    {article.title}
                  </h2>

                  <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006666] hover:text-[#D74B27] transition-colors pt-2"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
