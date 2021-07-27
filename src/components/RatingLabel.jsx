import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ funcao }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};
