// implement AddMovie component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import InputText from './InputText';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import Sinopse from './Sinopse';

class AddMovie extends Component {
  constructor(props) {
    super(props)

    this.handleTitleChange = this.handleTitleChange.bind(this);//
    this.handleSubTitleChange = this.handleSubTitleChange.bind(this);
    this.handleImageChange =  this.handleImageChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleGenre = this.handleGenre.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    console.log(this.state);
  }

    handleTitleChange (event) {
     this.setState({ title: event.target.value }) 
    }
     handleSubTitleChange (event) {
     this.setState({ subtitle: event.target.value }) 
    }
     handleImageChange (event){
      this.setState({ imagePath: event.target.value }) 
     }
     handleTextareaChange (event){
      this.setState({ storyline: event.target.value }) 
     }
     handleRating (event){
      this.setState({ rating: event.target.value }) 
     
      handleGenre (event){
      this.setState({ genre: event.target.value }) 
     }



   
  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre} = this.state;
    

    return (
      <form data-testid="add-movie-form" id="usrform">
        <InputText value={ title } handleTitleChange={ this.handleTitleChange }/>//
        <InputSubtitle value={ subtitle } handleSubTitleChange={ this.handleSubTitleChange } />
        <InputImage value={ imagePath } handleImageChange={ this.handleImageChange } />
        <Sinopse  value={ storyline } handleTextareaChange={ this.handleTextareaChange } />
        <label
          htmlFor="avaliacao"
          data-testid="rating-input-label">
          Avaliação
          <input
            id="avaliacao"
            name=""
            data-testid="rating-input"
            type="number"
            max="5"
            value= { rating }
            onChange= { this.handleRating }
          />
        </label>
        <label
          htmlFor="genero"
          data-testid="genre-input-label"
        >
          Gênero

          <select name="" value={ genre } onChange={this.handleGenre} data-testid="genre-input" id="genero" form="usrform">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => onClick(this.state) }
          form="usrform"
          value="Submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
