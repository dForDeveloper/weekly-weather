import React from 'react';
import { shallow } from 'enzyme';
import { Graph } from './Graph';
import { expectedWeather } from '../../utils/mockData';

describe('Graph', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Graph data={expectedWeather.graphData} low={19} high={37} />
    )
    expect(wrapper).toMatchSnapshot();
  });
});