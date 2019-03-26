import React from 'react';
import { ForecastBar } from '../ForecastBar/ForecastBar';
import { Graph } from '../Graph/Graph';
import PropTypes from 'prop-types';

const WeatherContainer = ({ city, weather, timezone }) => {
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
  const cleanedSunrise = (new Date((sunrise - (timezone.userOffset - timezone.cityOffset)) * 1000))
    .toLocaleTimeString('en-US').replace(/:\d+/, '');
  const cleanedSunset = (new Date((sunset - (timezone.userOffset - timezone.cityOffset)) * 1000))
    .toLocaleTimeString('en-US').replace(/:\d+/, '');
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
          <p className="p">Sunrise: {cleanedSunrise}</p>
          <p className="p">Wind: {wind}</p>
          <p className="p">High: {high}°</p>
          <p className="p">Sunset: {cleanedSunset}</p>
          <p className="p">Humidity: {humidity}</p>

        </div>
      </article>
      <Graph data={graphData} low={low} high={high} />
      <section className="section">
        <h3 className="section--h3">7 Day Forecast</h3>
        {week.map((day, index) => {
          return (
            <ForecastBar key={index} min={minTemp} max={maxTemp} {...day} timezone={timezone} />
          );
        })}
      </section>
    </main>
  );
}

export default WeatherContainer;

WeatherContainer.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.object,
  timezone: PropTypes.object
}