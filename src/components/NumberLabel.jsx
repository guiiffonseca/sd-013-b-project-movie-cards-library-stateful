import React from 'react';
import PropTypes from 'prop-types';

class NumberLabel extends React.Component {
  render() {
    const { name, prop, onChange, label } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { label }
        <input
          value={ prop }
          type="number"
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}

NumberLabel.propTypes = {
  name: PropTypes.string.isRequired,
  prop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberLabel;
