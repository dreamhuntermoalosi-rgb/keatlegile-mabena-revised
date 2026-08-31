import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, MessageSquare, Send, Copy, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { FIRM_DETAILS, SERVICES } from '../data/firmData';

export interface WhatsAppModalOptions {
  defaultService?: string;
  defaultMessage?: string;
  initialName?: string;
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

export const WhatsAppModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('General Legal Inquiry');
  const [urgency, setUrgency] = useState('Standard Consultation');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const openWhatsAppModal = (options?: WhatsAppModalOptions) => {
    if (options?.initialName) setFullName(options.initialName);
    if (options?.defaultService) setSelectedService(options.defaultService);
    else setSelectedService('General Legal Inquiry');

    if (options?.defaultMessage) {
      setMessage(options.defaultMessage);
    } else {
      setMessage('I would like to inquire about legal representation and schedule an initial consultation with an attorney.');
    }

    setIsOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsOpen(false);
    setCopied(false);
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

  // Build the pre-filled formatted WhatsApp text message
  const buildFormattedMessage = () => {
    const clientName = fullName.trim() || 'Client';
    const clientPhone = phone.trim() ? phone.trim() : 'Not specified';
    const note = message.trim() || 'No additional details provided.';

    return `Hello Matlala M&M Attorneys Inc.,

*WHATSAPP LEGAL INQUIRY*
• Name: ${clientName}
• Contact: ${clientPhone}
• Practice Area: ${selectedService}
• Urgency Level: ${urgency}

*Details / Notes:*
${note}

_Sent via Matlala M&M Attorneys Inc. Web Portal_`;
  };

  const handleSendToWhatsApp = () => {
    const formattedText = buildFormattedMessage();
    const whatsappUrl = `https://wa.me/${FIRM_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    closeWhatsAppModal();
  };

  const handleCopyPayload = () => {
    const formattedText = buildFormattedMessage();
    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <WhatsAppModalContext.Provider value={{ openWhatsAppModal, closeWhatsAppModal }}>
      {children}

      {/* WhatsApp Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in overflow-y-auto">
          <div
            className="relative w-full max-w-lg bg-white rounded-md shadow-2xl border-2 border-[#D4AF37]/50 my-8 overflow-hidden text-[#1C1C1C]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
          >
            {/* Modal Header */}
            <div className="bg-[#4B071F] text-white p-5 sm:p-6 border-b border-[#D4AF37]/40 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current stroke-none" />
                </div>
                <div>
                  <h3 id="whatsapp-modal-title" className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    WhatsApp Inquiry Portal
                  </h3>
                  <p className="text-xs text-[#E2C45C] font-medium">
                    Matlala M&M Attorneys Inc. — Instant Direct Connect
                  </p>
                </div>
              </div>

              <button
                onClick={closeWhatsAppModal}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Short Form */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <p className="text-xs text-gray-600 leading-relaxed">
                Complete the short form below to generate a tailored, pre-formatted message for our legal team on WhatsApp Business.
              </p>

              {/* Form Controls */}
              <div className="space-y-3">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                    Your Full Name / Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adv. Thabo Mokoena / Capricorn District"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7A1238] focus:bg-white transition-colors"
                  />
                </div>

                {/* Contact Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                      Contact Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+27 82 123 4567"
                      className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7A1238] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                      Urgency / Timeline
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7A1238] focus:bg-white transition-colors"
                    >
                      <option value="Urgent (Within 24 Hours)">Urgent (Within 24 Hours)</option>
                      <option value="Standard Consultation">Standard Consultation</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>
                </div>

                {/* Practice Area */}
                <div>
                  <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                    Practice Area / Legal Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7A1238] focus:bg-white transition-colors"
                  >
                    <option value="General Legal Inquiry">General Legal Inquiry</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Notes */}
                <div>
                  <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                    Brief Note or Matter Description
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your legal concern or query..."
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#7A1238] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Pre-filled Live WhatsApp Payload Preview */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A1238] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Pre-formatted WhatsApp Payload
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPayload}
                    className="text-[11px] font-medium text-gray-600 hover:text-[#7A1238] flex items-center gap-1 focus:outline-none"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded text-[11px] font-mono text-emerald-950 whitespace-pre-wrap leading-relaxed shadow-inner">
                  {buildFormattedMessage()}
                </div>
              </div>

              {/* Security & POPIA note */}
              <div className="flex items-center gap-2 text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded border border-gray-200">
                <ShieldCheck className="w-4 h-4 text-[#7A1238] shrink-0" />
                <span>
                  All communications remain subject to legal professional privilege and POPIA guidelines.
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-gray-100 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={closeWhatsAppModal}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 border border-gray-300 rounded hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 fill-current stroke-none" />
                <span>Open WhatsApp &amp; Send</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </WhatsAppModalContext.Provider>
  );
};
