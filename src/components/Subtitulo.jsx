import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitulo extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Subtitulo.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
