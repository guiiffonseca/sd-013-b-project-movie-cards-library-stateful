import React from 'react';

export default class TextAreaInput extends React.Component {
  render() {
    const { name, onChange, text, value } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        {text}
        <textarea
          cols="10"
          data-testid={ `${name}-input` }
          id={ `${name}` }
          name={ `${name}` }
          onChange={ onChange }
          rows="4"
          value={ value }
        />
      </label>
    );
  }
}
