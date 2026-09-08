import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { openWhatsAppModal } = useWhatsAppModal();

  const handleOpen = () => {
    openWhatsAppModal({
      title: 'Start a Conversation',
      subtitle: 'Connect directly with Keatlegile Mabena on WhatsApp',
      defaultService: 'General Direct Enquiry',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {isHovered && (
        <div className="hidden sm:block bg-[#1C1C1C] text-white text-xs font-medium py-2 px-3.5 rounded-md shadow-xl border border-[#D4AF37]/30 whitespace-nowrap animate-fade-in">
          Chat with us directly
        </div>
      )}

      {/* WhatsApp / Direct Connect Floating Button */}
      <button
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#7e2e19] hover:bg-[#5a1f10] text-[#E2C45C] shadow-2xl border-2 border-[#D4AF37] hover:scale-105 transition-all duration-300 ring-4 ring-[#D4AF37]/30 hover:ring-[#D4AF37]/60 focus:outline-none cursor-pointer"
        aria-label="Connect with Keatlegile Mabena"
      >
        <MessageSquare className="w-5 h-5 fill-current stroke-none text-[#E2C45C]" />
      </button>
    </div>
  );
};
