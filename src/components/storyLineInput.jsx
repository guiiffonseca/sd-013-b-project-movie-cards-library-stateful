import React from 'react';

class InputStoryLine extends React.Component {
  render() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default InputStoryLine;
