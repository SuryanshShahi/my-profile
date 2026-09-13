"use client";

import React from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaUser,
  FaArrowUp,
} from "react-icons/fa6";
import { TabType } from "../types";
import { PERSONAL_INFO } from "../data";

interface HeroSectionProps {
  onNavigate: (tab: TabType) => void;
  onOpenProfileModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenProfileModal,
}) => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Tunis Yellow Background Diagonal Shape */}
      <div className="bg-[var(--primary)] fixed w-full h-[200%] -rotate-15 -top-1/2 -left-[85%] hidden lg:block z-0 pointer-events-none transition-colors duration-500" />

      {/* Desktop Top Right Quick Contact & Socials Block */}
      <div className="hidden lg:flex absolute top-9 right-28 z-20 flex-col items-end text-right gap-1 text-sm text-neutral-100 font-sans tracking-wide">
        <a
          href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
          className="font-medium hover:text-[var(--primary)] transition-colors"
        >
          {PERSONAL_INFO.phone}
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="font-medium hover:text-[var(--primary)] transition-colors"
        >
          {PERSONAL_INFO.email}
        </a>
        <span className="text-neutral-200 font-medium">
          {PERSONAL_INFO.address}
        </span>
        <div className="flex items-center justify-end gap-3.5 mt-2.5 text-[17px] text-neutral-200">
          <a
            href={PERSONAL_INFO.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--primary)] hover:scale-115 transition-all"
            title="Twitter / X"
          >
            <FaXTwitter />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--primary)] hover:scale-115 transition-all"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--primary)] hover:scale-115 transition-all"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--primary)] hover:scale-115 transition-all"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Reduced & Crisp Desktop Portrait Frame & Trigger */}
      <div className="hidden lg:flex flex-col items-center fixed left-12 xl:left-20 top-1/2 -translate-y-1/2 z-30">
        <div className="w-[340px] xl:w-[380px] h-[450px] xl:h-[500px] rounded-[30px] shadow-[0_0_40px_rgba(0,0,0,0.9)] overflow-hidden bg-[#111111] border-4 border-white/5 group relative">
          <Image
            src="/images/my-profile.jpeg"
            alt={`${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`}
            fill
            priority
            className="object-cover object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1280px) 340px, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Button below image to open bottom profile modal */}
        <button
          onClick={onOpenProfileModal}
          className="mt-3.5 px-6 py-2 rounded-full bg-[#181818]/90 hover:bg-[var(--primary)] text-neutral-200 hover:text-white border border-white/10 hover:border-[var(--primary)] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer active:scale-95 group select-none backdrop-blur-sm"
        >
          <FaUser className="text-[var(--primary)] group-hover:text-white transition-colors" />
          <span>Quick Profile</span>
          <FaArrowUp className="text-[10px] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full min-h-screen flex items-center pt-28 pb-16 sm:pt-32 lg:py-0 z-10">
        <div className="w-full lg:ml-[420px] xl:ml-[480px] lg:w-[calc(100%-420px)] xl:w-[calc(100%-480px)] flex items-center justify-center px-6 sm:px-12 lg:px-16">
          <div className="max-w-[580px] w-full text-center lg:text-left">
            {/* Mobile Portrait Image */}
            <div className="lg:hidden flex flex-col items-center mt-2 mb-8">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden mx-auto border-4 border-solid border-[#252525] shadow-2xl">
                <Image
                  src="/images/my-profile.jpeg"
                  alt={`${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`}
                  fill
                  priority
                  className="object-cover object-[50%_15%]"
                  sizes="256px"
                />
              </div>
              <button
                onClick={onOpenProfileModal}
                className="mt-3 px-5 py-2 rounded-full bg-[#1e1e1e] text-neutral-200 border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer active:scale-95 shadow-lg"
              >
                <FaUser className="text-[var(--primary)]" />
                <span>Quick Profile</span>
                <FaArrowUp className="text-[10px]" />
              </button>
            </div>

            {/* Tunis Heading: Name (Yellow) + Role (White) with Horizontal Dash */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[51px] font-extrabold uppercase text-[var(--primary)] leading-tight lg:leading-[60px] xl:leading-[62px] relative lg:pl-[70px] lg:before:absolute lg:before:left-0 lg:before:top-[28px] lg:before:h-1 lg:before:w-10 lg:before:rounded-full lg:before:bg-[var(--primary)] tracking-tight">
              I&apos;M {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}.
              <span className="block text-white">{PERSONAL_INFO.role}</span>
            </h1>

            {/* Tunis Bio Paragraph */}
            <p className="mt-4 mb-7 text-sm sm:text-base text-neutral-300 leading-7 sm:leading-[34px] font-normal">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Tunis CTA Button with Slide-over Accent */}
            <div
              onClick={() => onNavigate("about")}
              className="button cursor-pointer overflow-hidden inline-flex items-center rounded-full relative z-10 py-3.5 pr-18 pl-9 text-[15px] font-semibold text-white bg-transparent border border-[var(--primary)] before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-[var(--primary)] before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out group active:scale-95 shadow-lg select-none"
            >
              <span className="relative z-20 text-white uppercase tracking-wider">
                MORE ABOUT ME
              </span>
              <span className="absolute -right-px top-0 bottom-0 w-13 h-full flex items-center justify-center rounded-full text-white text-base bg-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                <FaArrowRight />
              </span>
            </div>

            {/* Mobile Footer Contact & Socials Info - Moved to Bottom */}
            <div className="lg:hidden mt-12 pt-6 border-t border-white/10 flex flex-col items-center text-center gap-1.5 text-xs sm:text-sm text-neutral-300 font-sans">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="font-medium hover:text-[var(--primary)] transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-medium hover:text-[var(--primary)] transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              <span className="text-neutral-400 font-medium">
                {PERSONAL_INFO.address}
              </span>
              <div className="flex items-center justify-center gap-4 mt-3 text-lg text-neutral-300">
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--primary)] hover:scale-115 transition-all"
                  title="Twitter / X"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--primary)] hover:scale-115 transition-all"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--primary)] hover:scale-115 transition-all"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--primary)] hover:scale-115 transition-all"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
