import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label
            htmlFor="search-field"
            data-testid="text-input-label"
          >
            Inclui o texto:
            <input
              id="search-field"
              className="search-field"
              data-testid="text-input"
              type="text"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
