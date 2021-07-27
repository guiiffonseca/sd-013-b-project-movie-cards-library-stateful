import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">Inclui o texto:
          <input 
            onChange={this.handleChange}
            type="text" 
            id="search" 
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        {/* <label htmlFor="gender">Filtrar por gênero:
          <select name="gender" id="gender" >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select> 

        </label> */}
      </form>

    );
  }

}