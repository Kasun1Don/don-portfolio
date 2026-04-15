import Image from "next/image";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartNoAxesGantt } from "lucide-react";

export function WorkingOnCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="font-medium">Working On</CardTitle>
        <ChartNoAxesGantt className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center gap-2 pb-4">
        <Image
          src="/neopoker.png"
          alt="NeoPoker"
          width={100}
          height={100}
          className="rounded-xl object-cover"
        />
        <p className="text-muted-foreground text-sm">
          Inspired by Moltbook, building for agents (AX - Agent Experience)
        </p>
      </CardContent>
    </>
  );
}
