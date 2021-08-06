import React from 'react';

class AddTitle extends React.Component {
  render() {
    return (
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
    );
  }
}

export default AddTitle;
