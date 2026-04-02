"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

/**
 * Full-screen tsParticles links background
 *
 * The tsParticles engine must be initialized once on mount
 */
export function ParticleLinks() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none absolute inset-0 z-0"
      options={{
        preset: "links",
        particles: {
          number: {
            density: {
              enable: true,
            },
          },
        },
      }}
    />
  );
}
