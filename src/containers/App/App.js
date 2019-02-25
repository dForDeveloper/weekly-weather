import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Search from '../Search/Search';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';
import { getUserIP } from '../../thunks/getUserIP';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    this.props.getUserIP();
  }

  render() {
    const { userLocation, weather, location, error, isLoading } = this.props;
    const { city } = userLocation;
    const redirectPath = city.replace(/\s/g, '');
    const shouldRedirect = !location.pathname.includes(redirectPath) && city;
    return (
      <div className="App">
        <Search />
        {!isLoading && 
          <div>
            {shouldRedirect && <Redirect to={redirectPath} />}
            {weather.today && !error &&
              <WeatherContainer city={city} weather={weather} />}
            {error && <h1>No results found</h1>}
          </div>}
        {isLoading && <h1>Loading...</h1>}
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
  getUserIP: () => dispatch(getUserIP())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  userLocation: PropTypes.object,
  weather: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  getUserIP: PropTypes.func,
}