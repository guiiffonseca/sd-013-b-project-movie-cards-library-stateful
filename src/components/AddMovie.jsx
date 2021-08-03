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
        </form>
      </div>
    );
  }
}

export default AddMovie;
