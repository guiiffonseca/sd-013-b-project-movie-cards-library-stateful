import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
  render() {
    const { dataTestidLabel, text, type, name, value, dataTestid, onChange } = this.props;
    return (
      <label htmlFor={ dataTestid } data-testid={ dataTestidLabel }>
        {text}
        <input
          name={ name }
          type={ type }
          value={ value }
          data-testid={ dataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
