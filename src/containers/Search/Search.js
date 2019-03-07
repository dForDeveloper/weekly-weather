import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    const { query } = this.state;
    const { history } = this.props;
    this.props.forwardGeocode(query, history);
    this.setState({ query: '' });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='Search'>
        <input
          value={this.state.query}
          onChange={this.handleChange}
          placeholder='search cities'
          className='Search--input'
        />
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  forwardGeocode: (query, history) => dispatch(forwardGeocode(query, history))
});

export default withRouter(connect(null, mapDispatchToProps)(Search));

Search.propTypes = {
  forwardGeocode: PropTypes.func
}