import React from 'react';

export default class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          name="title"
          value={ title }
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}
