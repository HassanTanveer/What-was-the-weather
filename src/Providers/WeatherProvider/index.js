import React, { createContext, useEffect, useState } from 'react';

const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // Todo: Add date to local storage
  const [date, setDate] = useState(new Date())
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const toggleLoading = () => setIsLoading(prev => !prev)

  const getDate = () => date.toLocaleDateString("en-US", options)
  const changeYear = (byYear) => setDate(new Date(new Date().setFullYear(new Date().getFullYear() - byYear)))

  useEffect(() => {
    toggleLoading()
    fetch(
      'https://archive-api.open-meteo.com/v1/archive?latitude=31.38&longitude=74.19&start_date=2022-01-01&end_date=2022-01-01&daily=temperature_2m_max,temperature_2m_min,rain_sum,windspeed_10m_max&timezone=auto'
    )
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        toggleLoading();
      })
  }, [date]);

  return (
    <WeatherContext.Provider value={{ weather, isLoading, getDate, changeYear }}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export { WeatherContextProvider, WeatherContext }
