import React, { useContext } from 'react';

import { WeatherContext } from '../../Providers/WeatherProvider';

const WeatherData = () => {
  const { getWeather, getDate } = useContext(WeatherContext);

  const weather = getWeather();

  return (
    <div
      className='
        p-16
        rounded-xl
        text-black
        bg-gray-300
        dark:bg-slate-700
        dark:text-white'
    >
      <div className='text-lg text-center'>
        On <span className='font-black'>{getDate()}</span>...
      </div>
      <br />
      <div className='text-center p-4 mb-7 rounded-xl bg-gray-400 dark:bg-gray-500 grid grid-cols-1 divide-y md:grid-cols-4 md:divide-y-0'>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          <strong>max</strong>&nbsp;
          {
            weather.maxTemp
              ? <>{weather.maxTemp}°</>
              : 'No data 😕'
          }
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          <strong>min</strong>&nbsp;
          {
            weather.minTemp
              ? <>{weather.minTemp}°</>
              : 'No data 😕'
          }
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          <strong>rain</strong>&nbsp;
          {
            weather.rainSum !== null
              ? <>{weather.rainSum}mm</>
              : 'No data 😕'
          }
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center'>
          <strong>wind</strong>&nbsp;
          {
            weather.windSpeed
              ? <>{weather.windSpeed}km/h</>
              : 'No data 😕'
          }
        </div>
      </div>
      <div className='flex items-center justify-center text-center'>
        {/* Todo: Try to integrate OpenAI to auto-generate this description */}
        It was a cool and breezy winter day<br />
        with little to no sunshine...
      </div>
    </div>
  )
}

export default WeatherData;
