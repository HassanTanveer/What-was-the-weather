import React from 'react';

const WeatherData = ({ date, tempData }) => {
  return (
    <div>
      <div>
        On the date {date}...
      </div>
      <div>
        32° max 16° min 50% precipitation 30% humidity
      </div>
      <div>
        It was a cool and breezy winter day<br />
        with little to no sunshine...
      </div>
    </div>
  )
}

export default WeatherData;
