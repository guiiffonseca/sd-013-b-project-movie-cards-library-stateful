import React from 'react';

export default class TextInput extends React.Component {
  render() {
    const { onInputChange, text, type } = this.props;
    return (
      <label data-testid={ `${type}-input-label` } htmlFor={ `${type}` }>
        {text}
        <input
          data-testid={ `${type}-input` }
          id={ `${type}` }
          name={ `${type}` }
          onChange={ onInputChange }
          type="text"
        />
      </label>
    );
  }
}
