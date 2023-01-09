import React, { useContext } from 'react';

import Button from '../../Components/Button';
import Header from '../../Components/Header';
import WeatherData from '../../Components/WeatherData';

import { WeatherContext } from '../../Providers/WeatherProvider';

const Homepage = () => {
  const { changeYear } = useContext(WeatherContext);

  return (
    <div
      id="HomePage"
      className='
        font-mono 
        bg-gradient-to-r  
        from-white
        to-blue-300
        dark:bg-gradient-to-r 
        dark:from-blue-800
        dark:via-indigo-900
        dark:to-slate-800
        text-black 
        dark:text-white 
        p-6 
        flex 
        items-center
        flex-col
      '
    >
      <div className="mb-7" >
        <Header />
      </div>
      <div className='mb-5 flex items-center flex-col sm:flex-row'>
        {/* Add option to choose custom months and years ago */}
        <Button text="1 year ago" onClick={() => changeYear(1)} />
        <Button text="2 years ago" onClick={() => changeYear(2)} />
        <Button text="5 years ago" onClick={() => changeYear(5)} />
      </div>
      <div>
        <WeatherData date="10th January 2022" />
      </div>
    </div >
  );
};

export default Homepage;
