import React from 'react';
import PropTypes from 'prop-types';

class Botao extends React.Component {
  render() {
    const { funcao } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ funcao }
      >
        Adicionar filme
      </button>
    );
  }
}

Botao.propTypes = {
  funcao: PropTypes.func,
}.isRequired;

export default Botao;
