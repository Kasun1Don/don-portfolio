"use client";

import { cn } from "@/lib/utils";
import { useCardExpansion } from "@/hooks/use-card-expansion";
import { GridCard } from "@/components/ui/grid-card";

interface ExpandableCardProps {
  cardId: string;
  whenOpen?: string;
  whenClosed?: string;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

export function ExpandableCard({
  cardId,
  whenOpen,
  whenClosed,
  delay = 0,
  className,
  children,
}: ExpandableCardProps) {
  const { isOpen, onToggle, onClose } = useCardExpansion(cardId);

  return (
    <>
      {/* Expanding Card Focus Backdrop when open*/}
      <div
        className={cn(
          "fixed inset-0 z-10 hidden transition-all duration-300 md:block",
          isOpen
            ? "bg-black/10 backdrop-blur-md"
            : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />

      {/* Expandable Grid Card */}
      <GridCard
        delay={delay}
        className={cn(
          "relative cursor-pointer transition-[height,width] duration-300",
          isOpen
            ? cn("z-20", whenOpen)
            : cn(
                "md:hover:bg-accent md:hover:m-1 md:hover:shadow-lg",
                whenClosed,
              ),
          className,
        )}
      >
        <div onClick={onToggle} className="flex min-h-0 flex-1 flex-col">
          {children}
        </div>
        <p
          className={cn(
            "text-muted-foreground absolute right-0 bottom-2 left-0 hidden text-center text-xs transition-opacity duration-300 md:block",
            isOpen ? "opacity-0" : "opacity-60",
          )}
        >
          Click to see more
        </p>
      </GridCard>
    </>
  );
}
