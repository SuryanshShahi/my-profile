"use client";

import React from "react";
import clsx from "clsx";
import { FaGear, FaXmark } from "react-icons/fa6";
import { ThemeColor } from "@/app/features/home/types";
import Text from "@/shared/heading/Text";

interface ThemeSwitcherProps {
  currentTheme: ThemeColor;
  onThemeChange: (theme: ThemeColor) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const colorPresets: { id: ThemeColor; name: string; hex: string }[] = [
  { id: "yellow", name: "Yellow", hex: "#ffb400" },
  { id: "blue", name: "Blue", hex: "#4169e1" },
  { id: "green", name: "Green", hex: "#72b626" },
  { id: "purple", name: "Purple", hex: "#6957af" },
  { id: "red", name: "Red", hex: "#ee3158" },
  { id: "goldenrod", name: "Goldenrod", hex: "#e58c14" },
  { id: "magenta", name: "Magenta", hex: "#df327e" },
  { id: "orange", name: "Orange", hex: "#fa5b0f" },
  { id: "yellowgreen", name: "Yellowgreen", hex: "#9acd32" },
  { id: "blueviolet", name: "Blueviolet", hex: "#8a2be2" },
];

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme,
  onThemeChange,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="fixed top-1/3 left-0 z-50">
      {/* Gear Toggle Tab on Left Edge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-r-lg bg-white text-neutral-900 flex items-center justify-center text-xl shadow-2xl transition-all duration-200 hover:bg-neutral-100 active:scale-95 cursor-pointer"
        title="Customize Theme Color"
        aria-label="Customize Theme Color"
      >
        <FaGear className={isOpen ? "animate-none" : "animate-spin [animation-duration:8s]"} />
      </button>

      {/* Popover Panel */}
      {isOpen && (
        <div className="absolute top-0 left-14 w-64 bg-[#252525] border border-white/15 rounded-2xl p-5 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <Text as="h4" size="sm" type="bold" className="uppercase tracking-wider">
              COLOR SWITCHER
            </Text>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <FaXmark />
            </button>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {colorPresets.map((preset) => {
              const isSelected = currentTheme === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => onThemeChange(preset.id)}
                  style={{ backgroundColor: preset.hex }}
                  title={preset.name}
                  className={clsx(
                    "w-8 h-8 rounded-full transition-all duration-200 cursor-pointer shadow-sm relative",
                    isSelected
                      ? "ring-2 ring-white ring-offset-2 ring-offset-[#252525] scale-110"
                      : "hover:scale-105 opacity-85 hover:opacity-100"
                  )}
                />
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-center">
            <Text as="p" size="xxs" variant="dim">
              Click any color to switch accents live
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
