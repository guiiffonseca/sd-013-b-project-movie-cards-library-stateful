import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StorylineText extends Component {
  render() {
    const { storylineValue, handleChange } = this.props;
    return (
      <label htmlFor="true" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storylineValue }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>

    );
  }
}

StorylineText.propTypes = {
  storylineValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
