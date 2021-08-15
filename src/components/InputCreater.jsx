import React from 'react';
import PropTypes from 'prop-types';

// apartir do projeto de Felipe Ventorim na monitoria com o cajueiro
class InputCreater extends React.Component {
  render() {
    const { key: { }, change, text } = this.props;
    return (
      <label
        htmlFor={ `${key}-input` }
        data-testid={ `${key}-input-label` }
      >
        { text }
        <input
          name={ key }
          value={ key }
          onChange={ change }
          type="text"
          data-testid={ `${key}-input` }
        />
      </label>
    );
  }
}

InputCreater.propTypes = {
  text: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default InputCreater;
