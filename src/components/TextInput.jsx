import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { label, type = 'text', id, value, onChange } = this.props;
    let inputName = id.replace('-input', '');

    if (inputName === 'image') inputName = 'imagePath';
    else if (inputName === 'text') inputName = 'searchText';

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {label}
        <input
          type={ type }
          id={ id }
          data-testid={ id }
          name={ inputName }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
