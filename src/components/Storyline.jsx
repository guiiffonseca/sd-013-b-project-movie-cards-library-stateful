import React from 'react';

export default class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          id="storyline"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}
