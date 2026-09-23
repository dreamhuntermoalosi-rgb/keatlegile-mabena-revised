import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  ArrowRight,
  ShoppingBag,
  Hash,
  Calendar,
  FileText,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../data/images';
import { BOOKS } from '../data/firmData';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

type Book = (typeof BOOKS)[number];

export const Books: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <>
      <SEO
        title="Books & Authorship | Keatlegile Mabena"
        description="Books by Keatlegile Mabena — Breaking the Chains and The Weight I Did Not Choose."
        keywords={[
          'Keatlegile Mabena Book',
          'Breaking the Chains',
          'The Weight I Did Not Choose',
          'South African Author',
          'Personal Development Books'
        ]}
        canonicalUrl="https://keatlegilemabena.co.za/books"
        ogImage={IMAGES.weightBookCover}
      />

      <Breadcrumbs items={[{ label: 'Books & Authorship' }]} />

      {/* Hero Header */}
      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Books & Authorship"
            className="w-full h-full object-cover opacity-60 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/85 via-[#7e2e19]/60 to-[#5a1f10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/75 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9a3820] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>AUTHORSHIP &amp; LITERARY WORKS</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold leading-tight">
            The Bookshop
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            Published works by Keatlegile Mabena. Order individual copies below, or reach out for school and organisational bulk purchases.
          </p>
        </div>
      </section>

      {/* Shop grid of book cards */}
      <section className="py-20 bg-[#F8F5EF] text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {BOOKS.map((book, idx) => (
              <BookCard key={book.id} book={book} index={idx} openWhatsAppModal={openWhatsAppModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Bulk / Institutional Orders CTA */}
      <section className="py-16 bg-[#7e2e19] text-white text-center border-t-2 border-[#D4AF37]/40">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#E2C45C]">
            Order Books for Yourself, Schools, or Your Organization
          </h2>
          <p className="text-sm text-white/80">
            For individual book orders, school distribution, or corporate bulk purchases accompanied by keynote talks, reach out directly.
          </p>
          <button
            type="button"
            onClick={() =>
              openWhatsAppModal({
                title: 'Order Copies & Bulk Inquiries',
                subtitle: 'Schools, Corporate Distribution & Group Orders',
                ctaType: 'book',
                defaultService: 'Book Order & Bulk Inquiry'
              })
            }
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-widest rounded-sm transition-colors inline-flex items-center gap-2 border border-[#E2C45C] cursor-pointer shadow-md"
          >
            <span>Order Copies &amp; Bulk Inquiries</span>
            <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
          </button>
        </div>
      </section>
    </>
  );
};

/* ---------------- Book Card ---------------- */

const BookCard: React.FC<{
  book: Book;
  index: number;
  openWhatsAppModal: (options?: {
    title?: string;
    subtitle?: string;
    ctaType?: 'speaking' | 'mentorship' | 'career' | 'book' | 'partnership' | 'conversation' | 'general';
    defaultService?: string;
  }) => void;
}> = ({ book, index, openWhatsAppModal }) => {
  const images = book.galleryImages.length > 0 ? book.galleryImages : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const hasGallery = images.length > 1;

  // Auto-advance the cover carousel every 5 seconds when there are multiple images
  useEffect(() => {
    if (!hasGallery) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [hasGallery, images.length]);

  const activeImage = images[activeIndex] ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-sm shadow-md border border-[#D4AF37]/20 overflow-hidden flex flex-col"
    >
      {/* Cover image area — auto-sliding carousel with pagination dots */}
      <div className="bg-[#F8F5EF] flex items-center justify-center relative border-b border-[#D4AF37]/20 overflow-hidden">
        {book.featured && (
          <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-[#D4AF37] text-[#1C1C1C] px-2.5 py-1 rounded z-20 shadow-md">
            New Release
          </span>
        )}
        {activeImage ? (
          <>
            {/* Stacked images cross-fade between slides */}
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${book.title} — image ${i + 1}`}
                className="w-full h-auto max-h-[60vh] object-cover absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
                aria-hidden={i !== activeIndex}
              />
            ))}
            {/* Spacer to give the absolute-positioned images height */}
            <img
              src={images[activeIndex]}
              alt=""
              aria-hidden="true"
              className="w-full h-auto max-h-[60vh] object-cover invisible pointer-events-none select-none"
            />
          </>
        ) : (
          <div className="w-full h-64 flex items-center justify-center text-center bg-[#F8F5EF] p-6">
            <span className="text-xs text-[#9a3820] uppercase tracking-wider font-semibold">
              Cover image coming soon
            </span>
          </div>
        )}

        {/* Pagination dots */}
        {hasGallery && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-[#D4AF37]'
                    : 'w-2 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-7 sm:p-8 space-y-4 flex-1 flex flex-col">
        <div className="space-y-2">
          <h2 className="font-serif text-2xl font-bold text-[#1C1C1C] leading-tight">
            {book.title}
          </h2>
          {book.subtitle && !book.hideSubtitleOnCard && (
            <p className="font-serif text-base text-[#7e2e19] italic leading-snug">
              {book.subtitle}
            </p>
          )}
        </div>

        <div className="text-xs text-[#1C1C1C]/60">
          by <span className="font-bold text-[#1C1C1C]">{book.author}</span>
        </div>

        {/* Description (only if provided) */}
        {book.description && (
          <p className="text-sm text-[#1C1C1C]/80 leading-relaxed">
            {book.description}
          </p>
        )}

        {/* Metadata (only where provided) */}
        {(book.year || book.pages || book.isbn) && (
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#1C1C1C]/70 pt-2 border-t border-[#D4AF37]/20">
            {book.year && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#9a3820]" /> Published {book.year}
              </span>
            )}
            {book.pages && (
              <span className="inline-flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#9a3820]" /> {book.pages} Pages
              </span>
            )}
            {book.isbn && (
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Hash className="w-3.5 h-3.5 text-[#9a3820]" /> ISBN: {book.isbn}
              </span>
            )}
          </div>
        )}

        {/* Price + Buy button */}
        <div className="mt-auto pt-5 flex flex-col sm:flex-row sm:items-center gap-4">
          {book.priceLabel && (
            <div className="text-2xl font-serif font-bold text-[#7e2e19]">{book.priceLabel}</div>
          )}
          {book.orderUrl ? (
            <a
              href={book.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center justify-center gap-2 border border-[#E2C45C] shadow-md"
            >
              <ShoppingBag className="w-4 h-4 text-[#1C1C1C]" />
              <span>{book.orderLabel}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#1C1C1C]" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() =>
                openWhatsAppModal({
                  title: `${book.orderLabel}`,
                  subtitle: 'Direct WhatsApp order / delivery inquiry with the author',
                  ctaType: 'book',
                  defaultService: `${book.title} — Book Order`
                })
              }
              className="flex-1 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-widest rounded-sm transition-all inline-flex items-center justify-center gap-2 border border-[#E2C45C] shadow-md cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#1C1C1C]" />
              <span>{book.orderLabel}</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
