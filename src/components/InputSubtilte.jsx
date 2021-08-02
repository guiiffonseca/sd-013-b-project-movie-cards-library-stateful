import React from 'react';

class InputSubtilte extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default InputSubtilte;
