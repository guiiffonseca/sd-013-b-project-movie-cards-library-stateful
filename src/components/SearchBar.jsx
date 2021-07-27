import React from 'react'
import PropTypes from 'prop-types';
import MovieList from './MovieList';

class searchBar extends React.Component {
    render() {
     const{searchText,onSearchTextChange,bookmarkedOnly,onBookmarkedChange,selectedGenre,onSelectedGenreChange} =this.props
      return (
        <section>
          <form data-testid="search-bar-form">
            <label htmlFor="">
              <input type="text" name="" id=""/>
            </label>
          </form>
        </section>
      )
    };
}   

export default searchBar;