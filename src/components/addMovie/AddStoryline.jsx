import React from 'react';

class AddStoryline extends React.Component {
  render() {
    return (
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
    );
  }
}

export default AddStoryline;
