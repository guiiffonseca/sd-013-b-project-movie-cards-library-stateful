import React, { Component } from 'react';

class LabelInput extends Component {
  render() {
    const { label, id, type = 'text', value, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { label }
        <input
          id={ id }
          type={ type }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        />
      </label>

    );
  }
}

export default LabelInput;
