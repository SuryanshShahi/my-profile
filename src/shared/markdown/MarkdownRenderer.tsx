"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaCheck, FaCopy } from "react-icons/fa6";

interface MarkdownRendererProps {
  content: string | string[];
  className?: string;
}

const CodeBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const codeString = String(children).replace(/\n$/, "");
  const isInline = !match && !codeString.includes("\n");

  if (isInline) {
    return (
      <code
        className="px-1.5 py-0.5 mx-0.5 text-xs font-mono bg-[#1c1c1c] text-[var(--primary)] border border-white/10 rounded font-medium"
        {...props}
      >
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 bg-[#141414] shadow-lg group">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1b1b1b] border-b border-white/5 text-xs text-neutral-400 font-mono">
        <span className="uppercase text-[11px] tracking-wider text-[var(--primary)] font-semibold">
          {match ? match[1] : "code"}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all duration-200 text-xs cursor-pointer"
          title="Copy code"
        >
          {copied ? (
            <>
              <FaCheck className="text-emerald-400 text-xs" />
              <span className="text-emerald-400 text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <FaCopy className="text-xs" />
              <span className="text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-mono text-neutral-200 bg-[#121212]">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    </div>
  );
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = "",
}) => {
  const markdownText = Array.isArray(content) ? content.join("\n\n") : content;

  return (
    <div className={`markdown-content text-neutral-300 leading-relaxed text-sm sm:text-base ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-8 mb-4 tracking-tight border-b border-white/10 pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-7 mb-3 tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] inline-block" />
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg sm:text-xl font-bold text-white mt-6 mb-2.5 tracking-tight text-white/95">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base sm:text-lg font-semibold text-neutral-200 mt-4 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-neutral-300 leading-relaxed font-normal">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-4 ml-4 sm:ml-6 list-disc space-y-2 text-neutral-300 marker:text-[var(--primary)]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 ml-4 sm:ml-6 list-decimal space-y-2 text-neutral-300 marker:text-[var(--primary)] marker:font-semibold">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="pl-1 leading-relaxed">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-4 pl-4 border-l-4 border-[var(--primary)] bg-white/5 py-2.5 pr-4 rounded-r-lg italic text-neutral-200">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-6 border-white/10" />,
          code: CodeBlock as never,
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
