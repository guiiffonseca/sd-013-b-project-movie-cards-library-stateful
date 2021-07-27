import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
    render() {
        const {searchText, onSearchTextChange, onBookmarkedChange, bookmarkedOnly} = this.props;
        return(
            <form data-testid="search-bar-form">
            <label htmlFor="search-input" data-testid="text-input-label">
            Inclui o texto <input
                type="text" 
                id="search-bar-input"
                name="search-bar-input"
                value={ searchText }
                onChange={ onSearchTextChange }
                data-testid="text-input"
                 /></label>

                 <label htmlFor="" data-testid="checkbox-input-label">
                 Mostrar somente favoritos
                 <input type="checkbox"
                 name="favorite-checkbox"
                 id="favorite-checkbox"
                 checked={ bookmarkedOnly }
                 onChange={ onBookmarkedChange }
                 data-testid="checkbox-input" />
                 </label>
            </form>
        )
    }
    
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
}


export default SearchBar;