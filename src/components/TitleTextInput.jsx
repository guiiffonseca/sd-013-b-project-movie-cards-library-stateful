import React from 'react';

class TitleTextInput extends React.Component {
  render() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="title-input"
        />
      </label>
    );
  }
}

export default TitleTextInput;
