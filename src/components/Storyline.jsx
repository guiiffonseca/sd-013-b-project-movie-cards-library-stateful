import React from 'react';

class Storyline extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          valor={ valor }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Storyline;
