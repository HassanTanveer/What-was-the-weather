import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import { heatConfig, baseConfig } from './config';

const WeatherParticles = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  const options = {
    ...heatConfig,
    ...baseConfig
  }

  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default WeatherParticles;
