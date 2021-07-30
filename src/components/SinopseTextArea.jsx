import React from 'react';
import PropTypes from 'prop-types';

class SinopseTextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="textarea-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          id="textarea-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SinopseTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SinopseTextArea;
