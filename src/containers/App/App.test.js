import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { getUserIP } from '../../thunks/getUserIP';

jest.mock('../../thunks/getUserIP.js');

describe('App', () => {
  const mockProps = {
    userLocation: { 
      latitude: 0,
      longitude: 0,
      city: 'Denver, CO'
    },
    weather: {
      currently: { temperature: 39 }
    },
    error: '',
    getUserIP: jest.fn(),
    location: { pathname: '/' }
  }

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
});