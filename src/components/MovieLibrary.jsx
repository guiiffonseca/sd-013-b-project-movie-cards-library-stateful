import React from 'react';

class MovieLibrary extends React.Component{
    constructor(){
        super()
        this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: '',
        }
    }
    render(){
        return(
            <h1>MovieLibrary</h1>
        )
    }
}

export default MovieLibrary;