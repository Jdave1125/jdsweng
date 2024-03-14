import Particles from 'react-tsparticles';
import {loadSlim} from 'tsparticles-slim';
// import {loadFull} from 'tsparticles';
import { useCallback,useMemo } from 'react';

const ParticlesComp = () => {
    const options = useMemo(
        () => ({
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "grab",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.2,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 400,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }),
        [],
      );

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        // loadFull(engine)
    },[])

    return <Particles init={particlesInit} options={options} />
}

export default ParticlesComp;