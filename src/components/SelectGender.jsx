import React from 'react';

class SelectGender extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: this.action,
    };
    this.handleChangeOnGenre = this.handleChangeOnGenre.bind(this);
  }

  handleChangeOnGenre = (event) => {
    this.setState({
      genre: event.target.value,
    });
    console.log(this);
  };

  render() {
    const { genre } = this.state;

    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="select-input"
          value={ genre }
          onChange={ this.handleChangeOnGenre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectGender;
