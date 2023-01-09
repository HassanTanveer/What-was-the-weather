import React, { createContext, useState } from 'react';

const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const [date, setDate] = useState(new Date())

  const getDate = () => date.toLocaleDateString("en-US", options)
  const changeYear = (byYear) => setDate(new Date(new Date().setFullYear(new Date().getFullYear() - byYear)))

  return (
    <WeatherContext.Provider value={{ date, getDate, setDate, changeYear }}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export { WeatherContextProvider, WeatherContext }
