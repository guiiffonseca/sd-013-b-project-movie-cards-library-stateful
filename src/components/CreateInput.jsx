import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { text, name, value, type = 'text' } = this.props;
    const { onChange } = this.props;
    return (
      <label htmlFor={ `new${name}` } data-testid={ `${name}-input-label` }>
        { `${text}` }
        <input
          type={ type }
          value={ value }
          onChange={ onChange }
          data-testid={ `${name}-input` }
          id={ `new${name}` }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
