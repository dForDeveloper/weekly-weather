import React, { Component } from 'react';

export class ForecastBar extends Component {
  constructor() {
    super();
    this.state = { isExpanded: false };
  }

  handleClick = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const { isExpanded } = this.state;
    const {
      min,
      max,
      day,
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
    } = this.props;
    const barStyle = {
      width: 100 * (high - low) / (max - min) + '%',
      marginLeft: 100 * (low - min) / (max - min) + '%'
    }
    return (
      <div>
        <div className='ForecastBar'>
          <span className={icon +' small-icon'}></span>
          <span className='day'>{day}</span>
          <span className='bar-container'>
            <span className='bar' style={barStyle}>
              <span className='low'>{low}°</span>
              <span className='high'>{high}°</span>
            </span>
          </span>
          <button className='button' onClick={this.handleClick}>{isExpanded ? '-' : '+'}</button>
        </div>
        {isExpanded &&
          <div>
            <h3>{summary}</h3>
            <p>Low: {low}°</p>
            <p>High: {high}°</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <p>Chance of {precipType}: {precipProbability}</p>
            <p>Wind: {wind}</p>
            <p>Humidity: {humidity}</p>
          </div>}
      </div>
    );
  }
}