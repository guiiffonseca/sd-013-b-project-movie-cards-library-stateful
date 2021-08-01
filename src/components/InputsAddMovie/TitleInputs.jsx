import React from 'react';

class TitleInput extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default TitleInput;
