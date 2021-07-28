import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { label, id, value, onChange } = this.props;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {label}
        <input
          type="text"
          id={ id }
          data-testid={ id }
          name={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
