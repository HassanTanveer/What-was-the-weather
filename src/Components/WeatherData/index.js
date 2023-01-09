import React, { useContext } from 'react';

import { WeatherContext } from '../../Providers/WeatherProvider';

const WeatherData = ({ date, tempData }) => {
  const { getDate } = useContext(WeatherContext);

  return (
    <div
      className='
        p-12
        rounded-xl
        text-black
        bg-gray-300
        dark:bg-slate-700
        dark:text-white'
    >
      <div className='text-lg'>
        On the date <span className='font-black'>{getDate()}</span>...
      </div>
      <br />
      <div className='p-2 mb-7 rounded-xl bg-gray-400 dark:bg-gray-500 grid grid-cols-1 divide-y md:grid-cols-4 md:divide-y-0'>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          32°&nbsp;<strong>max</strong>
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          16°&nbsp;<strong>min</strong>
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          50%&nbsp;<strong>rain</strong>
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center'>
          30%&nbsp;<strong>humidity</strong>
        </div>
      </div>
      <div className='flex items-center justify-center text-center'>
        It was a cool and breezy winter day<br />
        with little to no sunshine...
      </div>
    </div>
  )
}

export default WeatherData;
