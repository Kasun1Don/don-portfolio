import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClapperboardIcon } from "lucide-react";

export function DemoVideoCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="font-medium">Demo Video</CardTitle>
        <ClapperboardIcon className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="flex min-h-0 flex-1 flex-col items-center justify-center p-0">
        <p className="text-muted-foreground text-center">Coming soon...</p>
        {/* <iframe
          src=""
          title="Portfolio intro video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        /> */}
      </CardContent>
    </>
  );
}
