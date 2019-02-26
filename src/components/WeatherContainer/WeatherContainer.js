import React from 'react';
import { ForecastBar } from '../ForecastBar/ForecastBar';
import { Graph } from '../Graph/Graph';
import PropTypes from 'prop-types';

const WeatherContainer = ({ city, weather }) => {
  const { today, week, minTemp, maxTemp, graphData } = weather;
  const {
    temperature,
    feelsLike,
    summary,
    icon,
    precipType,
    precipProbability,
    low,
    high,
    sunrise,
    sunset,
    wind,
    humidity
  } = today;

  return (
    <div>
      <h1>{temperature}° and {summary} in {city}</h1>
      <div className={icon}></div>
      <p>Feels like: {feelsLike}°</p>
      <p>Low: {low}°</p>
      <p>High: {high}°</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
      <p>Chance of {precipType}: {precipProbability}</p>
      <p>Wind: {wind}</p>
      <p>Humidity: {humidity}</p>
      <Graph data={graphData} low={low} high={high} />
      {week.map((day, index) => {
        return (
          <ForecastBar key={index} min={minTemp} max={maxTemp} {...day} />
        );
      })}
    </div>
  );
}

export default WeatherContainer;

WeatherContainer.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.object
}