import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InputTitle extends Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          value={ title }
          name="title"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
}