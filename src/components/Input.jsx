import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, texto, tipo, nome, id, dataID } = this.props;
    return (

      <label htmlFor="addimg" data-testid="image-input-label">
        {texto}
        <input
          type={ tipo }
          value={ value }
          name={ nome }
          id={ id }
          data-testid={ dataID }

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

};
export default Input;
