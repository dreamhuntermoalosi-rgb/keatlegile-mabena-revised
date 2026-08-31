import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { INSIGHTS_ARTICLES } from '../data/firmData';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = INSIGHTS_ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <SEO
        title={`${article.title} | Keatlegile Mabena`}
        description={article.summary}
        ogType="article"
        breadcrumbs={[
          { label: 'Insights', path: '/insights' },
          { label: article.title, path: `/insights/${article.slug}` }
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Insights', path: '/insights' },
          { label: article.title }
        ]}
      />

      <article className="bg-white text-[#1C1C1C] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#004C4C] leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#1C1C1C]/70 pt-2 border-y border-[#D74B27]/30 py-3">
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-4 h-4 text-[#006666]" /> Author: {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D74B27]" /> Published: {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D74B27]" /> {article.readTime}
              </span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#004C4C] text-white p-8 rounded-sm shadow-lg space-y-4 border border-[#D74B27]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E86543]">
              <Sparkles className="w-4 h-4 text-[#D74B27]" /> Core Takeaways
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-white/90">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D74B27] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-sm sm:text-base text-[#1C1C1C]/85 leading-relaxed border-b border-gray-200 pb-12">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-8 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#004C4C]">
                More Reflections
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <div key={rel.id} className="p-6 bg-[#F8F5EF] rounded-sm border border-[#D74B27]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#1C1C1C]">{rel.title}</h4>
                    <p className="text-xs text-[#1C1C1C]/70 line-clamp-2">{rel.summary}</p>
                    <Link to={`/insights/${rel.slug}`} className="inline-flex items-center gap-1 text-xs font-bold text-[#006666] hover:underline pt-2">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};
