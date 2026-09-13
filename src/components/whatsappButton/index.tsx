"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { PERSONAL_INFO } from "@/app/features/home/data";

const WhatsAppButton: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center group select-none"
    >
      {/* Outer ambient dark green translucent halo - matches exact reference */}
      <div className="absolute w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-emerald-500/15 group-hover:bg-emerald-500/25 transition-all duration-500 animate-pulse pointer-events-none flex items-center justify-center">
        {/* Subtle expanding ping wave */}
        <span className="w-full h-full rounded-full bg-[#25D366]/20 animate-ping opacity-60 pointer-events-none duration-1000" />
      </div>

      {/* Main Solid WhatsApp Button */}
      <a
        href={PERSONAL_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Suryansh on WhatsApp"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_28px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer z-10"
      >
        <FaWhatsapp className="text-[32px] sm:text-[36px] text-white drop-shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105" />

        {/* Floating Tooltip positioned on the Left side of the button */}
        <span className="absolute right-full mr-4 px-3.5 py-1.5 bg-[#1a1a1a] text-white text-xs font-semibold rounded-lg shadow-2xl border border-white/10 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};

export default WhatsAppButton;
