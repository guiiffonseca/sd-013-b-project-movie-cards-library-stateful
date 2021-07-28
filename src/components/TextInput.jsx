import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
  render() {
    const { dataTestidLabel, text, type, value, onChange } = this.props;
    const dataTestid = dataTestidLabel.replace('-label', '');
    const name = dataTestid.replace('-input', '') === 'image'
      ? 'imagePath' : dataTestid.replace('-input', '');

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
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
