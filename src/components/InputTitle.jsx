import React from 'react';

class InputTitle extends React.Component {
  render() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default InputTitle;
