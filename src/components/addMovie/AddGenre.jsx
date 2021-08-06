import React from 'react';

class AddGenre extends React.Component {
  render() {
    return (
      <label
        htmlFor="add-movie-genre"
        data-testid="genre-input-label"
      >
        Gênero:
        <select
          id="add-movie-genre"
          className="search-field"
          data-testid="genre-input"
          name="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default AddGenre;
