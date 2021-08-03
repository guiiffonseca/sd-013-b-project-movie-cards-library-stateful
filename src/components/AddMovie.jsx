import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label
            data-testid="title-input-label"
          >
            Título:
            <input
              className="search-field"
              data-testid="title-input"
              type="text"
            />
          </label>
          <label
            data-testid="subtitle-input-label"
          >
            Subtítulo:
            <input
              className="search-field"
              data-testid="subtitle-input"
              type="text"
            />
          </label>
          <label
            data-testid="image-input-label"
          >
            Imagem:
            <input
              className="search-field"
              data-testid="image-input"
              type="text"
            />
          </label>
          <label
            data-testid="storyline-input-label"
          >
            Sinopse:
            <input
              className="search-field"
              data-testid="storyline-input"
              type="textarea"
            />
          </label>
          <label
            data-testid="rating-input-label"
          >
            Avaliação:
            <input
              className="search-field"
              data-testid="rating-input"
              type="number"
            />
          </label>
          <label
            data-testid="genre-input-label"
          >
            Gênero:
            <select
              className="search-field"
              data-testid="genre-input"
              name="genre"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
