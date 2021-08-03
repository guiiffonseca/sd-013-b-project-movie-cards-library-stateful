import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label
            htmlFor="add-movie-title"
            data-testid="title-input-label"
          >
            Título:
            <input
              id="add-movie-title"
              className="search-field"
              data-testid="title-input"
              type="text"
            />
          </label>
          <label
            htmlFor="add-movie-subtitle"
            data-testid="subtitle-input-label"
          >
            Subtítulo:
            <input
              id="add-movie-subtitle"
              className="search-field"
              data-testid="subtitle-input"
              type="text"
            />
          </label>
          <label
            htmlFor="add-movie-image"
            data-testid="image-input-label"
          >
            Imagem:
            <input
              id="add-movie-image"
              className="search-field"
              data-testid="image-input"
              type="text"
            />
          </label>
          <label
            htmlFor="add-movie-storyline"
            data-testid="storyline-input-label"
          >
            Sinopse:
            <input
              id="add-movie-storyline"
              className="search-field"
              data-testid="storyline-input"
              type="textarea"
            />
          </label>
          <label
            htmlFor="add-movie-rating"
            data-testid="rating-input-label"
          >
            Avaliação:
            <input
              id="add-movie-rating"
              className="search-field"
              data-testid="rating-input"
              type="number"
            />
          </label>
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
          <button data-testid="send-button" type="button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
