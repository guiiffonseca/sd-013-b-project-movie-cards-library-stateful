import React from 'react';

class Storyline extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          id="storyline"
          value={ state }
          onChange={ evento }
          name="storyline"
          type="text"
          data-testid="storyline-input"
        />
      </label>
    )
  }
}

export default Storyline;
