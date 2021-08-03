import React from 'react'

class Storyline extends React.Component {

  render() {
    const { storyline } = this.props;
    return (
      <label htmlFor="storyline"
        data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          value={storyline}
        />
      </label>
    )
  }
}

export default Storyline;