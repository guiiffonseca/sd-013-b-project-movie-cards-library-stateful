import React from 'react';

export default class NumberInput extends React.Component {
  render() {
    const { onInputChange, text, type } = this.props;
    return (
      <label data-testid={ `${type}-input-label` } htmlFor={ `${type}` }>
        {text}
        <textarea
          data-testid={ `${type}-input` }
          id={ `${type}` }
          min="0"
          max="5"
          name={ `${type}` }
          onChange={ onInputChange }
          step="0.5"
          type="number"
        />
      </label>
    );
  }
}
