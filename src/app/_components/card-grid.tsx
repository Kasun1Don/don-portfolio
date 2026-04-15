"use client";

import { GridCard } from "@/components/ui/grid-card";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { SkillsCard } from "./cards/skills-card";
import { ProfileCard } from "./cards/profile-card";
import { EducationCard } from "./cards/education-card";
import { EmploymentCard } from "./cards/employment-card";
import { WorkingOnCard } from "./cards/working-on-card";
import { DemoVideoCard } from "./cards/demo-video-card";
import { MyPortfolioCard } from "./cards/my-portfolio-card";
import { StatsCard } from "./cards/stats-card";
import { ProjectsCard } from "./cards/projects-card";

const ENTRANCE_ANIMATION_DELAY_MULTIPLIER = 1.5;

export function CardGrid() {
  return (
    <>
      {/* Mobile: stacked column */}
      <div className="flex flex-col gap-4 pb-4 md:hidden">
        <GridCard>
          <ProfileCard />
        </GridCard>
        <GridCard>
          <StatsCard />
        </GridCard>
        <GridCard>
          <WorkingOnCard />
        </GridCard>
        <GridCard>
          <SkillsCard />
        </GridCard>
        <GridCard>
          <ProjectsCard />
        </GridCard>
        <GridCard>
          <EmploymentCard />
        </GridCard>
        <GridCard>
          <EducationCard />
        </GridCard>
        <GridCard>
          <MyPortfolioCard />
        </GridCard>
      </div>

      {/* Desktop */}
      <div className="hidden h-full md:grid md:grid-cols-10 md:grid-rows-8 md:gap-4">
        <ExpandableCard
          cardId="projects"
          className="col-span-6 row-span-2"
          whenOpen="md:h-[200%]"
          delay={0.1 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <ProjectsCard />
        </ExpandableCard>

        <ExpandableCard
          cardId="skills"
          className="col-span-4 row-span-2"
          whenOpen="md:h-[180%] md:w-[120%] md:-left-[20%]"
          delay={0.2 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <SkillsCard />
        </ExpandableCard>

        <GridCard
          className="col-span-2 row-span-2"
          delay={0.85 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <WorkingOnCard />
        </GridCard>

        <GridCard
          className="col-span-6 row-span-4"
          delay={1.0 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <ProfileCard />
        </GridCard>

        <ExpandableCard
          cardId="employment"
          className="col-span-2 row-span-6"
          whenOpen="md:w-[250%] md:-left-[150%]"
          delay={0.3 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <EmploymentCard />
        </ExpandableCard>

        <GridCard
          className="col-span-2 row-span-2"
          delay={0.75 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <MyPortfolioCard />
        </GridCard>

        <ExpandableCard
          cardId="education"
          className="col-span-4 row-span-2"
          whenOpen="md:w-[120%]"
          delay={0.65 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <EducationCard />
        </ExpandableCard>

        <GridCard
          className="col-span-2 row-span-2"
          delay={0.5 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <DemoVideoCard />
        </GridCard>

        <GridCard
          className="col-span-2 row-span-2"
          delay={0.4 * ENTRANCE_ANIMATION_DELAY_MULTIPLIER}
        >
          <StatsCard />
        </GridCard>
      </div>
    </>
  );
}
