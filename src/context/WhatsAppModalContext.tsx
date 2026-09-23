import React, { createContext, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageSquare, Send, Building2, User, Phone as PhoneIcon, Mail, Lock, Shield, CheckCircle2, Loader2 } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';
import { submitToWeb3Forms } from '../utils/web3forms';

export interface WhatsAppModalOptions {
  title?: string;
  subtitle?: string;
  ctaType?: 'speaking' | 'mentorship' | 'career' | 'book' | 'partnership' | 'conversation' | 'general';
  defaultService?: string;
  defaultMessage?: string;
  initialName?: string;
  initialOrganization?: string;
}

interface WhatsAppModalContextType {
  openWhatsAppModal: (options?: WhatsAppModalOptions) => void;
  closeWhatsAppModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined);

export const useWhatsAppModal = () => {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider');
  }
  return context;
};

const CTA_SERVICES = [
  'Keynote Speaking & Event Addresses',
  'Mentorship Programme (1-on-1 & Cohort)',
  'Book Orders & Inquiries (Breaking the Chains / Author)',
  'Media, Interviews & Feature Enquiries',
  'General Direct Enquiry'
];

export const WhatsAppModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Start a Conversation');
  const [modalSubtitle, setModalSubtitle] = useState('Direct WhatsApp connect with Keatlegile Mabena');
  const [ctaType, setCtaType] = useState<string>('conversation');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [selectedService, setSelectedService] = useState(CTA_SERVICES[0]);
  const [message, setMessage] = useState('');
  const [consentAgreed, setConsentAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openWhatsAppModal = (options?: WhatsAppModalOptions) => {
    setIsSubmitting(false);
    setIsSubmitted(false);
    setConsentAgreed(true);
    if (options?.title) setModalTitle(options.title);
    else setModalTitle('Book Keatlegile Mabena');

    if (options?.subtitle) setModalSubtitle(options.subtitle);
    else setModalSubtitle('Direct WhatsApp connect with Keatlegile Mabena');

    if (options?.ctaType) setCtaType(options.ctaType);
    else setCtaType('conversation');

    if (options?.initialName) setFullName(options.initialName);
    else setFullName('');

    if (options?.initialOrganization) setOrganization(options.initialOrganization);
    else setOrganization('');

    if (options?.defaultService) {
      const matched = CTA_SERVICES.find(s => s.toLowerCase().includes(options.defaultService!.toLowerCase()));
      setSelectedService(matched || options.defaultService);
    } else {
      setSelectedService(CTA_SERVICES[0]);
    }

    if (options?.defaultMessage) {
      setMessage(options.defaultMessage);
    } else {
      setMessage('');
    }

    setIsOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsOpen(false);
  };

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeWhatsAppModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Build formatted message for WhatsApp payload upon submission
  const buildFormattedMessage = () => {
    const clientName = fullName.trim() || 'Enquirer';
    const clientPhone = phone.trim() ? phone.trim() : 'Not provided';
    const clientEmail = email.trim() ? email.trim() : 'Not provided';
    const clientOrg = organization.trim() ? organization.trim() : 'Individual / Independent';
    const note = message.trim() || 'No additional details provided.';

    return `Hello Keatlegile Mabena,

*ENQUIRY: ${modalTitle.toUpperCase()}*
• *Full Name:* ${clientName}
• *Phone:* ${clientPhone}
• *Email:* ${clientEmail}
• *Organisation:* ${clientOrg}
• *Area of Focus:* ${selectedService}

*Message / Request Details:*
${note}

_Sent via Keatlegile Mabena Official Portal (keatlegilemabena.co.za)_`;
  };

  const handleFormSubmit = async () => {
    if (!fullName.trim()) {
      alert('Please enter your full name.');
      return;
    }
    if (!consentAgreed) {
      alert('Please agree to the processing of personal information under POPIA to proceed.');
      return;
    }

    setIsSubmitting(true);

    await submitToWeb3Forms({
      subject: `New Booking Request: ${modalTitle} (${fullName.trim()})`,
      name: fullName.trim(),
      phone: phone.trim() || 'Not provided',
      email: email.trim() || 'Not provided',
      organization: organization.trim() || 'Individual / Independent',
      service: selectedService,
      message: message.trim() || 'No additional details provided.',
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <WhatsAppModalContext.Provider value={{ openWhatsAppModal, closeWhatsAppModal }}>
      {children}

      {/* WhatsApp Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-fade-in"
          onClick={closeWhatsAppModal}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border-2 border-[#D4AF37] max-h-[92vh] flex flex-col my-auto overflow-hidden text-[#1C1C1C]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
          >
            {/* Modal Header */}
            <div className="shrink-0 bg-gradient-to-r from-[#5a1f10] via-[#7e2e19] to-[#5a1f10] text-white p-4 sm:p-5 border-b-2 border-[#D4AF37] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D4AF37] text-[#1C1C1C] flex items-center justify-center shadow-lg shrink-0 border border-[#E2C45C]">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current stroke-none" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#E2C45C] mb-0.5 truncate">
                    Direct Connect
                  </div>
                  <h3 id="whatsapp-modal-title" className="font-serif text-base sm:text-lg font-bold text-white leading-tight truncate">
                    {modalTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/80 mt-0.5 font-normal truncate">
                    {modalSubtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={closeWhatsAppModal}
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 text-white flex items-center justify-center border border-white/40 shadow-md transition-all focus:outline-none cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {isSubmitted ? (
                <div className="py-6 text-center space-y-4 my-auto animate-fade-in">
                  <div className="w-14 h-14 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#7e2e19]">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#9a3820] uppercase tracking-widest">
                      Submission Received
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#7e2e19]">
                      Booking Request Submitted!
                    </h4>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong className="text-[#7e2e19]">{fullName}</strong>! Your request for <strong className="text-[#7e2e19]">{selectedService}</strong> has been submitted successfully.
                  </p>
                  <p className="text-[11px] text-gray-600 max-w-xs mx-auto">
                    Keatlegile Mabena&apos;s team will review your message and contact you shortly.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center max-w-xs mx-auto">
                    <button
                      type="button"
                      onClick={() => {
                        const formattedText = buildFormattedMessage();
                        const whatsappUrl = `https://wa.me/${FIRM_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
                        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-wider rounded border border-[#E2C45C] shadow flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current stroke-none" />
                      <span>Also Connect on WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={closeWhatsAppModal}
                      className="w-full sm:w-auto px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Please fill in your details below to submit a direct booking request:
                  </p>

                  {/* Form Controls */}
                  <div className="space-y-3.5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Thabo Mokoena"
                          className="w-full pl-9 pr-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Contact Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <div className="relative">
                          <PhoneIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+27 72 000 0000"
                            className="w-full pl-9 pr-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Email Address (Optional)
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="thabo@example.com"
                            className="w-full pl-9 pr-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Organisation / Company (if applicable) */}
                    <div>
                      <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                        Organisation / Institution (Optional)
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="e.g. University / Company / Independent"
                          className="w-full pl-9 pr-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service / Topic */}
                    <div>
                      <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                        Area of Focus / Engagement Topic
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                      >
                        {CTA_SERVICES.map((s, idx) => (
                          <option key={idx} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Notes */}
                    <div>
                      <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                        Your Message / Specific Request
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share event dates, locations, mentorship goals, or specific requirements..."
                        className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Information Usage Disclosure & POPIA Consent */}
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 space-y-2 text-[11px] text-gray-700">
                      <div className="flex items-center gap-1.5 font-bold text-[#7e2e19]">
                        <Lock className="w-3.5 h-3.5 text-[#9a3820]" />
                        <span>How Information Will Be Used</span>
                      </div>
                      <p className="text-[10px] text-gray-600 leading-snug">
                        Your personal information (Name, Contact Details, Institution, Message) is collected solely to respond to your enquiry, coordinate booking logistics, or provide requested mentorship details in accordance with South Africa&apos;s POPIA standards.
                      </p>
                      <div className="pt-1 border-t border-gray-200 flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="modalConsentAgreed"
                          checked={consentAgreed}
                          onChange={(e) => setConsentAgreed(e.target.checked)}
                          className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-[#7e2e19] focus:ring-[#D4AF37]"
                        />
                        <label htmlFor="modalConsentAgreed" className="text-[10px] text-gray-800 leading-tight cursor-pointer">
                          I consent to the processing of my details under POPIA &amp; agree to the <Link to="/privacy-policy" onClick={closeWhatsAppModal} className="text-[#9a3820] font-bold hover:underline">Privacy Policy</Link>.
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            {!isSubmitted && (
              <div className="shrink-0 p-3.5 sm:p-4 bg-gray-100 border-t-2 border-gray-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-2.5">
                <button
                  type="button"
                  onClick={closeWhatsAppModal}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </button>

                <button
                  type="button"
                  onClick={handleFormSubmit}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] font-bold text-xs uppercase tracking-wider rounded border border-[#E2C45C] shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#1C1C1C]" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#1C1C1C]" />
                      <span>
                        {ctaType === 'speaking' ? 'Book Keatlegile to Speak' :
                         ctaType === 'mentorship' ? 'Submit Mentorship Request' :
                         ctaType === 'book' ? 'Submit Book Order Request' :
                         'Submit Booking Request'}
                      </span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </WhatsAppModalContext.Provider>
  );
};
