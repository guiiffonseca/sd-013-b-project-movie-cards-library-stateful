import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubmitMovie extends Component {
  render() {
    const { click } = this.props;
    return (
      <button
        data-testid="send-button"
        onClick={ click }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }
}

SubmitMovie.propTypes = {
  click: PropTypes.func.isRequired,
};

export default SubmitMovie;
