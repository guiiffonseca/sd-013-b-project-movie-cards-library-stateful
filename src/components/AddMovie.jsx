import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <input type="text" />
      </form>
    );
  }
}

AddMovie.propTypes = {
};
