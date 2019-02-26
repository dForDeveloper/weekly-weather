import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { shallow } from 'enzyme';
import { getUserIP } from '../../thunks/getUserIP';
import { expectedWeather } from '../../utils/mockData';

jest.mock('../../thunks/getUserIP.js');

describe('App', () => {
  let wrapper;
  const mockProps = {
    userLocation: { 
      latitude: 0,
      longitude: 0,
      city: 'denver'
    },
    weather: expectedWeather,
    error: '',
    getUserIP: jest.fn(),
    location: { pathname: '/denver' },
    isLoading: false
  }
  beforeEach(() => {
    wrapper = shallow(<App {...mockProps} />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(rootReducer);
    const provider = (
      <Provider store={store}>
        <BrowserRouter>
          <App {...mockProps} />
        </BrowserRouter>
      </Provider>
    );
    ReactDOM.render(provider , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot when isLoading is false', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when isLoading is true', () => {
    const wrapper = shallow(<App {...mockProps} isLoading={true} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match the snapshot when there is an error', () => {
    const wrapper = shallow(<App {...mockProps} error='Error message' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getUserIP on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(mockProps.getUserIP).toHaveBeenCalled();
  });

  it('should redirect when pathname does not match the city', () => {
    const wrapper = shallow(
      <App {...mockProps} location={{ pathname: '/LasVegas,NV' }} />
    );
    expect(wrapper).toMatchSnapshot();
    
  });
});

describe('mapStateToProps', () => {
  it('should return a props object with the correct properties', () => {
    const mockState = {
      location: { lat: 0, lon: 0 },
      weather: { today: { temperature: 40 }},
      error: '',
      isLoading: false,
      extraProperty: true
    }
    const expected = {
      userLocation: { lat: 0, lon: 0 },
      weather: { today: { temperature: 40 }},
      error: '',
      isLoading: false,
    }
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with the getUserIP thunk', () => {
    const mockDispatch = jest.fn();
    const props = mapDispatchToProps(mockDispatch);
    const expected = getUserIP();
    props.getUserIP();
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});