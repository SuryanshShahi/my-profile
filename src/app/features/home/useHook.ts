"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BlogItem, ProjectItem, TabType, ThemeColor } from "./types";
import { BLOGS, PERSONAL_INFO, PROJECTS, SKILLS, TIMELINE } from "./data";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  subject: Yup.string().trim(),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Please enter your message"),
});

export const useHome = () => {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [theme, setTheme] = useState<ThemeColor>("yellow");
  const [isThemeSwitcherOpen, setIsThemeSwitcherOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Close any open modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (selectedProject) { setSelectedProject(null); return; }
      if (selectedBlog)    { setSelectedBlog(null);    return; }
      if (isProfileModalOpen) { setIsProfileModalOpen(false); }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, selectedBlog, isProfileModalOpen]);

  // Sync theme with HTML root
  useEffect(() => {
    const savedTheme = localStorage.getItem("tunis_theme") as ThemeColor | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: ThemeColor) => {
    setTheme(newTheme);
    localStorage.setItem("tunis_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      setFormStatus("submitting");
      setErrorMessage("");

      const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              name: values.name,
              email: values.email,
              subject: values.subject || "New message from Portfolio",
              message: values.message,
            },
            publicKey
          );
          setFormStatus("success");
          resetForm();
          setTimeout(() => setFormStatus("idle"), 5000);
        } catch (err: unknown) {
          console.error("EmailJS sending error:", err);
          setFormStatus("error");
          setErrorMessage("Failed to send message via EmailJS. Please email me directly at suryansh06shahi@gmail.com.");
        }
      } else {
        // Local simulation / fallback when env keys are not provided
        setTimeout(() => {
          setFormStatus("success");
          resetForm();
          setTimeout(() => setFormStatus("idle"), 5000);
        }, 800);
      }
    },
  });

  const filteredProjects =
    categoryFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === categoryFilter);

  return {
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
    personalInfo: PERSONAL_INFO,
    skills: SKILLS,
    timeline: TIMELINE,
    blogs: BLOGS,
    formik,
    formStatus,
    errorMessage,
  };
};
