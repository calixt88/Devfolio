"use client";

import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticlesComponent: React.FC<{ id: string }> = ({ id }) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#00000000", // Make background transparent
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        number: {
          value: 50, // Initial number of particles
        },
        links: {
          enable: true,
          distance: 200,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  return <Particles id={id} init={particlesInit} options={options} className="fixed top-0 left-0 w-full h-full" />;
};

export default ParticlesComponent;
