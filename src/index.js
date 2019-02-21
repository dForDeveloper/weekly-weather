import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import App from './containers/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const devTools = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, devTools);
const provider = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(provider, document.getElementById('root'));