"use client";

import React from "react";
import Image from "next/image";
import { FaXmark, FaCalendarDays, FaTag } from "react-icons/fa6";
import { BlogItem } from "@/app/features/home/types";
import Text from "@/shared/heading/Text";
import Chip from "@/shared/Chip";

import MarkdownRenderer from "@/shared/markdown/MarkdownRenderer";

interface BlogModalProps {
  blog: BlogItem | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#252525] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#1e1e1e] text-neutral-300 hover:text-white hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-200 z-10"
        >
          <FaXmark className="text-lg" />
        </button>

        {/* Tags and Title */}
        <div className="flex items-center gap-3 mb-3">
          <Chip variant="primary" size="xs" icon={<FaTag />}>
            {blog.category}
          </Chip>
          <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
            <FaCalendarDays />
            <span>{blog.date}</span>
          </div>
        </div>

        <Text as="h2" size="2xl" type="bold" className="mb-6">
          {blog.title}
        </Text>

        {/* Featured Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6 border border-white/10">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Article Body with Markdown Rendering */}
        <div className="pt-2">
          <MarkdownRenderer content={blog.content} />
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
