import React from 'react';

class Sinopse extends React.Component {
  constructor() {
    super();
    this.state = {
      storyline: '',
    };

    this.handleChangeSinopse = this.handleChangeSinopse.bind(this);
  }

  handleChangeSinopse = (event) => {
    this.setState({
      storyline: event.target.value,
    });
  }

  render() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storyline-input"
          value={ storyline }
          onChange={ this.handleChangeSinopse }
        />
      </label>
    );
  }
}

export default Sinopse;
