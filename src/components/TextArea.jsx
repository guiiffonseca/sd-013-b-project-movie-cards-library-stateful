import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  render() {
    const {
      name,
      testId,
      labelText,
      inputText,
      inputType,
      callback,
    } = this.props;
    const labelId = `${testId}-label`;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelId }
      >
        { labelText }
        <textarea
          id={ name }
          data-testid={ testId }
          type={ inputType }
          value={ inputText }
          onChange={ callback }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
