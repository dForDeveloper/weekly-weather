import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Search from '../Search/Search';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';
import { getUserIP } from '../../thunks/getUserIP';
import { getWeatherByGeolocation } from '../../thunks/getWeatherByGeolocation';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      locationGranted: true
    }
  }

  componentDidMount() {
    this.getGeolocation();
  }

  getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = await position.coords;
        this.props.getWeatherByGeolocation({ latitude, longitude });
      },
        () => {
          this.setState({ locationGranted: false }, () => this.props.getUserIP())
        }
      );
    } else {
      this.props.getUserIP();
    }
  }

  render() {
    const { userLocation, weather, location, error, isLoading } = this.props;
    const { city } = userLocation;
    const redirectPath = city.replace(/\s/g, '');
    const shouldRedirect = !location.pathname.includes(redirectPath) && city;
    return (
      <div className="App">
        <header className="App--header">
          <h1 className="h1">Weekly Weather</h1>
        </header>
        <Search />
        {!isLoading && 
          <div>
            {shouldRedirect && <Redirect to={redirectPath} />}
            {weather.today && !error &&
              <WeatherContainer city={city} weather={weather} />}
            {!this.state.locationGranted && !userLocation.city && 
              <h2 className="App--h2">
                Share your location for automatic redirection to your city
              </h2>
            }
            {error && <h2 className="App--h2">No results found</h2>}
          </div>}
        {isLoading && <h2 className="App--h2">Loading...</h2>}
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
  getUserIP: () => dispatch(getUserIP()),
  getWeatherByGeolocation: ({ latitude, longitude }) => dispatch(getWeatherByGeolocation({ latitude, longitude }))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  userLocation: PropTypes.object,
  weather: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  getUserIP: PropTypes.func,
  getWeatherByGeolocation: PropTypes.func,
}