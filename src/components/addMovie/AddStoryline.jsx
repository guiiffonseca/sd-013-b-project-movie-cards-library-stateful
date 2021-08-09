import React from 'react';

class AddStoryline extends React.Component {
  render() {
    return (
      <label
        htmlFor="add-movie-storyline"
        data-testid="storyline-input-label"
      >
        Sinopse:
        <textarea
          id="add-movie-storyline"
          className="search-field"
          data-testid="storyline-input"
          type="textarea"
          rows="7"
          maxLength="400"
        />
      </label>
    );
  }
}

export default AddStoryline;
