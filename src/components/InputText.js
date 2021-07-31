import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { value, handleTitleChange } = this.props;//
    return (
      <label
        htmlFor="text1"
        data-testid="title-input-label"
      >
        Título
        <input
          name="text1"
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ handleTitleChange }
        />
      </label>

    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default InputText;
