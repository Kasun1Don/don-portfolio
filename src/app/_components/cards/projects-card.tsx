"use client";

import Image from "next/image";
import { FolderOpenDot } from "lucide-react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCardExpansion } from "@/hooks/use-card-expansion";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "NeoPoker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/neopoker.png",
    url: "https://neopoker.app",
  },
  {
    title: "Hashlock AI Audit",
    description:
      "AI-powered smart contract auditing tool built at Labrys for Hashlock — automating vulnerability detection and security analysis for blockchain applications. Featured on LinkedIn Pulse.",
    image: "/hashlock_logo.jpeg",
    url: "https://linkedin.com/pulse/building-labrys-hashlocks-ai-audit-tool-labrys-io-yu4ne/",
  },
  {
    title: "OpenClaw",
    description:
      "Built an agent orchestrator to automate daily tasks and act as a personal assistant, running on a dedicated MacBook Neo with SSH access from my main machine.",
    image: "/openclaw_proj.png",
    url: "https://github.com/kasunl",
  },
  {
    title: "PumpTask",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: "/pumptaskicon.png",
    url: "https://pumptask.app",
  },
  {
    title: "FightTrack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/fighttrackicon.png",
    url: "https://fighttrack.app",
  },
  {
    title: "Hika Design",
    description:
      "Freelance design studio delivering brand identity, UI/UX, and digital assets for clients across various industries.",
    image: "/hika_design.png",
    url: "https://hikadesign.com",
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
          "flex h-full gap-4 overflow-auto transition-all duration-300",
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

function ProjectItem({
  title,
  description,
  image,
  url,
  isOpen,
}: Project & { isOpen: boolean }) {
  if (!isOpen) {
    return (
      <>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group flex cursor-pointer items-center gap-4 rounded-2xl md:hidden"
        >
          <div className="relative size-[80px] shrink-0 transition-all duration-100 group-hover:scale-[0.8]">
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="aspect-square size-[80px] rounded-2xl object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-black/15" />
          </div>
          <div className="flex flex-col select-none">
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-muted-foreground text-xs">{description}</p>
          </div>
        </a>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative hidden md:block"
        >
          <Image
            src={image}
            alt={title}
            width={110}
            height={110}
            className="aspect-square rounded-2xl object-cover shadow"
          />
          <div className="absolute inset-0 rounded-2xl bg-black/15" />
        </a>
      </>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="group flex cursor-pointer items-center gap-4 rounded-2xl"
    >
      <div className="relative size-[80px] shrink-0 transition-all duration-100 group-hover:scale-[0.8]">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="aspect-square size-[80px] rounded-2xl object-cover"
        />
        <div className="absolute inset-0 rounded-2xl bg-black/15" />
      </div>
      <div className="flex flex-col select-none">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </a>
  );
}
