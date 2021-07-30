import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { value, name, id, on } = this.props;
    return (
      <input
        type="number"
        value={ value }
        name={ name }
        data-testid={ `${id}-input` }
        onChange={ on }
      />
    );
  }
}

InputNumber.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default InputNumber;
