import React, { createContext, useState } from 'react';

const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
  const [date, setDate] = useState(Date.now())

  return (
    <WeatherContext.Provider value={{ date, setDate }}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export { WeatherContextProvider, WeatherContext }
