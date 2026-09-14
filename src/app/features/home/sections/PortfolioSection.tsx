"use client";

import React from "react";
import Image from "next/image";
import { FaPlus, FaMobileScreen, FaGlobe } from "react-icons/fa6";
import { ProjectItem } from "../types";
import Text from "@/shared/heading/Text";
import Chip from "@/shared/Chip";

interface PortfolioSectionProps {
  projects: ProjectItem[];
  categoryFilter: string;
  onFilterChange: (category: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

const filterOptions = [
  { id: "all", label: "ALL" },
  { id: "web", label: "WEB APPS" },
  { id: "mobile", label: "MOBILE" },
];

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  categoryFilter,
  onFilterChange,
  onSelectProject,
}) => {
  return (
    <section className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Background Watermark & Header */}
      <div className="section-title-container">
        <span className="watermark-title">WORKS</span>
        <h2 className="section-main-title">
          MY <span className="text-[var(--primary)]">PORTFOLIO</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {filterOptions.map((tab) => {
          const isActive = categoryFilter === tab.id;
          return (
            <Chip
              key={tab.id}
              variant={isActive ? "active-tab" : "inactive-tab"}
              size="md"
              onClick={() => onFilterChange(tab.id)}
            >
              {tab.label}
            </Chip>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#1c1c1e] border border-white/10 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[rgba(var(--primary-rgb),0.25)] transition-all duration-500 hover:-translate-y-2"
          >
            {/* Floating Type Badge */}
            <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white shadow-lg text-[11px] font-semibold tracking-wider uppercase transition-transform duration-300 group-hover:scale-105 pointer-events-none">
              {project.category === "mobile" ? (
                <>
                  <FaMobileScreen className="text-[var(--primary)] text-xs shrink-0" />
                  <span>App</span>
                </>
              ) : (
                <>
                  <FaGlobe className="text-[var(--primary)] text-xs shrink-0" />
                  <span>Website</span>
                </>
              )}
            </div>

            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/95 via-[var(--primary)]/80 to-[var(--primary)]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center z-10 backdrop-blur-[2px]">
              <div className="w-14 h-14 rounded-full bg-white text-[var(--primary)] flex items-center justify-center text-xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                <FaPlus />
              </div>
              <Text as="h4" size="xl" type="bold" className="text-white uppercase mb-2 tracking-wide drop-shadow-sm">
                {project.title}
              </Text>
              <Text as="span" size="xs" className="text-white/95 uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">
                {project.categoryLabel}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
