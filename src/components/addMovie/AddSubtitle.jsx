import React from 'react';

class AddSubTitle extends React.Component {
  render() {
    return (
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
    );
  }
}

export default AddSubTitle;
