import React from 'react';

class Genre extends React.Component {

  render() {

    const { genre } = this.props;

    return (
      <label htmlFor="genre"
        data-testid="genre-input-label">
        Gênero
        <input
          type="text"
          value={genre}
        />
        <select name="" id="">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Genre;