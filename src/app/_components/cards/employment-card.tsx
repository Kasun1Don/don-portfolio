"use client";

import { BriefcaseBusiness } from "lucide-react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimelineItem } from "@/components/ui/timeline";
import { useCardExpansion } from "@/hooks/use-card-expansion";
import { cn } from "@/lib/utils";

interface Experience {
  company: string;
  title: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Labrys",
    title: "Full Stack Software Engineer",
    description:
      "Built production AI and Web 3 applications for client projects at Australia's largest blockchain development agency.",
  },
  {
    company: "Contract Work",
    title: "Software Engineer",
    description:
      "Supported engineering delivery for a decentralized crypto exchange by resolving a high volume of backlog tickets. Square + Toggle for invoicing work.",
  },
  {
    company: "Labrys",
    title: "Intern Software Developer",
    description:
      "Competed with 5 interns and landed a permanent role at Australia's largest blockchain development agency.",
  },
  {
    company: "Askable",
    title: "Growth Manager",
    description:
      "Growth Manager at software startup Askable, a UX Research platform.",
  },
  {
    company: "TANDA",
    title: "Software SDR",
    description:
      "Software Sales Development Representative at TANDA, workforce management software.",
  },
];

export function EmploymentCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="font-medium">Experience</CardTitle>
        <BriefcaseBusiness className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="overflow-y-auto pb-6">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={`${exp.company}-${exp.title}`}
            {...exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </CardContent>
    </>
  );
}

function ExperienceItem({
  company,
  title,
  description,
  isLast,
}: Experience & { isLast: boolean }) {
  const { isOpen } = useCardExpansion("employment");

  return (
    <TimelineItem isLast={isLast}>
      <p className="text-sm leading-tight font-medium">{title}</p>
      <p className="text-muted-foreground text-xs">{company}</p>
      <p
        className={cn("text-muted-foreground mt-1 text-xs", {
          "line-clamp-4": !isOpen,
        })}
      >
        {description}
      </p>
    </TimelineItem>
  );
}
