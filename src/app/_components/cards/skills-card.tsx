import {
  React,
  TailwindCSS,
  ShadcnUI,
  HTML5,
  JavaScript,
  TypeScript,
  CSS3,
  MongoDB,
  PostgreSQL,
  Docker,
  Git,
  TRPC,
  NodeJs,
  MaterialUI,
  Jira,
  ChakraUI,
  BunJs,
  ESLint,
  Figma,
  Homebrew,
  Bash,
  Postman,
  Prettier,
  RadixUI,
  Serverless,
  Slack,
  Storybook,
  VisualStudioCode,
  Zod,
  GitHubLight,
  Vitest,
  ClaudeAI,
  OpenAI,
  Insomnia,
} from "developer-icons";

import { Code2 } from "lucide-react";

import { NextJsIcon } from "@/components/icons/next-js-icon";
import { IconList } from "@/components/ui/icon";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">Skills</CardTitle>
        <Code2 className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="flex min-h-0 flex-1 flex-col gap-2 overflow-scroll pb-4 md:mb-6">
        <p className="text-muted-foreground text-xs">Languages</p>
        <div className="flex flex-wrap gap-2">
          <IconList icons={languages} size={24} />
        </div>

        <p className="text-muted-foreground text-xs">Frameworks</p>
        <div className="flex flex-wrap gap-2">
          <IconList icons={frameworks} size={24} />
        </div>

        <p className="text-muted-foreground text-xs">Database</p>
        <div className="flex flex-wrap gap-2">
          <IconList icons={databases} size={24} />
        </div>

        <p className="text-muted-foreground text-xs">DevOps</p>
        <div className="flex flex-wrap gap-2">
          <IconList icons={devops} size={24} />
        </div>

        <p className="text-muted-foreground text-xs">Tools & Services</p>
        <div className="flex flex-wrap gap-2">
          <IconList icons={tools} size={24} />
        </div>
      </CardContent>
    </>
  );
}

const languages = [
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "HTML5", icon: HTML5 },
  { name: "CSS", icon: CSS3 },
];

const frameworks = [
  { name: "Node", icon: NodeJs },
  { name: "React", icon: React },
  { name: "Next.js", icon: NextJsIcon },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "Radix UI", icon: RadixUI, className: "invert" },
  { name: "shadcn/ui", icon: ShadcnUI, className: "invert" },
  { name: "Material UI", icon: MaterialUI },
  { name: "Chakra UI", icon: ChakraUI },
  { name: "TRPC", icon: TRPC },
  { name: "Bun.js", icon: BunJs },
  { name: "ESLint", icon: ESLint },
  { name: "Vitest", icon: Vitest },
  { name: "Prettier", icon: Prettier },
  { name: "Storybook", icon: Storybook },
  { name: "Zod", icon: Zod },
];

const databases = [
  { name: "MongoDB", icon: MongoDB },
  { name: "PostgreSQL", icon: PostgreSQL },
];

const devops = [
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHubLight },
  { name: "Docker", icon: Docker },
  { name: "Serverless", icon: Serverless },
];

const tools = [
  { name: "Jira", icon: Jira },
  { name: "Figma", icon: Figma },
  { name: "Homebrew", icon: Homebrew },
  { name: "Bash", icon: Bash },
  { name: "Postman", icon: Postman },
  { name: "Insomnia", icon: Insomnia, className: "grayscale invert" },
  { name: "Slack", icon: Slack },
  { name: "Visual Studio Code", icon: VisualStudioCode },
  { name: "ClaudeAI", icon: ClaudeAI },
  { name: "OpenAI", icon: OpenAI },
];
