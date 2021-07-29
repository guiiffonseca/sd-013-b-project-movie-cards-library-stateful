import React from 'react';

export default class titleInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
          />
        </label>
      </div>
    );
  }
}
