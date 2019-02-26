import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapDispatchToProps } from './Search';
import { forwardGeocode } from '../../thunks/forwardGeocode';

jest.mock('../../thunks/forwardGeocode.js');

describe('Search', () => {
  let wrapper;
  const mockForwardGeocode = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Search forwardGeocode={mockForwardGeocode} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state('query')).toEqual('');
  });
  
  it('should set state when a change event occurs', () => {
    const mockEvent = { target: { value: 'las vegas' } };
    wrapper.find('.Search--input').simulate('change', mockEvent);
    expect(wrapper.state('query')).toEqual('las vegas');
  });
  
  it('should call forwardGeocode with the correct params on submit', () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.setState({ query: 'las vegas' });
    wrapper.find('.Search').simulate('submit', mockEvent);
    expect(mockForwardGeocode).toHaveBeenCalledWith('las vegas');
    expect(wrapper.state('query')).toEqual('');
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with the forwardGeocode thunk', () => {
    const mockDispatch = jest.fn();
    const props = mapDispatchToProps(mockDispatch);
    const expected = forwardGeocode('las vegas');
    props.forwardGeocode('las vegas');
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
