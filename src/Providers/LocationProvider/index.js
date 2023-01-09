import React, { createContext, useState } from 'react';

const LocationContext = createContext()

const LocationContextProvider = (props) => {
  const [location, setlocation] = useState({ lat: 20, lon: 30 })

  const changeLocation = (data) => setlocation(prevLocation => ({ ...prevLocation, ...data }))

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {props.children}
    </LocationContext.Provider>
  )
}

export { LocationContextProvider, LocationContext }
