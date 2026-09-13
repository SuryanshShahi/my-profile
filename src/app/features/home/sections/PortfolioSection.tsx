"use client";

import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
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
            className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#252525] border border-white/5 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[rgba(var(--primary-rgb),0.2)] transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[var(--primary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="w-12 h-12 rounded-full bg-white text-[var(--primary)] flex items-center justify-center text-lg mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                <FaPlus />
              </div>
              <Text as="h4" size="xl" type="bold" className="text-white uppercase mb-1">
                {project.title}
              </Text>
              <Text as="span" size="xs" className="text-white/90 uppercase tracking-widest font-semibold">
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
