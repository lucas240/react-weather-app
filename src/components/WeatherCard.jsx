import React from 'react';
import {
  Card, 
  CardImg, 
  CardBody,
  CardTitle, 
} from 'reactstrap';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <Card style={{width: '18rem'}}>
      <CardImg
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <CardBody>
        <CardTitle>{main}</CardTitle>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {temp_min} °C</p>
        {/* maximum temperature */}
        <p>Max: {temp_max} °C</p>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;