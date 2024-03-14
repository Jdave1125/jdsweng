import Particles from 'react-tsparticles';
import {loadSlim} from 'tsparticles-slim';
// import {loadFull} from 'tsparticles';
import { useCallback,useMemo } from 'react';

const Homepart = () => {
    const options = useMemo(
        () => ({
          background: {
            color: {
              value: "#000000",
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
              value: "#7FFFD4",
              animation:{
                h:{  
                  enable: true,
                  speed: { min: 30, max: 60 },
                  sync: true,
              },
              s: {
                  enable: true,
                  speed: { min: 5, max: 10 },
                  sync: true,
              },
              l: {
                  enable: true,
                  speed: { min: 5, max: 10 },
                  sync: true,
              },
              }
            },
            links: {
              color: {
                value:"#7FFFD4",
              },
              distance: 150,
              enable: true,
              opacity: 0.2,
              width:1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 400,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 6 },
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

export default Homepart;