import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelInputTxtArea extends Component {
  render() {
    const { label, id, name, value, onChange } = this.props;
    return (
      <label htmlFor={id} data-testid={ `${id}-label` }>
        {label}
        <textarea
          id={ id }
          value={ value }
          name={ name }
          data-testid={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default LabelInputTxtArea;

LabelInputTxtArea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.string.isRequired,

}