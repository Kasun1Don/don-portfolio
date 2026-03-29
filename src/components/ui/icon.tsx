import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipIconProps {
  label?: string;
  children: React.ReactNode;
}

interface TechIcon {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
}

export function Icon({ label, children }: TooltipIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={10}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

interface IconListProps {
  icons: TechIcon[];
  size?: number;
}

export function IconList({ icons, size }: IconListProps) {
  return (
    <>
      {icons.map(({ name, icon: IconComponent, className }) => (
        <Icon key={name} label={name}>
          <IconComponent
            size={size}
            className={`shrink-0${className ? ` ${className}` : ""}`}
          />
        </Icon>
      ))}
    </>
  );
}
