import React from 'react';

class StorylineImput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          id="storyline-input"
          type="text"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default StorylineImput;
