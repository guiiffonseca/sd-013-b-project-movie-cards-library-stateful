import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { valor, funcao } = this.props;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          id="titulo"
          type="text"
          value={ valor }
          data-testid="title-input"
          onChange={ funcao }
          name="title"
        />
      </label>
    );
  }
}

Title.propTypes = {
  valor: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default Title;