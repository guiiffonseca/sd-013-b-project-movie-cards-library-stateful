import React from 'react';
import PropTypes from 'prop-types';

// apartir do projeto de Felipe Ventorim na monitoria com o cajueiro
class InputCreater extends React.Component {
  render() {
    const { Key, change, text } = this.props;
    return (
      <label
        htmlFor={ `${Key}-input` }
        data-testid={ `${(Key === 'imagePath') ? 'image' : Key}-input-label` }
      >
        { text }
        <input
          name={ `${Key}` }
          value={ Key }
          onChange={ change }
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
  change: PropTypes.func.isRequired,
};

export default InputCreater;
