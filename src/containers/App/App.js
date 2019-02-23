import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from '../Search/Search';
import { fetchData } from '../../utils/api';
import { setCoordinates, setCity, setWeather } from '../../actions';
import { reverseGeocode } from '../../thunks/reverseGeocode';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      weatherData: {},
      error: ''
    }
  }

  componentDidMount() {
    this.getGeolocation();
  }

  getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.props.setCoordinates({ latitude, longitude });
        this.props.reverseGeocode({ latitude, longitude });
        this.getWeather();
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
    this.getWeather();
  }

  getWeather = async () => {
    const { latitude, longitude } = this.props.location;
    const url = `http://localhost:3001/api/v1/weather/${latitude}/${longitude}`;
    try {
      const weather = await fetchData(url);
      this.props.setWeather(weather);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Search />
        {this.props.weather.currently &&
          <h1>Current Temperature: {this.props.weather.currently.temperature}</h1>}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  location: state.location,
  weather: state.weather
});

export const mapDispatchToProps = (dispatch) => ({
  setCoordinates: (location) => dispatch(setCoordinates(location)),
  setCity: (city) => dispatch(setCity(city)),
  setWeather: (weather) => dispatch(setWeather(weather)),
  reverseGeocode: (coordinates) => dispatch(reverseGeocode(coordinates))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  location: PropTypes.object,
  weather: PropTypes.object,
  setCoordinates: PropTypes.func,
  setCity: PropTypes.func,
  setWeather: PropTypes.func,
  reverseGeocode: PropTypes.func
}