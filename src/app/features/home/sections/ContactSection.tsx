"use client";

import React from "react";
import { FormikProps } from "formik";
import {
  FaMapLocationDot,
  FaEnvelopeOpen,
  FaPhoneVolume,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { PERSONAL_INFO } from "../data";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import InputField from "@/shared/input/InputField";
import TextareaField from "@/shared/input/TextareaField";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSectionProps {
  formik: FormikProps<ContactFormValues>;
  formStatus: "idle" | "submitting" | "success" | "error";
  errorMessage?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  formik,
  formStatus,
  errorMessage,
}) => {
  return (
    <section className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Background Watermark & Header */}
      <div className="section-title-container">
        <span className="watermark-title">CONTACT</span>
        <h2 className="section-main-title">
          GET IN <span className="text-[var(--primary)]">TOUCH</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Info Column */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <Text as="h3" size="2xl" type="bold" className="uppercase mb-4">
              DON&apos;T BE SHY !
            </Text>
            <Text as="p" size="base" variant="secondary" className="mb-8 leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing new engineering projects,
              distributed systems architectures, or full-stack opportunities.
            </Text>

            {/* Contact Details */}
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <FaMapLocationDot className="text-[var(--primary)] text-3xl shrink-0 mt-1" />
                <div>
                  <Text as="span" size="xs" variant="dim" className="block uppercase">
                    Location
                  </Text>
                  <Text as="span" size="sm" type="semibold">
                    {PERSONAL_INFO.address}
                  </Text>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelopeOpen className="text-[var(--primary)] text-3xl shrink-0 mt-1" />
                <div>
                  <Text as="span" size="xs" variant="dim" className="block uppercase">
                    Mail Me
                  </Text>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    <Text as="span" size="sm" type="semibold" className="break-all">
                      {PERSONAL_INFO.email}
                    </Text>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneVolume className="text-[var(--primary)] text-3xl shrink-0 mt-1" />
                <div>
                  <Text as="span" size="xs" variant="dim" className="block uppercase">
                    Call Me
                  </Text>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    <Text as="span" size="sm" type="semibold">
                      {PERSONAL_INFO.phone}
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#252525] text-neutral-300 hover:text-white hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-300 shadow-md text-base sm:text-lg"
                title="Twitter / X"
              >
                <FaXTwitter />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#252525] text-neutral-300 hover:text-white hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-300 shadow-md text-base sm:text-lg"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#252525] text-neutral-300 hover:text-white hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-300 shadow-md text-base sm:text-lg"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#252525] text-neutral-300 hover:text-white hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-300 shadow-md text-base sm:text-lg"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Column with Formik */}
        <div className="lg:col-span-8">
          <form onSubmit={formik.handleSubmit} noValidate className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                id="name"
                name="name"
                placeholder="YOUR NAME"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
                required
              />
              <InputField
                id="email"
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
                required
              />
            </div>

            <InputField
              id="subject"
              name="subject"
              placeholder="YOUR SUBJECT"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && formik.errors.subject ? formik.errors.subject : undefined}
            />

            <TextareaField
              id="message"
              name="message"
              placeholder="YOUR MESSAGE"
              rows={6}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && formik.errors.message ? formik.errors.message : undefined}
              required
            />

            {formStatus === "success" && (
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300 text-sm animate-in fade-in duration-200">
                🚀 Thank you! Your message has been sent successfully.
              </div>
            )}

            {formStatus === "error" && (
              <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 text-sm animate-in fade-in duration-200">
                {errorMessage || "Failed to send message. Please try again or email directly."}
              </div>
            )}

            <div>
              <Button
                type="submit"
                variant="tunis-cta"
                size="lg"
                btnName={formStatus === "submitting" ? "SENDING..." : "SEND MESSAGE"}
                disabled={formStatus === "submitting"}
                secondaryIcon={<FaPaperPlane />}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
