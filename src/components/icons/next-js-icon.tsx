"use client";

import { useId } from "react";

type NextJsIconProps = {
  size?: number;
  className?: string;
};

/**
 * Next.js mark from developer-icons
 */
export function NextJsIcon({ size = 24, className }: NextJsIconProps) {
  const raw = useId();
  const suffix = raw.replace(/:/g, "");
  const gradA = `nextjs-${suffix}-a`;
  const gradB = `nextjs-${suffix}-b`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradA}
          x1="60.556"
          x2="80.278"
          y1="64.722"
          y2="89.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={gradB}
          x1="67.222"
          x2="67.111"
          y1="30"
          y2="59.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill="#000"
        d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.385 0 50s22.386 50 50 50"
      />
      <path
        fill={`url(#${gradA})`}
        d="M83.06 87.511 38.412 30H30v39.983h6.73V38.546L77.777 91.58a50 50 0 0 0 5.283-4.069"
      />
      <path fill={`url(#${gradB})`} d="M70.556 30h-6.667v40h6.667z" />
    </svg>
  );
}
