import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from '../Search/Search';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';
import { getUserIP } from '../../thunks/getUserIP';
import { getGeolocation } from '../../thunks/getGeolocation';
import { toggleLoading } from '../../actions';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    this.getUserLocation();
  }

  getUserLocation = async () => {
    const { history, getUserIP, getGeolocation, toggleLoading } = this.props;
    toggleLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = await position.coords;
          getGeolocation({ latitude, longitude }, history);
        },
        () => {
          this.setState(
            { locationGranted: false },
            () => getUserIP(history)
          );
        }
      );
    } else {
      getUserIP(history);
    }
  }

  render() {
    const { userLocation, weather, error, isLoading } = this.props;
    const { city } = userLocation;
    return (
      <div className="App">
        <header className="App--header">
          <h1 className="h1">Weekly Weather</h1>
        </header>
        <Search />
        {!isLoading && 
          <div>
            {weather.today && !error &&
              <WeatherContainer city={city} weather={weather} />}
            {error && <h2 className="App--h2">No results found</h2>}
          </div>}
        {isLoading && <h2 className="App--h2">Loading...</h2>}
        <div className="App--div--darksky">
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  userLocation: state.location,
  weather: state.weather,
  error: state.error,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  getUserIP: (history) => dispatch(getUserIP(history)),
  getGeolocation: ({ latitude, longitude }, history) => {
    dispatch(getGeolocation({ latitude, longitude }, history))
  },
  toggleLoading: (bool) => dispatch(toggleLoading(bool))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  userLocation: PropTypes.object,
  weather: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  getUserIP: PropTypes.func,
  getGeolocation: PropTypes.func,
  toggleLoading: PropTypes.func
}