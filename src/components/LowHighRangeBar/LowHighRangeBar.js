import React from 'react';

export const LowHighRangeBar = ({ icon, day, min, max, high, low }) => {
  const barStyle = {
    width: 100 * (high - low) / (max - min) + '%',
    marginLeft: 100 * (low - min) / (max - min) + '%'
  }
  return (
    <div>
      <div className='LowHighRangeBar'>
        <span className={icon +' small-icon'}></span>
        <span className='day'>{day}</span>
        <span className='bar-container'>
          <span className='bar' style={barStyle}>
            <span className='low'>{low}°</span>
            <span className='high'>{high}°</span>
          </span>
        </span>
        <button className='button'>+</button>
      </div>
    </div>
  );
}