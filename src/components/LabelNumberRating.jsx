import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelNumberRating extends Component {
  render() {
    const { state, change } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Imagem
        <input
          value={ state }
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          onChange={ change }
        />
      </label>
    );
  }
}

LabelNumberRating.propTypes = {
  state: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
