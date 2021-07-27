// implement SearchBar component here
import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <h1>Form</h1>
                <form data-testid="search-bar-form">

                </form>
            </div>
        )
    }
}

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
                <Form />
            </div>
        )
    }

export default SearchBar;