import React, { useContext } from 'react';

import { WeatherContext } from '../../Providers/WeatherProvider';

const WeatherData = () => {
  const { getWeather, getDate } = useContext(WeatherContext);

  const weather = getWeather();

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
      <div className='text-lg text-center'>
        On <span className='font-black'>{getDate()}</span>...
      </div>
      <br />
      <div className='text-center p-2 mb-7 rounded-xl bg-gray-400 dark:bg-gray-500 grid grid-cols-1 divide-y md:grid-cols-4 md:divide-y-0'>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          {
            weather.maxTemp
              ? <>{weather.maxTemp}°&nbsp;<strong>max</strong></>
              : "No data available :("
          }
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          {
            weather.minTemp
              ? <>{weather.minTemp}°&nbsp;<strong>min</strong></>
              : "No data available :("
          }
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center md:border-r-4'>
          {
            weather.rainSum
              ? <>{weather.rainSum}mm&nbsp;<strong>rain</strong></>
              : "No data available :("
          }
        </div>
        <div className='p-2 md:w-40 flex items-center justify-center'>
          {
            weather.windSpeed
              ? <>{weather.windSpeed}km/h&nbsp;<strong>Wind</strong></>
              : "No data available :("
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
