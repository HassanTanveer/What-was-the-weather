import React, { useContext } from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSnowPreset } from "tsparticles-preset-snow";

import Button from '../../Components/Button';
import Header from '../../Components/Header';
import WeatherData from '../../Components/WeatherData';

import { WeatherContext } from '../../Providers/WeatherProvider';

const Homepage = () => {
  const { changeYear } = useContext(WeatherContext);
  const particlesInit = useCallback(async engine => {
    await loadSnowPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
      <div
        id="HomePage"
        className='
        relative
        font-mono 
        text-black 
        dark:text-white 
        p-6 
        flex 
        items-center
        flex-col
        z-50
      '
      >
        <div className="mb-7" >
          <Header />
        </div>
        <div className='mb-5 flex items-center flex-row flex-wrap justify-center'>
          {/* Add option to choose custom months and years ago */}
          <Button text="1 year ago" onClick={() => changeYear(1)} />
          <Button text="2 years ago" onClick={() => changeYear(2)} />
          <Button text="5 years ago" onClick={() => changeYear(5)} />
        </div>
        <div>
          <WeatherData date="10th January 2022" />
        </div>
      </div >
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          preset: "snow",
          fpsLimit: 60,
          background: {
            backgroundImage: "linear-gradient(to right, white, #BEE3F8)",
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              density: {
                enable: true,
                area: 1500,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      />
    </>
  );
};

export default Homepage;
