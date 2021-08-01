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
                    <label data-testid="checkbox-input-label">
                    Mostrar somente favoritos
                        <input 
                            type="checkbox"
                            data-testid="checkbox-input-label" 
                            checked={ bookmarkedOnly } 
                            onChange={ onBookmarkedChange } 
                            data-testid="checkbox-input">
                        </input>
                    </label>
                    <label data-testid="select-input-label">
                    Filtrar por gênero
                        <select 
                            value={ selectedGenre }
                            onChange={ onSelectedGenreChange }
                            data-testid="select-input">
                        <option 
                        data-testid="select-option"
                        value=""
                        >Todos</option>
                        <option 
                        data-testid="select-option"
                        value="action"
                        >Ação</option>
                        <option 
                        data-testid="select-option"
                        value="comedy"
                        >Comédia</option>
                        <option 
                        data-testid="select-option"
                        value="thriller"
                        >Suspense</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
    
    export default SearchBar;