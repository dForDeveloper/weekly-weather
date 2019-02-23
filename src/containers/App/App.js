import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Search from '../Search/Search';
import { getUserIP } from '../../thunks/getUserIP';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    this.props.getUserIP();
  }

  render() {
    const { userLocation, weather, location, error } = this.props;
    const { city } = userLocation;
    const redirectPath = city.replace(/\W/g, '-');
    const shouldRedirect = !location.pathname.includes(redirectPath) && city;
    return (
      <div className="App">
        <Search />
        {shouldRedirect && <Redirect to={redirectPath} />}
        {weather.currently && !error &&
          <h1>
            Temperature in {city}: {parseInt(weather.currently.temperature)}
          </h1>}
        {error && <h1>No results found</h1>}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  userLocation: state.location,
  weather: state.weather,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  getUserIP: () => dispatch(getUserIP())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  userLocation: PropTypes.object,
  weather: PropTypes.object,
  error: PropTypes.string,
  getUserIP: PropTypes.func,
}