"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarDays, FaArrowRight } from "react-icons/fa6";
import { BlogItem } from "../types";
import Text from "@/shared/heading/Text";
import Chip from "@/shared/Chip";

interface BlogSectionProps {
  blogs: BlogItem[];
  onSelectBlog: (blog: BlogItem) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogs, onSelectBlog }) => {
  return (
    <section className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Background Watermark & Header */}
      <div className="section-title-container">
        <span className="watermark-title">POSTS</span>
        <h2 className="section-main-title">
          MY <span className="text-[var(--primary)]">BLOG</span>
        </h2>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => onSelectBlog(blog)}
            className="group rounded-2xl overflow-hidden bg-[#252525] border border-white/5 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[rgba(var(--primary-rgb),0.15)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
          >
            {/* Post Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-4 left-4">
                <Chip variant="primary" size="xs">
                  {blog.category}
                </Chip>
              </div>
            </div>

            {/* Post Meta & Summary */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-neutral-400 text-xs mb-3">
                  <FaCalendarDays className="text-[var(--primary)]" />
                  <span>{blog.date}</span>
                </div>

                <Text
                  as="h4"
                  size="lg"
                  type="bold"
                  className="mb-3 group-hover:text-[var(--primary)] transition-colors duration-200 line-clamp-2"
                >
                  {blog.title}
                </Text>

                <Text as="p" size="sm" variant="muted" className="line-clamp-3 leading-relaxed mb-4">
                  {blog.excerpt}
                </Text>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] group-hover:translate-x-1 transition-transform">
                <span>Read More</span>
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
