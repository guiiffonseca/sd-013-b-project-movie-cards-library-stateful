import React from 'react';

class SubitleTextInput extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          id="subtitle-input"
        />
      </label>
    );
  }
}

export default SubitleTextInput;
