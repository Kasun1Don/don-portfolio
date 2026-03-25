import { ParticleLinks } from "@/components/ui/particle-links";
import { CardGrid } from "@/app/_components/card-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <ParticleLinks />
      <main className="relative z-10 flex w-screen flex-col p-4 md:h-screen">
        <div className="m-auto flex w-full max-w-[1500px] flex-col md:h-full md:max-h-[900px]">
          <CardGrid />
        </div>
      </main>
    </div>
  );
}
