import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../utils/api';
import { setCoordinates, setError } from '../../actions';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  handleChange = (event) => {
    const { value: city } = event.target;
    this.setState({ city });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let { city } = this.state;
    city = city.replace(/\s/g, '+');
    city = city.replace(/,/g, '%2C');
    try {
      const response = await fetchData(`http://localhost:3001/api/v1/geocode/${city}`);
      const { lat: latitude, lng: longitude } = await response.json();
      this.props.setCoordinates({ latitude, longitude });
      this.props.setError('');
    } catch (error) {
      this.props.setError(error.message)
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} placeholder='search for a city' />
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setCoordinates: (coordinates) => dispatch(setCoordinates(coordinates)),
  setError: (message) => dispatch(setError(message))
});

export default connect(null, mapDispatchToProps)(Search);

Search.propTypes = {
  setCoordinates: PropTypes.func,
  setError: PropTypes.func
}