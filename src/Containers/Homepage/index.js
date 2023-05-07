import React, { useContext } from 'react';

import Button from '../../Components/Button';
import Header from '../../Components/Header';
import WeatherParticles from '../../Components/WeatherParticles';
import WeatherData from '../../Components/WeatherData';

import { WeatherContext } from '../../Providers/WeatherProvider';

const Homepage = () => {
  const { changeYear } = useContext(WeatherContext);

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
      <WeatherParticles />
    </>
  );
};

export default Homepage;
