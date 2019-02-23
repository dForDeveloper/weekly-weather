import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchData } from '../../utils/api';
import { setCoordinates, setWeather } from '../../actions';
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
        this.getWeather();
      },
        () => this.getIP()
      );
    } else {
      this.getIP();
    }
  }

  getIP = async () => {
    const response = await fetchData('http://ip-api.com/json');
    const result = await response.json();
    const { lat: latitude, lon: longitude } = result; 
    this.props.setCoordinates({ latitude, longitude });
    this.getWeather();
  }

  getWeather = async () => {
    const { latitude, longitude } = this.props.coordinates;
    const url = `http://localhost:3001/api/v1/${latitude}/${longitude}`;
    try {
      const response = await fetchData(url);
      const weather = await response.json();
      this.props.setWeather(weather);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.weather.currently &&
          <h1>Current Temperature: {this.props.weather.currently.temperature}</h1>}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  coordinates: state.coordinates,
  weather: state.weather
});

export const mapDispatchToProps = (dispatch) => ({
  setCoordinates: (coordinates) => dispatch(setCoordinates(coordinates)),
  setWeather: (weather) => dispatch(setWeather(weather))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  coordinates: PropTypes.object,
  weather: PropTypes.object,
  setCoordinates: PropTypes.func,
  setWeather: PropTypes.func
}