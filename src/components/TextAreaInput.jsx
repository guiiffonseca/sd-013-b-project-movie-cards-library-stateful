import React from 'react';

export default class TextAreaInput extends React.Component {
  render() {
    const { onInputChange, text, type } = this.props;
    return (
      <label data-testid={ `${type}-input-label` } htmlFor={ `${type}` }>
        {text}
        <textarea
          cols="10"
          data-testid={ `${type}-input` }
          id={ `${type}` }
          name={ `${type}` }
          onChange={ onInputChange }
          rows="4"
          type="text"
        />
      </label>
    );
  }
}
