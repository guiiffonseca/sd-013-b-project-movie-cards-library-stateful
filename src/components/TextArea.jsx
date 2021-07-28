import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { input, value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storyline-input"
          cols="30"
          rows="10"
          name={ input }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  input: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
