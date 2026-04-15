import Link from "next/link";
import { Code } from "lucide-react";
import {
  GitHubLight,
  TypeScript,
  React,
  TailwindCSS,
  ShadcnUI,
  BunJs,
} from "developer-icons";

import { NextJsIcon } from "@/components/icons/next-js-icon";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconList } from "@/components/ui/icon";

const GITHUB_URL = "https://github.com/Kasun1Don/don-portfolio";

const stack = [
  { name: "TypeScript", icon: TypeScript },
  { name: "React", icon: React },
  { name: "Next.js", icon: NextJsIcon },
  { name: "Bun.js", icon: BunJs },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "shadcn/ui", icon: ShadcnUI, className: "invert" },
];

export function MyPortfolioCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">Personal Portfolio Build</CardTitle>
        <Code className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="flex h-full flex-col pb-4">
        <CardDescription className="line-clamp-2">
          Built with Next.js, React, Tailwind CSS, and shadcn/ui, using Bun
        </CardDescription>

        <div className="flex justify-between gap-2 py-4">
          <IconList size={24} icons={stack} />
        </div>

        <Button asChild variant="outline" className="gap-2">
          <Link href={GITHUB_URL} target="_blank">
            <GitHubLight size={16} />
            View repo on GitHub
          </Link>
        </Button>
      </CardContent>
    </>
  );
}
