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

                <form data-testid="search-bar-form">
                    <label data-testid="text-input-label">
                    Inclui o texto:                
                        <input 
                            data-testid="text-input" 
                            value={ searchText } 
                            onChange={ onSearchTextChange }
                            type="text">
                        </input>
                    </label>
                </form>
            </div>
        )
    }
    
    export default SearchBar;