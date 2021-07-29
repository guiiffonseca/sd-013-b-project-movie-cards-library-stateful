import React from 'react';
import PropTypes from 'prop-types';

class TextLabel extends React.Component {
  render() {
    const { prop, name, label, onChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        {label}
        <input
          value={ prop }
          type="text"
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextLabel.propTypes = {
  prop: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextLabel;
