import React from 'react';
import { shallow } from 'enzyme';
import WeatherContainer from './WeatherContainer';
import { expectedWeather } from '../../utils/mockData';

describe('WeatherContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <WeatherContainer city={'Denver, CO'} weather={expectedWeather} />
    )
    expect(wrapper).toMatchSnapshot();
  });
});