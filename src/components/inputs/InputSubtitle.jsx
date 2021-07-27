import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InputSubtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          value={ value }
          name="subtitle"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
