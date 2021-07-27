import React from 'react'
import PropTypes from 'prop-types';
import MovieList from './MovieList';

class searchBar extends React.Component {
    render() {
     const{searchText,onSearchTextChange,bookmarkedOnly,onBookmarkedChange,selectedGenre,onSelectedGenreChange} =this.props
      return (
        <section>
          <form data-testid="search-bar-form">
            <label htmlFor="texto" data-testid="text-input-label" > 
            Inclui o texto:
              <input type="text" name="texto" id="" value = {searchText} 
              data-testid="text-input" 
              onChange= {onSearchTextChange}/>
            </label>
          </form>
        </section>
      )
    };
}   

export default searchBar;