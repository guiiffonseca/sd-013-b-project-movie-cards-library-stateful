import React from 'react';
import PropTypes from 'prop-types';

export default class InputComponent extends React.Component {
  render() {
    const { type, id, name, value, dataTestId, onChange } = this.props;
    return (
      <input
        type={ type }
        id={ id }
        name={ name }
        value={ value }
        data-testid={ dataTestId }
        onChange={ onChange }
      />
    );
  }
}

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
