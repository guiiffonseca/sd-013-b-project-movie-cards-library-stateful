import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label
            htmlFor="add-movie"
            data-testid="title-input-label"
          >
            Título:
            <input
              id="add-movie"
              className="search-field"
              data-testid="title-input"
              type="text"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
