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
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {isHovered && (
        <div className="hidden sm:block bg-[#1C1C1C] text-white text-xs font-medium py-2 px-3.5 rounded-md shadow-xl border border-[#D4AF37]/30 whitespace-nowrap animate-fade-in">
          Chat with us on WhatsApp
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform duration-300 ring-4 ring-[#25D366]/30 hover:ring-[#25D366]/60 focus:outline-none cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current stroke-none" />
      </button>
    </div>
  );
};
