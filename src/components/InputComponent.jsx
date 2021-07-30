import React from 'react';
import PropTypes from 'prop-types';

class InputComponent extends React.Component {
  render() {
    const { name, value, on, id } = this.props;
    return (
      <input
        name={ name }
        type="text"
        value={ value }
        id={ id }
        data-testid={ `${id}-input` }
        onChange={ on }
      />
    );
  }
}

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default InputComponent;
