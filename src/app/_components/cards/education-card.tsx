"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCardExpansion } from "@/hooks/use-card-expansion";
import { cn } from "@/lib/utils";

interface Subject {
  name: string;
  grade: string;
}

const subjects: Subject[] = [
  { name: "Database Design and Development", grade: "HD" },
  { name: "Fundamental Programming", grade: "HD" },
  { name: "Applied Computation", grade: "HD" },
  { name: "Principles of Software Engineering", grade: "HD" },
  { name: "Principles of Information Systems", grade: "HD" },
  { name: "Principles of Programming", grade: "D" },
  { name: "Web Development", grade: "HD" },
  { name: "The IT Professional", grade: "HD" },
];

export function EducationCard() {
  const { isOpen } = useCardExpansion("education");

  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="font-medium">Formal Education</CardTitle>
        <GraduationCap className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="flex flex-col gap-5 overflow-y-auto pb-6">
        <div className="flex flex-row items-center justify-between gap-3">
          <Image
            src="/uq-logo.webp"
            alt="University of Queensland"
            width={200}
            height={150}
            className="object-contain brightness-0 invert"
          />
          {isOpen && (
            <span className="text-muted-foreground text-xs whitespace-nowrap">
              2018 – 2022
            </span>
          )}
        </div>

        <p
          className={cn("text-muted-foreground text-xs", {
            "line-clamp-2 md:line-clamp-2": !isOpen,
          })}
        >
          {subjects.map((s) => s.name + " (" + s.grade + ")").join(", ")}
        </p>
      </CardContent>
    </>
  );
}
