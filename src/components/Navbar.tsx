import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail, Sparkles, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { FIRM_DETAILS } from '../data/firmData';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const Navbar: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setWorkDropdownOpen(false);
  }, [location.pathname]);

  const primaryWorkItems = [
    { title: 'Speaking & Keynotes', path: '/speaking', desc: 'Conversations That Move People' },
    { title: 'Books & Authorship', path: '/books', desc: 'Words Can Become Windows' },
    { title: 'Mentorship', path: '/mentorship', desc: 'Support for Your Next Chapter' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-300 shadow-xl">
      {/* Top Utility Bar - Clean Contact Line */}
      <div className="hidden md:block bg-[#5a1f10] text-xs text-white/90 border-b-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex justify-start items-center">
          <div className="flex items-center gap-8">
            <a href={`tel:${FIRM_DETAILS.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-white/90 hover:text-[#E2C45C] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#E2C45C]" />
              <span>{FIRM_DETAILS.contact.phone}</span>
            </a>
            <a href={`mailto:${FIRM_DETAILS.contact.email}`} className="flex items-center gap-2 text-white/90 hover:text-[#E2C45C] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#E2C45C]" />
              <span>{FIRM_DETAILS.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Primary Teal (#7e2e19) */}
      <nav
        className={`w-full transition-colors duration-300 border-b-2 border-[#D4AF37]/40 py-3.5 sm:py-4 ${
          isScrolled
            ? 'bg-[#5a1f10] shadow-2xl'
            : 'bg-[#7e2e19] shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo with variant dark for teal background */}
          <Logo variant="dark" size="md" />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wider uppercase transition-colors py-1.5 ${
                  isActive ? 'text-[#E2C45C] font-bold border-b-2 border-[#E2C45C]' : 'text-white/90 hover:text-[#E2C45C]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wider uppercase transition-colors py-1.5 ${
                  isActive ? 'text-[#E2C45C] font-bold border-b-2 border-[#E2C45C]' : 'text-white/90 hover:text-[#E2C45C]'
                }`
              }
            >
              About
            </NavLink>

            {/* Work / Offerings Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <button
                className={`inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  location.pathname.startsWith('/speaking') ||
                  location.pathname.startsWith('/mentorship') ||
                  location.pathname.startsWith('/career-development') ||
                  location.pathname.startsWith('/books') ||
                  location.pathname.startsWith('/governance-compliance') ||
                  location.pathname.startsWith('/services')
                    ? 'text-[#E2C45C] font-bold'
                    : 'text-white/90 hover:text-[#E2C45C]'
                }`}
              >
                <span>Offerings</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#E2C45C] transition-transform duration-200 ${workDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {workDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#1C1C1C] text-white shadow-2xl rounded-sm border-t-2 border-[#D4AF37] p-2 animate-fade-in z-50">
                  <div className="px-3 py-2 text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase border-b-2 border-white/10 mb-1">
                    Areas of Impact &amp; Work
                  </div>
                  {primaryWorkItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="block px-3 py-2 text-xs text-white/90 hover:text-[#D4AF37] hover:bg-white/5 rounded transition-colors"
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-[10px] text-white/50 truncate">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/impact"
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wider uppercase transition-colors py-1.5 ${
                  isActive ? 'text-[#E2C45C] font-bold border-b-2 border-[#E2C45C]' : 'text-white/90 hover:text-[#E2C45C]'
                }`
              }
            >
              Impact
            </NavLink>
          </div>

          {/* Responsive Desktop & Tablet Right CTA - Gold Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                openWhatsAppModal({
                  title: 'Book Keatlegile to Speak',
                  subtitle: 'Request a keynote address, mentorship, or consultation',
                  ctaType: 'speaking',
                  defaultService: 'Speaking & Keynote Addresses'
                })
              }
              className="px-3.5 sm:px-4 py-2 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg transition-all duration-300 hover:shadow-xl border border-[#E2C45C] inline-flex items-center gap-1.5 group whitespace-nowrap cursor-pointer"
            >
              <span>Book Keatlegile</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#1C1C1C]" />
            </button>

            {/* Mobile/Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E2C45C]" /> : <Menu className="w-6 h-6 text-[#E2C45C]" />}
            </button>
          </div>

          {/* Smallest mobile view Hamburger Toggle fallback */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-md transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E2C45C]" /> : <Menu className="w-6 h-6 text-[#E2C45C]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70 flex justify-end">
          <div className="w-full max-w-sm bg-[#7e2e19] text-white h-full flex flex-col justify-between p-6 overflow-y-auto border-l border-[#D4AF37]/50 shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-6">
                <Logo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-[#E2C45C]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="space-y-1 text-sm">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded ${isActive ? 'bg-[#9a3820] text-[#E2C45C] font-bold border-l-4 border-[#D4AF37]' : 'text-white/90 hover:bg-white/10'}`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded ${isActive ? 'bg-[#9a3820] text-[#E2C45C] font-bold border-l-4 border-[#D4AF37]' : 'text-white/90 hover:bg-white/10'}`
                  }
                >
                  About Keatlegile
                </NavLink>

                <div className="pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#E2C45C] px-3">
                  Offerings &amp; Work
                </div>

                <NavLink
                  to="/speaking"
                  className={({ isActive }) =>
                    `block px-3 py-1.5 pl-6 text-xs rounded ${isActive ? 'bg-[#9a3820] text-[#E2C45C] font-bold border-l-2 border-[#D4AF37]' : 'text-white/80 hover:bg-white/10'}`
                  }
                >
                  • Speaking &amp; Keynotes
                </NavLink>

                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    `block px-3 py-1.5 pl-6 text-xs rounded ${isActive ? 'bg-[#9a3820] text-[#E2C45C] font-bold border-l-2 border-[#D4AF37]' : 'text-white/80 hover:bg-white/10'}`
                  }
                >
                  • Books &amp; Authorship
                </NavLink>

                <NavLink
                  to="/mentorship"
                  className={({ isActive }) =>
                    `block px-3 py-1.5 pl-6 text-xs rounded ${isActive ? 'bg-[#9a3820] text-[#E2C45C] font-bold border-l-2 border-[#D4AF37]' : 'text-white/80 hover:bg-white/10'}`
                  }
                >
                  • Mentorship
                </NavLink>

                <NavLink
                  to="/impact"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded mt-2 ${isActive ? 'bg-[#9a3820] text-[#E2C45C] font-bold border-l-4 border-[#D4AF37]' : 'text-white/90 hover:bg-white/10'}`
                  }
                >
                  Social Impact
                </NavLink>
              </div>
            </div>

            {/* Drawer Footer CTA & Socials */}
            <div className="pt-6 border-t-2 border-white/20 space-y-4">
              <div className="flex items-center justify-center gap-4 text-[#E2C45C]">
                <a
                  href={FIRM_DETAILS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={FIRM_DETAILS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={FIRM_DETAILS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppModal({
                    title: 'Book Keatlegile to Speak',
                    subtitle: 'Request a keynote address, mentorship, or consultation',
                    ctaType: 'speaking',
                    defaultService: 'Speaking & Keynote Addresses'
                  });
                }}
                className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-center text-xs font-bold uppercase tracking-widest rounded shadow-lg block border border-[#E2C45C] cursor-pointer"
              >
                Book Keatlegile to Speak
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
