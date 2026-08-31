import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ChevronRight, ChevronUp, Sparkles, Building2, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { FIRM_DETAILS } from '../data/firmData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#7e2e19] via-[#5a1f10] to-[#42160c] text-white pt-16 pb-8 border-t-4 border-[#D4AF37] relative overflow-visible">
      {/* Background Abstract Pattern Layer Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Back to Top Floating Button */}
      <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group">
        <button
          onClick={scrollToTop}
          className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#E2C45C] via-[#D4AF37] to-[#A88616] text-[#5a1f10] shadow-[0_0_15px_rgba(212,175,55,0.45)] border-2 border-[#FFFFFF] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group-hover:shadow-[0_0_25px_rgba(212,175,55,0.8)]"
          aria-label="Scroll to top of page"
        >
          <ChevronUp className="w-4 h-4 stroke-[2.5] text-[#5a1f10]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b-2 border-white/10">
          {/* Column 1: Brand Identity */}
          <div className="space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-xs text-white/75 leading-relaxed pt-2">
              Helping people move from pain and uncertainty towards healing, clarity, confidence and purposeful action.
            </p>

            {/* Social Icons Container */}
            <div className="pt-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#E2C45C] mb-2">Connect On Social</div>
              <div className="flex items-center gap-3">
                <a
                  href={FIRM_DETAILS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37] hover:text-[#5a1f10] transition-all text-[#E2C45C]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={FIRM_DETAILS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37] hover:text-[#5a1f10] transition-all text-[#E2C45C]"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={FIRM_DETAILS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37] hover:text-[#5a1f10] transition-all text-[#E2C45C]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-[#E2C45C] font-semibold tracking-wider relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-[#D4AF37]">
              EXPLORE
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'About Keatlegile', path: '/about' },
                { name: 'Speaking & Keynotes', path: '/speaking' },
                { name: 'Mentorship', path: '/mentorship' },
                { name: 'Career Development', path: '/career-development' },
                { name: 'Books & Authorship', path: '/books' },
                { name: 'Governance & Strategy', path: '/governance-compliance' },
                { name: 'Insights & Reflections', path: '/insights' },
                { name: 'Social Impact', path: '/impact' },
                { name: 'Media', path: '/media' },
                { name: 'Events', path: '/events' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#E2C45C] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Social Channels */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-[#E2C45C] font-semibold tracking-wider relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-[#D4AF37]">
              CONNECT
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Start a Conversation', path: '/start-a-conversation' },
                { name: 'Book Keatlegile', path: '/book-keatlegile' },
                { name: 'Media Enquiries', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-[#E2C45C] transition-colors flex items-center gap-1.5 font-medium group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 space-y-2 text-xs border-t-2 border-white/10">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#E2C45C]">Social Channels</div>
              <a
                href={FIRM_DETAILS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#E2C45C] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Instagram (@keatlegile_mabena)</span>
              </a>
              <a
                href={FIRM_DETAILS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#E2C45C] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Facebook (Keatlegile Mabena)</span>
              </a>
              <a
                href={FIRM_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#E2C45C] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>LinkedIn (Keatlegile Mabena)</span>
              </a>
            </div>

            <div className="pt-2 space-y-2 text-xs text-white/80 border-t-2 border-white/10">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`tel:${FIRM_DETAILS.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#E2C45C]">
                  {FIRM_DETAILS.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`mailto:${FIRM_DETAILS.contact.email}`} className="hover:text-[#E2C45C]">
                  {FIRM_DETAILS.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Business Ecosystem */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-[#E2C45C] font-semibold tracking-wider relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-[#D4AF37]">
              BUSINESS
            </h3>
            <div className="p-4 bg-white/5 rounded border border-[#D4AF37]/30 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#E2C45C]">
                <Building2 className="w-4 h-4 text-[#D4AF37]" />
                <span>MBN Empire</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Keatlegile Mabena's commercial ecosystem for scalable professional businesses in career services, research, consulting and publishing.
              </p>
              <Link
                to="/mbn-empire"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#D4AF37] hover:text-white transition-colors"
              >
                <span>Explore MBN Empire</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/50">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              © {currentYear} Keatlegile Mabena. All Rights Reserved.
            </div>
          </div>
          <div className="text-center sm:text-right">
            <Link to="/privacy-policy" className="hover:text-[#E2C45C] transition-colors font-medium">
              Privacy Policy &amp; Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
