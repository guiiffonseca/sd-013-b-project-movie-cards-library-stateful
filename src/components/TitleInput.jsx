import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleInput extends Component {
  render() {
    const { titleValue, handleChange } = this.props;
    return (
      <label htmlFor="true" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ titleValue }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  titleValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
