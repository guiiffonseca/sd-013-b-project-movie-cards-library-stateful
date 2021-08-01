import React from 'react';

class SubtitleInput extends React.Component {
  render() {
    const { value, handleChange } = this;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          type="text"
          value={ value }
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default SubtitleInput;
