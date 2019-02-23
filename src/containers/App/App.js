import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Search from '../Search/Search';
import { fetchData } from '../../utils/api';
import { setCoordinates } from '../../actions';
import { getWeather } from '../../thunks/getWeather';
import { reverseGeocode } from '../../thunks/reverseGeocode';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    this.getGeolocation();
  }

  getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.props.setCoordinates({ latitude, longitude });
        this.props.reverseGeocode({ latitude, longitude });
        this.props.getWeather({ latitude, longitude });
      },
        () => this.getIP()
      );
    } else {
      this.getIP();
    }
  }

  getIP = async () => {
    const { lat: latitude, lon: longitude } = await fetchData('http://ip-api.com/json');
    this.props.setCoordinates({ latitude, longitude });
    this.props.reverseGeocode({ latitude, longitude });
    this.props.getWeather({ latitude, longitude });
  }

  getPath = () => {
    const { city } = this.props.userLocation;
    return city.replace(/\W/g, '-');
  }

  render() {
    const redirectPath = this.getPath();
    const { userLocation, weather, location } = this.props;
    const shouldRedirect = !location.pathname.includes(redirectPath);
    return (
      <div className="App">
        <Search />
        {shouldRedirect && userLocation.city && <Redirect to={redirectPath} />}
        {weather.currently &&
          <h1>
            Temperature in {userLocation.city}: {weather.currently.temperature}
          </h1>}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  userLocation: state.location,
  weather: state.weather
});

export const mapDispatchToProps = (dispatch) => ({
  setCoordinates: (coordinates) => dispatch(setCoordinates(coordinates)),
  getWeather: (coordinates) => dispatch(getWeather(coordinates)),
  reverseGeocode: (coordinates) => dispatch(reverseGeocode(coordinates))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  userLocation: PropTypes.object,
  weather: PropTypes.object,
  setCoordinates: PropTypes.func,
  getWeather: PropTypes.func,
  reverseGeocode: PropTypes.func
}