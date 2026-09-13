"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHome } from "./useHook";
import Navbar from "@/components/navbar";
import ThemeSwitcher from "@/components/themeSwitcher";
import WhatsAppButton from "@/components/whatsappButton";
import ProjectModal from "@/components/modal/ProjectModal";
import BlogModal from "@/components/modal/BlogModal";
import ProfileModal from "@/components/modal/ProfileModal";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";
import BlogSection from "./sections/BlogSection";

const HomeFeature: React.FC = () => {
  const {
    activeTab,
    handleTabChange,
    theme,
    handleThemeChange,
    isThemeSwitcherOpen,
    setIsThemeSwitcherOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    categoryFilter,
    setCategoryFilter,
    filteredProjects,
    selectedProject,
    setSelectedProject,
    selectedBlog,
    setSelectedBlog,
    isProfileModalOpen,
    setIsProfileModalOpen,
    blogs,
    formik,
    formStatus,
    errorMessage,
  } = useHome();

  return (
    <main className="relative min-h-screen bg-[#111111] text-white selection:bg-[var(--primary)] selection:text-white">
      {/* Floating Theme Customizer */}
      <ThemeSwitcher
        currentTheme={theme}
        onThemeChange={handleThemeChange}
        isOpen={isThemeSwitcherOpen}
        setIsOpen={setIsThemeSwitcherOpen}
      />

      {/* Floating Navigation Pill */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Floating WhatsApp CTA Button */}
      <WhatsAppButton />

      {/* Main Content with Animated Transitions */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <HeroSection
                onNavigate={handleTabChange}
                onOpenProfileModal={() => setIsProfileModalOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <AboutSection />
            </motion.div>
          )}

          {activeTab === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <PortfolioSection
                projects={filteredProjects}
                categoryFilter={categoryFilter}
                onFilterChange={setCategoryFilter}
                onSelectProject={setSelectedProject}
              />
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <ContactSection
                formik={formik}
                formStatus={formStatus}
                errorMessage={errorMessage}
              />
            </motion.div>
          )}

          {activeTab === "blog" && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <BlogSection blogs={blogs} onSelectBlog={setSelectedBlog} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick Profile Bottom Sheet Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Blog Lightbox Modal */}
      <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </main>
  );
};

export default HomeFeature;
