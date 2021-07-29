import React from 'react';

export default class sotryLine extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            name="storyline"
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}
