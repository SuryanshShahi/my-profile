"use client";

import React from "react";
import Image from "next/image";
import { FaXmark, FaArrowUpRightFromSquare, FaCalendarDays, FaUser, FaCode } from "react-icons/fa6";
import { ProjectItem } from "@/app/features/home/types";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import Chip from "@/shared/Chip";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#252525] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#1e1e1e] text-neutral-300 hover:text-white hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-200 z-10"
        >
          <FaXmark className="text-lg" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <Chip variant="primary" size="sm" className="mb-3">
            {project.categoryLabel}
          </Chip>
          <Text as="h2" size="3xl" type="bold" variant="accent">
            {project.title}
          </Text>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6 border border-white/10">
          <Image
            src={project.originalImage || project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-[#1e1e1e] p-5 rounded-xl border border-white/5">
          <div className="flex items-center gap-3">
            <FaUser className="text-[var(--primary)] text-base shrink-0" />
            <div>
              <Text as="span" size="xs" variant="dim" className="block uppercase">
                Client
              </Text>
              <Text as="span" size="sm" type="semibold">
                {project.client}
              </Text>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarDays className="text-[var(--primary)] text-base shrink-0" />
            <div>
              <Text as="span" size="xs" variant="dim" className="block uppercase">
                Date
              </Text>
              <Text as="span" size="sm" type="semibold">
                {project.date}
              </Text>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:col-span-2">
            <FaCode className="text-[var(--primary)] text-base shrink-0 mt-1" />
            <div>
              <Text as="span" size="xs" variant="dim" className="block uppercase mb-1">
                Technologies
              </Text>
              <div className="flex flex-wrap gap-1.5">
                {project.languages.map((lang) => (
                  <Chip key={lang} variant="badge" size="xs">
                    {lang}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-8">
          <Text as="p" size="base" variant="secondary" className="leading-relaxed">
            {project.description}
          </Text>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="md"
              btnName="VIEW LIVE PROJECT"
              secondaryIcon={<FaArrowUpRightFromSquare />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
