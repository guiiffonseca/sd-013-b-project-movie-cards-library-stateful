import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { input, value, onChange } = this.props;
    return (
      <label htmlFor={ `${input}-input` } data-testid={ `${input}-input-label` }>
        Subtítulo
        <input
          type="text"
          data-testid={ `${input}-input` }
          name={ input }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  input: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubtitleInput;
