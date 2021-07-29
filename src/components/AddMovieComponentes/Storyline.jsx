import React from 'react';

class Storyline extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="storyline">
        Sinopse:
        <input
          id="storyline"
          value={ state }
          onChange={ evento }
          name="storyline"
          type="text"
        />
      </label>
    )
  }
}

export default Storyline;
