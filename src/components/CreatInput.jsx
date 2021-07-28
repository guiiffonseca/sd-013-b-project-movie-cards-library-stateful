import React from 'react';
import PropTypes from 'prop-types';

export default class CreatInput extends React.Component {
  render() {
    const { labelText, type, name, id, value, onChange } = this.props;
    return (
      <label htmlFor="B" data-testid={ `${name}input-label` }>
        {labelText}
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ `${name}input` }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

CreatInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
