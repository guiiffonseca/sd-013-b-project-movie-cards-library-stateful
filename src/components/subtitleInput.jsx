import React from 'react';

export default class subtitleInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }
}
