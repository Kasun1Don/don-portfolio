"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const stats = [
  {
    value: "1.5 years",
    label: "Software Engineer",
    description: "Professional experience building full stack applications",
  },
  {
    value: "2015",
    label: "First personal website",
    description:
      "Interest in building on the web started with basic html and css a decade ago, in high school",
  },
  {
    value: "1.26B+",
    label: "Tokens used in 2025 (Cursor)",
    description: "AI assisted development for production applications",
  },
];

export function StatsCard() {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      speed={1000}
      modules={[Pagination, Autoplay]}
      className="h-full w-full"
    >
      {stats.map(({ value, label, description }) => (
        <SwiperSlide key={label}>
          <div className="flex h-full flex-col items-center justify-center gap-4 px-4 pt-4 pb-6 text-center md:pt-0">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm font-medium">{label}</p>
            <p className="text-muted-foreground text-xs">{description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
