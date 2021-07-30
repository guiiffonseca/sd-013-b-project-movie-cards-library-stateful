import React from 'react';

class InputStoryline extends React.Component {
  render() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input-lab" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input-lab"
          name="storyline-input"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default InputStoryline;
