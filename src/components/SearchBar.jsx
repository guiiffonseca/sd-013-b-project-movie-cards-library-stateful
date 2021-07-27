import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
    render() {
        const {searchText, onSearchTextChange} = this.props;
        return(
            <form data-testid="search-bar-form">
            <label htmlFor="search-input" data-testid="text-input-label">
                Busca: <input
                type="text" 
                id="search-bar-input"
                name="search-bar-input"
                value={ searchText }
                onChange={ onSearchTextChange }
                data-testid="text-input"
                 /></label>
            </form>
        )
    }
    
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
}


export default SearchBar;