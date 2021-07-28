import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, texto, tipo, nome, id, dataID, func, idLabel } = this.props;

    return (

      <label htmlFor={ id } data-testid={ idLabel }>
        {texto}
        <input
          type={ tipo }
          value={ value }
          name={ nome }
          id={ id }
          data-testid={ dataID }
          onChange={ func }
        />
      </label>

    );
  }
}
Input.propTypes = {

  tipo: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataID: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  idLabel: PropTypes.string.isRequired,

};
export default Input;
