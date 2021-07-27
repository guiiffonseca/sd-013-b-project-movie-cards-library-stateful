import React from 'react';
import PropTypes from 'prop-types';

export default class Tittle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title"
      >
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          id="title"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Tittle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
