import React from 'react';

class AddImage extends React.Component {
  render() {
    return (
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
    );
  }
}

export default AddImage;
