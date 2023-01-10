import React, { createContext, useEffect, useState } from 'react';

const LocationContext = createContext()

const LocationContextProvider = (props) => {
  const [location, setlocation] = useState({
    accuracy: null,
    latitude: 51.507351,
    longitude: -0.127758
  })
  const changeLocation = (data) => setlocation(prevLocation => ({ ...prevLocation, ...data }))

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) => changeLocation({
        accuracy: data.coords.accuracy,
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      })
    );
  }, [])

  console.log(location);

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {props.children}
    </LocationContext.Provider>
  )
}

export { LocationContextProvider, LocationContext }
