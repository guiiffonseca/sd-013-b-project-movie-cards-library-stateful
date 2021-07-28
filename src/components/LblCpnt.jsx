import React from 'react';
import PropTypes from 'prop-types';

export default class LblCpnt extends React.Component {
  render() {
    const { dataTestType,
      type, id, name, value, dataTestId, onChange, text } = this.props;
    return (
      <label htmlFor={ id } data-testid={ dataTestType }>
        { text }
        <input
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          data-testid={ dataTestId }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LblCpnt.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestType: PropTypes.string.isRequired,

};
