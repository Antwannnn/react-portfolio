import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ children }: React.PropsWithChildren<{}>) => {
    const particlesInit = useCallback(async (engine: Engine) => {
      await loadSlim(engine);
    }, []);
    return (
      <div id="particles-background">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: true,
              zIndex: 0
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: {
                  enable: true,
                  mode: "repulse",
                  parallax: { enable: false, force: 60, smooth: 10 }
                },
                resize: true
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 }
              }
            },
            particles: {
              color: { value: "#ffffff" },
              move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 600
                },
                value: 80
              },
              opacity: {
                value: {
                  min: 0,
                  max: 0.4
                }
              },
              shape: {
                type: "image",
                image: {
                  src: "", // Chemin vers votre image de cœur
                }
              },
              size: {
                value: { min: 2, max: 8 }
              }
            }
          }
          }
        />
        {children}
      </div>
    );
  };
  
  export default ParticlesBackground;