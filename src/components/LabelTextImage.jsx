import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelTextImage extends Component {
  render() {
    const { state, change } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Avaliação
        <input
          value={ state }
          type="number"
          name="imagePath"
          id="imagePath"
          data-testid="image-input"
          onChange={ change }
        />
      </label>
    );
  }
}

LabelTextImage.propTypes = {
  state: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
