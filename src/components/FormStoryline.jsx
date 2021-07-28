import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormStoryline extends Component {
  render() {
    const { storyline, callback } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          id="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ callback }
        />
      </label>
    );
  }
}

FormStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
