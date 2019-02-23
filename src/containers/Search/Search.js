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
    const { value: query } = event.target;
    this.setState({ query });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let { query } = this.state;
    this.props.forwardGeocode(query);
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
  forwardGeocode: (query) => dispatch(forwardGeocode(query))
});

export default connect(null, mapDispatchToProps)(Search);

Search.propTypes = {
  forwardGeocode: PropTypes.func
}