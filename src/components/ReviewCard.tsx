import React from "react";
import { getContrastColor } from "../lib/colors";

interface ReviewCardProps {
  name: string;
  bio?: string;
  review: string;
  socialLink?: string;
  image?:
    | { src: string; width: number; height: number; format: string }
    | string;
  index?: number;
  color?: string;
  insta?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  bio,
  review,
  socialLink,
  image,
  index = 0,
  color,
  insta,
}) => {
  // If no color is provided, default to white
  const cardBg = color || "#ffffff";
  const textColor = getContrastColor(cardBg);
  const isDark = textColor === "white";

  // Random rotation for "messy" brutalist look
  const rotations = [-2, 1, -1, 2, -1.5, 1.5, -2.5, 2.5];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className="h-full group transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={`
          relative h-full
          border-4 border-black
          shadow-[8px_8px_0px_0px_black]
          group-hover:shadow-[16px_16px_0px_0px_black]
          group-hover:rotate-0
          transition-all duration-300
          flex flex-col
        `}
        style={{ backgroundColor: cardBg }}
      >
        {/* Card Header - NAME IS HERO */}
        <div
          className="p-4 md:p-6 border-b-4 border-black"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.05)",
          }}
        >
          <div className="flex items-center gap-4">
            {/* Avatar */}
            {image && (
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 border-3 border-black overflow-hidden  transition-transform duration-300 hover:scale-110 hover:rotate-[5deg]">
                <img
                  src={
                    typeof image === "string" &&
                    !image.startsWith("/") &&
                    !image.startsWith("http")
                      ? `/${image}`
                      : typeof image === "string"
                        ? image
                        : image.src
                  }
                  alt={name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            )}

            {/* Name & Bio */}
            <div className="min-w-0 flex-1">
              <h3
                className="text-xl md:text-2xl font-black uppercase leading-none tracking-tight truncate"
                style={{ color: isDark ? "#fff" : "#000" }}
              >
                {name}
              </h3>
              {bio && (
                <p
                  className="text-xs md:text-sm font-bold mt-1 opacity-70 truncate"
                  style={{ color: isDark ? "#fff" : "#000" }}
                >
                  {bio}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Card Content - Review */}
        <div className="p-4 md:p-6 flex-grow flex flex-col">
          <p
            className="font-mono text-sm md:text-base leading-relaxed flex-grow"
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            "{review}"
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 mt-4">
            {/* Profile Link */}
            {socialLink && (
              <a
                href={socialLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  self-start
                  px-4 py-2
                  text-xs font-black uppercase tracking-widest
                  border-3 border-current
                  transition-all duration-150
                  hover:translate-x-[-2px] hover:translate-y-[-2px]
                  hover:shadow-[4px_4px_0px_0px_currentColor]
                  active:translate-x-[2px] active:translate-y-[2px]
                  active:shadow-none
                  hover:scale-105 active:scale-95
                `}
                style={{ color: isDark ? "#fff" : "#000" }}
              >
                View Profile →
              </a>
            )}

            {/* Instagram Link */}
            {insta && (
              <a
                href={`https://instagram.com/${insta}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  self-start
                  px-3 py-2
                  text-xs font-black uppercase tracking-widest
                  border-3 border-current
                  transition-all duration-150
                  hover:translate-x-[-2px] hover:translate-y-[-2px]
                  hover:shadow-[4px_4px_0px_0px_currentColor]
                  active:translate-x-[2px] active:translate-y-[2px]
                  active:shadow-none
                  flex items-center gap-1.5
                  hover:scale-105 active:scale-95
                `}
                style={{ color: isDark ? "#fff" : "#000" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @{insta}
              </a>
            )}
          </div>
        </div>

        {/* Decorative Corner */}
        <div
          className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent)] border-2 border-black transform rotate-12"
          style={{ boxShadow: "2px 2px 0px 0px black" }}
        />
      </div>
    </div>
  );
};
