import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubtitleInput;
