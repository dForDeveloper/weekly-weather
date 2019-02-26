import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forwardGeocode } from '../../thunks/forwardGeocode';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let { query } = this.state;
    this.props.forwardGeocode(query);
    this.setState({ query: '' });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='Search'>
        <input
          value={this.state.query}
          onChange={this.handleChange}
          placeholder='search for a city'
          className='Search--input'
        />
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  forwardGeocode: (query) => dispatch(forwardGeocode(query))
});

export default connect(null, mapDispatchToProps)(Search);

Search.propTypes = {
  forwardGeocode: PropTypes.func
}