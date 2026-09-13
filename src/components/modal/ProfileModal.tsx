"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark, FaDownload } from "react-icons/fa6";
import { PERSONAL_INFO } from "@/app/features/home/data";
import Text from "@/shared/heading/Text";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          />

          {/* Bottom Sheet / Modal Box */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full max-w-4xl bg-[#1e1e1e] border-t-2 sm:border border-[var(--primary)]/30 sm:rounded-2xl rounded-t-3xl p-6 sm:p-10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] z-10 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#2a2a2a] text-neutral-300 hover:text-white hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg z-20 group"
              aria-label="Close Profile Modal"
            >
              <FaXmark className="text-xl transition-transform duration-200 group-hover:rotate-90" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Column: Portrait with Offset Accent Border Frame */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative mt-3 mb-2 sm:my-0">
                  {/* Tunis Exact Offset Yellow Accent Border Box */}
                  <div className="absolute -top-3.5 -left-3.5 sm:-top-4 sm:-left-4 w-full h-full border-2 sm:border-[3px] border-[var(--primary)] rounded-lg pointer-events-none z-0" />

                  {/* Photo Frame */}
                  <div className="relative w-52 sm:w-64 h-68 sm:h-82 rounded-lg overflow-hidden shadow-2xl bg-[#111111] z-10 border border-white/10">
                    <Image
                      src="/images/my-profile.jpeg"
                      alt={PERSONAL_INFO.fullName}
                      fill
                      priority
                      className="object-cover object-[50%_15%]"
                      sizes="(max-width: 768px) 208px, 256px"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Name, Quick Infos & 3 Stat Cards */}
              <div className="md:col-span-8 flex flex-col">
                {/* Full Name Heading */}
                <Text
                  as="h2"
                  size="3xl"
                  type="extrabold"
                  className="uppercase text-white tracking-wide mb-6"
                >
                  {PERSONAL_INFO.fullName}
                </Text>

                {/* 2-Column Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 text-sm mb-7">
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400 font-medium w-24 shrink-0">Job</span>
                    <span className="text-white font-semibold">{PERSONAL_INFO.role}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400 font-medium w-24 shrink-0">Freelance</span>
                    <span className="text-[var(--primary)] font-bold">{PERSONAL_INFO.freelance}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400 font-medium w-24 shrink-0">Age</span>
                    <span className="text-white font-semibold">{PERSONAL_INFO.age}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400 font-medium w-24 shrink-0">Languages</span>
                    <span className="text-white font-semibold">{PERSONAL_INFO.languages}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400 font-medium w-24 shrink-0">Nationality</span>
                    <span className="text-white font-semibold">{PERSONAL_INFO.nationality}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400 font-medium w-24 shrink-0">Resume</span>
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      download="Suryansh_Shahi_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] font-bold hover:underline inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      Download
                      <FaDownload className="text-xs" />
                    </a>
                  </div>
                </div>

                {/* 3 Stat Cards Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/10">
                  {PERSONAL_INFO.stats.slice(0, 3).map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#262626] rounded-xl p-3.5 sm:p-4 border border-white/5 flex flex-col justify-between shadow-md"
                    >
                      <span className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] font-mono leading-none mb-2">
                        {stat.count}
                      </span>
                      <div>
                        <div className="w-6 h-0.5 bg-[var(--primary)] mb-1.5" />
                        <span className="text-[11px] sm:text-xs font-semibold text-neutral-300 uppercase tracking-wider leading-tight block">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
