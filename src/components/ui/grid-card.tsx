"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ENTRANCE_INITIAL = { opacity: 0, scale: 0.5 } as const;
const ENTRANCE_ANIMATE = { opacity: 1, scale: 1 } as const;
const ENTRANCE_SPRING = {
  duration: 0.4,
  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
} as const;

interface GridCardProps {
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

export function GridCard({ delay = 0, className, children }: GridCardProps) {
  return (
    <motion.div
      className={cn("w-full rounded-xl md:h-full md:min-h-0", className)}
      initial={ENTRANCE_INITIAL}
      animate={ENTRANCE_ANIMATE}
      transition={{ ...ENTRANCE_SPRING, delay }}
    >
      <Card className="h-full min-h-0 w-full gap-0">{children}</Card>
    </motion.div>
  );
}
