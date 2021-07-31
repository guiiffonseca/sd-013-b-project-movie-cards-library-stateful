import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const { value, handleSubTitleChange } = this.props;//
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ value }
          onChange={ handleSubTitleChange }//
        />
      </label>

    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubTitleChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
