import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchData } from '../../utils/api';
import { setCoordinates } from '../../actions';

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
        (error) => this.getIP()
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
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  coordinates: state.coordinates
});

export const mapDispatchToProps = (dispatch) => ({
  setCoordinates: (coordinates) => dispatch(setCoordinates(coordinates))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));