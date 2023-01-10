import React, { createContext, useContext, useEffect, useState } from 'react';

import { LocationContext } from '../LocationProvider';

const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
  const { location } = useContext(LocationContext);

  // Utils
  const getLastYear = (byYear = 1) => new Date(new Date().setFullYear(new Date().getFullYear() - byYear))
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // Todo: Add date to local storage
  const [date, setDate] = useState(getLastYear)
  const [weather, setWeather] = useState({})
  const [isWeatherLoading, setIsWeatherLoading] = useState(false)

  const toggleLoading = () => setIsWeatherLoading(prev => !prev)

  const getDate = () => date.toLocaleDateString("en-US", options)
  const changeYear = (byYear) => setDate(getLastYear(byYear))

  const getWeather = () => ({
    maxTemp: weather?.daily?.temperature_2m_max[0],
    minTemp: weather?.daily?.temperature_2m_min[0],
    rainSum: weather?.daily?.rain_sum[0],
    windSpeed: weather?.daily?.windspeed_10m_max[0],
  })

  useEffect(() => {
    console.log(location);
    const startDate = date.toISOString().split('T')[0]
    const endDate = startDate
    fetch(
      `https://archive-api.open-meteo.com/v1/archive?latitude=31.38&longitude=74.19&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,rain_sum,windspeed_10m_max&timezone=auto`
    )
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        toggleLoading();
      })
  }, [date, location]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        isWeatherLoading,
        getWeather,
        date,
        getDate,
        changeYear
      }}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export { WeatherContextProvider, WeatherContext }
