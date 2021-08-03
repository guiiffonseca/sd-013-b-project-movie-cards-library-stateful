import React from 'react';

export default class NumberInput extends React.Component {
  render() {
    const { name, onChange, text, value } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        {text}
        <input
          data-testid={ `${name}-input` }
          id={ `${name}` }
          min="0"
          max="5"
          name={ `${name}` }
          onChange={ onChange }
          step="0.5"
          type="number"
          value={ value }
        />
      </label>
    );
  }
}
