import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { valor, funcao } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ valor }
          onChange={ funcao }
          name="rating"
          id="subtitle"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  valor: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default Rating;
