import React from 'react';
import PropTypes from 'prop-types';

export default class CreatInput extends React.Component {
  render() {
    const { name, value, on, id } = this.props;
    return (
      <input
        type="text"
        name={ name }
        id={ name }
        data-testid={ `${id}-input` }
        value={ value }
        onChange={ on }
      />
    );
  }
}

CreatInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};
