"use client";

import React from "react";
import { FaDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import { PERSONAL_INFO, SKILLS, TIMELINE } from "../data";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";

const AboutSection: React.FC = () => {
  const experiences = TIMELINE.filter((t) => t.type === "experience");
  const educations = TIMELINE.filter((t) => t.type === "education");

  return (
    <section className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Background Watermark & Section Header */}
      <div className="section-title-container">
        <span className="watermark-title">RESUME</span>
        <h2 className="section-main-title">
          ABOUT <span className="text-[var(--primary)]">ME</span>
        </h2>
      </div>

      {/* Personal Info & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Left: Personal Information */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <Text as="h3" size="2xl" type="bold" className="uppercase mb-6">
              PERSONAL INFOS
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm mb-8">
              <div>
                <Text as="span" variant="dim" className="block uppercase text-xs">
                  Full Name:
                </Text>
                <Text as="span" type="semibold">
                  {PERSONAL_INFO.fullName}
                </Text>
              </div>

              <div>
                <Text as="span" variant="dim" className="block uppercase text-xs">
                  Age:
                </Text>
                <Text as="span" type="semibold">
                  {PERSONAL_INFO.age}
                </Text>
              </div>

              <div>
                <Text as="span" variant="dim" className="block uppercase text-xs">
                  Nationality:
                </Text>
                <Text as="span" type="semibold">
                  {PERSONAL_INFO.nationality}
                </Text>
              </div>

              <div>
                <Text as="span" variant="dim" className="block uppercase text-xs">
                  Freelance:
                </Text>
                <Text as="span" type="semibold" variant="accent">
                  {PERSONAL_INFO.freelance}
                </Text>
              </div>

              <div>
                <Text as="span" variant="dim" className="block uppercase text-xs">
                  Address:
                </Text>
                <Text as="span" type="semibold">
                  {PERSONAL_INFO.address}
                </Text>
              </div>

              <div>
                <Text as="span" variant="dim" className="block uppercase text-xs">
                  Phone:
                </Text>
                <Text as="span" type="semibold">
                  {PERSONAL_INFO.phone}
                </Text>
              </div>

              <div>
                <Text as="span" variant="dim" className="block uppercase text-xs">
                  Email:
                </Text>
                <Text as="span" type="semibold" className="break-all">
                  {PERSONAL_INFO.email}
                </Text>
              </div>

              <div>
                <Text as="span" variant="dim" className="block uppercase text-xs">
                  Languages:
                </Text>
                <Text as="span" type="semibold">
                  {PERSONAL_INFO.languages}
                </Text>
              </div>
            </div>
          </div>

          <div>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Suryansh_Shahi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="tunis-cta"
                size="md"
                btnName="DOWNLOAD CV"
                secondaryIcon={<FaDownload />}
              />
            </a>
          </div>
        </div>

        {/* Right: 4 Stat Boxes */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <CardWrapper key={idx} variant="stat">
              <div className="flex flex-col">
                <Text
                  as="span"
                  size="5xl"
                  type="extrabold"
                  variant="accent"
                  className="mb-2 font-mono"
                >
                  {stat.count}
                </Text>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-neutral-600" />
                  <Text as="span" size="sm" type="semibold" className="uppercase tracking-wider">
                    {stat.label}
                  </Text>
                </div>
              </div>
            </CardWrapper>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-md mx-auto h-px bg-white/10 my-20" />

      {/* My Skills Section (Circular Progress Rings) */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <Text as="h3" size="2xl" type="bold" className="uppercase tracking-wider">
            MY <span className="text-[var(--primary)]">SKILLS</span>
          </Text>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {SKILLS.map((skill, idx) => {
            const radius = 42;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset =
              circumference - (skill.percentage / 100) * circumference;

            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="text-[#252525] stroke-current"
                      strokeWidth="7"
                      fill="transparent"
                    />
                    {/* Progress Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="text-[var(--primary)] stroke-current transition-all duration-1000 ease-out"
                      strokeWidth="7"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <Text as="span" size="lg" type="bold" className="absolute">
                    {skill.percentage}%
                  </Text>
                </div>
                <Text as="span" size="xs" type="bold" className="uppercase tracking-wider">
                  {skill.name}
                </Text>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-md mx-auto h-px bg-white/10 my-20" />

      {/* Experience & Education Dual Timeline */}
      <div>
        <div className="text-center mb-16">
          <Text as="h3" size="2xl" type="bold" className="uppercase tracking-wider">
            EXPERIENCE <span className="text-[var(--primary)]">&</span> EDUCATION
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="flex flex-col gap-8">
            {experiences.map((item, idx) => (
              <div key={idx} className="relative pl-12 border-l border-white/10 group">
                {/* Icon Marker */}
                <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <FaBriefcase className="text-sm" />
                </div>

                <Chip variant="badge" size="xs" className="mb-3">
                  {item.year}
                </Chip>

                <Text as="h4" size="lg" type="bold" className="uppercase mb-1">
                  {item.title} -{" "}
                  <span className="text-neutral-400 font-normal text-sm">{item.place}</span>
                </Text>

                <Text as="p" size="sm" variant="muted" className="leading-relaxed mt-2">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-8">
            {educations.map((item, idx) => (
              <div key={idx} className="relative pl-12 border-l border-white/10 group">
                {/* Icon Marker */}
                <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <FaGraduationCap className="text-sm" />
                </div>

                <Chip variant="badge" size="xs" className="mb-3">
                  {item.year}
                </Chip>

                <Text as="h4" size="lg" type="bold" className="uppercase mb-1">
                  {item.title} -{" "}
                  <span className="text-neutral-400 font-normal text-sm">{item.place}</span>
                </Text>

                <Text as="p" size="sm" variant="muted" className="leading-relaxed mt-2">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
