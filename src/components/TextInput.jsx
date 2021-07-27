import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
  render() {
    const { text, value, dataTestid, dataTestidLabel, onChange } = this.props;
    return (
      <label htmlFor={ dataTestid } data-testid={ dataTestidLabel }>
        {text}
        <input
          type="text"
          value={ value }
          data-testid={ dataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
