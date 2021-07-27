// implement SearchBar component here
import React from 'react';

const SearchBar = (props) => {
        let searchText = props.searchText;
        let onSearchTextChange = props.onSearchTextChange;
        let bookmarkedOnly = props.bookmarkedOnly;
        let onBookmarkedChange = props.onBookmarkedChange;
        let selectedGenre = props.selectedGenre;
        let onSelectedGenreChange = props.onSelectedGenreChange;

        return (
            <div>
                {searchText}
                {onSearchTextChange}
                {bookmarkedOnly}
                {onBookmarkedChange}
                {selectedGenre}
                {onSelectedGenreChange}
            </div>
        )
    }

export default SearchBar;