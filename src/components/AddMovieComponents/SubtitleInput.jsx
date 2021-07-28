import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubtitleInput;
