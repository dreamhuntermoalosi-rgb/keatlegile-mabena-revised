import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, MessageSquare, Send, Building2, User, Phone as PhoneIcon, Mail } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

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
  'Speaking & Keynote Addresses',
  'One-on-One Mentorship Programme',
  'Career Development & Employability',
  'Book Orders & Enquiries (The Power of Pain / The Art of Becoming)',
  'MBN Empire Strategic Advisory & Publishing',
  'Youth & Leadership Workshops',
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

  const openWhatsAppModal = (options?: WhatsAppModalOptions) => {
    if (options?.title) setModalTitle(options.title);
    else setModalTitle('Start a Conversation');

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

  const handleSendToWhatsApp = () => {
    const formattedText = buildFormattedMessage();
    const whatsappUrl = `https://wa.me/${FIRM_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    closeWhatsAppModal();
  };

  return (
    <WhatsAppModalContext.Provider value={{ openWhatsAppModal, closeWhatsAppModal }}>
      {children}

      {/* WhatsApp Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
          <div
            className="relative w-full max-w-lg bg-white rounded-md shadow-2xl border-2 border-[#D4AF37] my-8 overflow-hidden text-[#1C1C1C]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#5a1f10] via-[#7e2e19] to-[#5a1f10] text-white p-5 sm:p-6 border-b-2 border-[#D4AF37] relative">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shrink-0 border border-white/20">
                  <MessageSquare className="w-6 h-6 fill-current stroke-none" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#E2C45C] mb-0.5">
                    Direct Connect
                  </div>
                  <h3 id="whatsapp-modal-title" className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                    {modalTitle}
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5 font-normal">
                    {modalSubtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={closeWhatsAppModal}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[72vh] overflow-y-auto">
              <p className="text-xs text-gray-600 leading-relaxed">
                Please fill in your details below to connect directly with Keatlegile Mabena on WhatsApp:
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
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-gray-100 border-t-2 border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={closeWhatsAppModal}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 border border-gray-300 rounded hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current stroke-none" />
                <span>Submit &amp; Open WhatsApp</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </WhatsAppModalContext.Provider>
  );
};
