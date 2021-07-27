import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InputTitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          value={ value }
          name="title"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
