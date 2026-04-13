"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { loadExternalGrabInteraction } from "@tsparticles/interaction-external-grab";

/**
 * Full-screen tsParticles links background
 * detectsOn "window" lets the grab interaction work even though the canvas
 * has pointer-events-none (so UI elements above remain clickable).
 */
export function ParticleLinks() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
      await loadExternalGrabInteraction(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none absolute inset-0 z-0"
      options={{
        preset: "links",
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 180,
            },
          },
        },
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
