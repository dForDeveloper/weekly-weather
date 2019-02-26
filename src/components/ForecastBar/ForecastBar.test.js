import React from 'react';
import { shallow } from 'enzyme';
import { ForecastBar } from './ForecastBar';
import { expectedWeek } from '../../utils/mockData';

describe('ForecastBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ForecastBar {...expectedWeek[0]} min={19} max={42} />
    );
  });

  it('should match the snapshow when is expanded is false', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match the snapshow when is expanded is true', () => {
    wrapper.setState({ isExpanded: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state('isExpanded')).toEqual(false);
  });

  it('should toggle isExpanded when the button is clicked', () => {
    expect(wrapper.state('isExpanded')).toEqual(false);
    wrapper.find('.ForecastBar--button').simulate('click');
    expect(wrapper.state('isExpanded')).toEqual(true);
  });
});