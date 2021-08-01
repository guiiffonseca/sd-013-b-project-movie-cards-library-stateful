import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubtitleInput extends Component {
  render() {
    const { handleChange, subtitleValue } = this.props;
    return (
      <label htmlFor="true" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitleValue }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitleValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
