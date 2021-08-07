import React from 'react';
import PropTypes from 'prop-types';

// apartir do projeto de Felipe Ventorim na monitoria com o cajueiro
class InputCreater extends React.Component {
  render() {
    const { Key, handleChange, text, value } = this.props;
    return (
      <label
        htmlFor={ Key }
        data-testid={ `${(Key === 'imagePath') ? 'image' : Key}-input-label` }
      >
        { text }
        <input
          id={ Key }
          name={ Key }
          key={ Key }
          value={ value }
          onChange={ handleChange }
          type="text"
          data-testid={ `${(Key === 'imagePath') ? 'image' : Key}-input-label` }
        />
      </label>
    );
  }
}

InputCreater.propTypes = {
  text: PropTypes.string.isRequired,
  Key: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputCreater;
