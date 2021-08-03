import React from 'react';

export default class TextInput extends React.Component {
  render() {
    const { name, onChange, text, value } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        {text}
        <input
          data-testid={ `${name}-input` }
          id={ `${name}` }
          name={ (name === 'image') ? 'imagePath' : `${name}` }
          onChange={ onChange }
          type="text"
          value={ value }
        />
      </label>
    );
  }
}
