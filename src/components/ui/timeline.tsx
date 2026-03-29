import { cn } from "@/lib/utils";

interface TimelineItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  className?: string;
}

export function TimelineItem({
  children,
  isLast = false,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn("flex gap-x-3", className)}>
      {/* Spine */}
      <div
        className={cn(
          "relative flex flex-col items-center",
          !isLast &&
            "after:border-border after:absolute after:top-7 after:bottom-0 after:border-s",
        )}
      >
        <div className="relative z-10 flex size-7 items-center justify-center">
          <div className="bg-muted-foreground size-2 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className={cn("grow pt-0.5", !isLast && "pb-6")}>{children}</div>
    </div>
  );
}
