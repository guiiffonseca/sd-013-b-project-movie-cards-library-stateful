import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  render() {
    const { onChange, title, subtitle } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title-input"
            data-testid="title-input"
            value={ title }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ onChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
