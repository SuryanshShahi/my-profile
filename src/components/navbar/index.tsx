"use client";

import React from "react";
import clsx from "clsx";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaHouse,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpen,
  FaBookOpen,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { TabType } from "@/app/features/home/types";
import Text from "@/shared/heading/Text";

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "HOME", icon: <FaHouse /> },
  { id: "about", label: "ABOUT", icon: <FaUser /> },
  { id: "portfolio", label: "PORTFOLIO", icon: <FaBriefcase /> },
  { id: "contact", label: "CONTACT", icon: <FaEnvelopeOpen /> },
  { id: "blog", label: "BLOG", icon: <FaBookOpen /> },
];

const menuContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -10, transition: { duration: 0.15 } },
};

const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <>
      {/* Desktop Floating Right Navigation */}
      <nav className="fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-5">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <div
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={clsx(
                "group relative flex items-center justify-end rounded-full h-12 transition-all duration-300 ease-out cursor-pointer select-none shadow-lg overflow-hidden",
                "w-12 hover:w-auto hover:pl-7 hover:pr-4",
                isActive
                  ? "bg-[var(--primary)] text-white shadow-[0_4px_20px_rgba(var(--primary-rgb),0.4)]"
                  : "bg-[#252525] text-neutral-300 hover:bg-[var(--primary)] hover:text-white"
              )}
            >
              {/* Expanding Label */}
              <span className="hidden group-hover:inline-block pr-3.5 whitespace-nowrap text-sm font-bold tracking-wider uppercase animate-in fade-in slide-in-from-right-3 duration-200">
                {item.label}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center text-lg shrink-0">
                {item.icon}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Mobile Top Header / Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-white/10">
        <Text as="span" size="lg" type="extrabold" variant="accent" className="tracking-widest">
          SURYANSH
        </Text>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative w-11 h-11 rounded-full bg-[#252525] hover:bg-[#333333] text-white flex items-center justify-center text-lg active:scale-95 transition-all duration-200 shadow-md border border-white/10 cursor-pointer overflow-hidden"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <FaXmark />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <FaBars />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Animated Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-40 bg-[#111111]/98 backdrop-blur-xl pt-24 px-6 sm:px-8 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            {/* Nav Items List */}
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <motion.button
                    key={item.id}
                    variants={menuItemVariants}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onTabChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={clsx(
                      "flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all duration-300 uppercase tracking-wider font-semibold border",
                      isActive
                        ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-[0_4px_20px_rgba(var(--primary-rgb),0.35)]"
                        : "bg-[#1f1f1f]/80 text-neutral-300 hover:text-white hover:bg-[#282828] border-white/5"
                    )}
                  >
                    <span
                      className={clsx(
                        "text-xl p-2.5 rounded-xl transition-colors",
                        isActive ? "bg-black/20 text-white" : "bg-[#2a2a2a] text-[var(--primary)]"
                      )}
                    >
                      {item.icon}
                    </span>
                    <Text as="span" size="base" type="bold">
                      {item.label}
                    </Text>
                  </motion.button>
                );
              })}
            </div>

            {/* Subtle Footer in Mobile Drawer */}
            <motion.div
              variants={menuItemVariants}
              className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-neutral-500 font-sans uppercase tracking-widest"
            >
              Suryansh Shahi Portfolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

