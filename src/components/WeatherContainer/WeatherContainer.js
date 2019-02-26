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
    <main className="WeatherContainer">
      <article className="article">
        <header className='article--header'>
          <h2 className="h2">
            <div className={icon}></div>
            {temperature}° and {summary} in {city}
          </h2>
          <span className="header--span--feels">
            Feels like: {feelsLike}°
          </span>
          <span className="header--span--precip">
            Chance of {precipType}: {precipProbability}
          </span>
        </header>
        <div className="article--div">
          <p className="p">Low: {low}°</p>
          <p className="p">Sunrise: {sunrise}</p>
          <p className="p">Wind: {wind}</p>
          <p className="p">High: {high}°</p>
          <p className="p">Sunset: {sunset}</p>
          <p className="p">Humidity: {humidity}</p>

        </div>
      </article>
      <Graph data={graphData} low={low} high={high} />
      <section className="section">
        {week.map((day, index) => {
          return (
            <ForecastBar key={index} min={minTemp} max={maxTemp} {...day} />
          );
        })}
      </section>
    </main>
  );
}

export default WeatherContainer;

WeatherContainer.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.object
}