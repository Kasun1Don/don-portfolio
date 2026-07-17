import Image from "next/image";
import Link from "next/link";

import { GitHubLight, LinkedIn } from "developer-icons";

import { BadgeCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const badges = [
  "Full Stack AI",
  "AI Product Developer (10k+ users)",
  "Crypto Exchange Developer (10k+ users)",
];

const profileLinkClassName =
  "text-foreground underline underline-offset-2 transition-opacity hover:opacity-80";

export function ProfileCard() {
  return (
    <>
      <CardHeader></CardHeader>
      <CardContent className="pb-8 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full sm:mx-0">
                <Image
                  src="/avatar.png"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-black/15" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8}>
              Pitching at UQ Hackathon
            </TooltipContent>
          </Tooltip>
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-3">
            <div className="mb-4 md:mb-0">
              <h1 className="text-center text-2xl font-bold md:text-left">
                Kasun L. Don
              </h1>
              <h2 className="text-muted-foreground text-center text-lg font-bold md:text-left">
                Full Stack AI Software Engineer
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {badges.map((label) => (
                <Badge
                  key={label}
                  variant="secondary"
                  className="gap-1 text-sm"
                >
                  <BadgeCheck size={18} />
                  {label}
                </Badge>
              ))}
            </div>
            <div className="text-muted-foreground space-y-2 text-sm">
              <p>
                I&apos;m an Australian-born full-stack AI software engineer
                passionate about building performant production software that
                scales. Previously, I worked on Hashlock AI, building Mastra
                workflows to analyze, audit, score findings, and support
                evaluation pipelines. I enjoy working in lean, fast-paced teams
                with full-stack ownership and high agency over what gets
                shipped.
              </p>
              <p>
                I focus on user experience and, increasingly, agent experience
                when shipping new features. I also think about optimizing
                developer experience as AI-native workflows evolve. I contribute
                to open source, including a{" "}
                <Link
                  href="https://github.com/NousResearch/hermes-agent/pull/56045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={profileLinkClassName}
                >
                  Telegram group onboarding pull request for Hermes Agent
                </Link>
                .
              </p>
              <p className="hidden md:block">
                I enjoy embracing and experimenting with new AI tools, then
                sharing what I learn with colleagues and the broader developer
                community through meetups.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/Kasun1Don"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLight size={16} />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://www.linkedin.com/in/kasun-ldon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn size={16} />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
}
