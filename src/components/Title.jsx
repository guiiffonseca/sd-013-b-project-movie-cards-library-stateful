import React from 'react';

class Title extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="title" testid="title-input-label">
        Título
        <input
          name="title"
          valor={ valor }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Title;
