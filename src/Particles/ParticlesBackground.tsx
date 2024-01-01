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
          options= {{
            
            particles: {
              color: {
                value: "#FF0000",
                animation: {
                  enable: true,
                  speed: 10
                }
              },
              effect: {
                type: "trail",
                options: {
                  trail: {
                    length: 50,
                    minWidth: 4
                  }
                }
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "destroy"
                },
                path: {
                  clamp: false,
                  enable: true,
                  delay: {
                    value: 0
                  },
                  generator: "polygonPathGenerator",
                  options: {
                    sides: 6,
                    turnSteps: 30,
                    angle: 30
                  }
                },
                random: false,
                speed: 3,
                straight: false
              },
              number: {
                value: 0
              },
              opacity: {
                value: 1
              },
              shape: {
                type: "circle"
              },
              size: {
                value: 2
              }
            },
            fullScreen: {
              zIndex: 0
            },
            emitters: {
              direction: "none",
              rate: {
                quantity: 1,
                delay: 0.25
              },
              size: {
                width: 0,
                height: 0
              },
              position: {
                x: 50,
                y: 50
              }
            }
          }}
        />
        {children}
      </div>
    );
  };
  
  export default ParticlesBackground;