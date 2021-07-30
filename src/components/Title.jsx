import React from 'react';

class Title extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ valor }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Title;
