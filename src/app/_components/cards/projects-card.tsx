"use client";

import React from "react";
import Image from "next/image";
import { FolderOpenDot } from "lucide-react";
import { GitHubLight } from "developer-icons";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCardExpansion } from "@/hooks/use-card-expansion";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: React.ReactNode;
  image: string;
  url?: string;
}

const projects: Project[] = [
  {
    title: "NeoPoker",
    description:
      "NeoPoker is an early stage AI agent poker platform inspired by Moltbook, designed to let users bring their own agents to compete in poker matches. Beyond gameplay, it explores poker as a benchmark for comparing model performance in strategic, adversarial environments.",
    image: "/neopoker.png",
  },
  {
    title: "Hashlock AI Audit",
    description: (
      <>
        Worked on Hashlock AI, building multi step AI audit pipelines for smart
        contract analysis. Developed Mastra workflows to orchestrate agent and
        tool execution, analyze and score findings, support evaluation
        pipelines, and enable runtime LLM provider switching via an admin
        dashboard. Two developer team with product manager and designer.{" "}
        <a
          href="https://linkedin.com/pulse/building-labrys-hashlocks-ai-audit-tool-labrys-io-yu4ne/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="hover:text-foreground underline transition-colors"
        >
          Labrys client project case study
        </a>
        .
      </>
    ),
    image: "/hashlock_logo.jpeg",
    url: "https://aiaudit.hashlock.com/",
  },
  {
    title: "OpenClaw",
    description:
      "Built an agent orchestrator to automate daily tasks and act as a personal assistant, running on a dedicated MacBook with SSH access from my main machine.",
    image: "/openclaw_proj.png",
  },
  {
    title: "PumpTask",
    description: (
      <>
        pump.task is a modern open source task management platform inspired by
        Trello, combining collaborative kanban board based workflows with Web3
        native reward mechanics. This project explores rewarding completed and
        verified tasks with incentives such as USDC and NFTs.{" "}
        <a
          href="https://github.com/Kasun1Don/pump.task"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="hover:text-foreground inline-flex items-center gap-1 underline transition-colors"
        >
          GitHub repo
          <GitHubLight size={14} className="shrink-0" />
        </a>
        .
      </>
    ),
    image: "/pumptaskicon.png",
    url: "https://pump-task.vercel.app/",
  },
  {
    title: "Hika Design",
    description:
      "A professional services website for Hika Design Services Pty Ltd, an overhead power line engineering consultancy. Built with Next.js, React, Typescript, Tailwind and Resend for email, deployed on Vercel.",
    image: "/hika_design.png",
    url: "https://www.hikadesign.com.au",
  },
  {
    title: "FightTrack",
    description:
      "FightTrack is a MERN full stack boxing gym management platform. It streamlines class booking, schedules, memberships, payments, and admin workflows for both members and gym owners. Demo deployment is currently live for South Side Boxing Gym.",
    image: "/fighttrackicon.png",
    url: "https://fight-track.vercel.app/",
  },
];

export function ProjectsCard() {
  const { isOpen } = useCardExpansion("projects");

  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="font-medium">Projects</CardTitle>
        <FolderOpenDot className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent
        className={cn(
          "flex h-full gap-4 overflow-auto pb-6 transition-all duration-300",
          isOpen ? "flex-col" : "flex-col md:flex-row",
        )}
      >
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} isOpen={isOpen} />
        ))}
      </CardContent>
    </>
  );
}

function ProjectImage({
  url,
  image,
  title,
  size,
  isOpen,
}: {
  url?: string;
  image: string;
  title: string;
  size: number;
  isOpen: boolean;
}) {
  const img = (
    <div
      className={`relative size-[${size}px] shrink-0 transition-all duration-100 group-hover:scale-[0.9]`}
    >
      <Image
        src={image}
        alt={title}
        width={size}
        height={size}
        className={`aspect-square size-[${size}px] rounded-2xl object-cover shadow`}
      />
      <div className="absolute inset-0 rounded-2xl bg-black/15" />
    </div>
  );

  if (!url || !isOpen) return img;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="shrink-0"
      aria-label={`Open ${title}`}
    >
      {img}
    </a>
  );
}

function ProjectItem({
  title,
  description,
  image,
  url,
  isOpen,
}: Project & { isOpen: boolean }) {
  const handleRowClick = url
    ? () => window.open(url, "_blank", "noopener,noreferrer")
    : undefined;

  return (
    <>
      {/* Mobile: always show full layout */}
      <div
        className={cn(
          "group flex items-center gap-4 rounded-2xl md:hidden",
          url && "cursor-pointer",
        )}
        onClick={handleRowClick}
      >
        <ProjectImage
          url={url}
          image={image}
          title={title}
          size={80}
          isOpen={isOpen}
        />
        <div className="flex flex-col select-none">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>
      </div>

      {/* Desktop: image only when collapsed, full layout when open */}
      <div className="hidden md:block">
        {isOpen ? (
          <div
            className={cn(
              "group flex items-center gap-4 rounded-2xl",
              url && "cursor-pointer",
            )}
            onClick={handleRowClick}
          >
            <ProjectImage
              url={url}
              image={image}
              title={title}
              size={80}
              isOpen={isOpen}
            />
            <div className="flex flex-col select-none">
              <h3 className="text-sm font-medium">{title}</h3>
              <p className="text-muted-foreground text-xs">{description}</p>
            </div>
          </div>
        ) : (
          <div className="group">
            <ProjectImage
              url={url}
              image={image}
              title={title}
              size={110}
              isOpen={isOpen}
            />
          </div>
        )}
      </div>
    </>
  );
}
