import React, { useCallback, useContext } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import {
  coldConfig,
  heatConfig,
  rainConfig,
  baseConfig,
  normalConfig
} from './config';
import { WeatherContext } from '../../Providers/WeatherProvider';

const WeatherParticles = () => {
  const { getWeather } = useContext(WeatherContext);

  const weather = getWeather();

  let weatherConfig = normalConfig;

  if (weather?.maxTemp > 30) {
    weatherConfig = heatConfig;
  } else if (weather?.maxTemp < 10) {
    weatherConfig = coldConfig;
  } else if (weather?.rainSum > 2) {
    weatherConfig = rainConfig;
  } else if (weather?.windSpeed > 5) {
    weatherConfig = rainConfig;
  }

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  const options = {
    ...weatherConfig,
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
