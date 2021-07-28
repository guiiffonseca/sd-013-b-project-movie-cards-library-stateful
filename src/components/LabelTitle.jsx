import React from 'react';

export default class LabelTitle extends React.Component {
  render() {
    const { input } = this.props;
    const { type, id, name, value, dataTestId, onChange } = input;
    return (
      <label htmlFor="titulo-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="titulo-input"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
