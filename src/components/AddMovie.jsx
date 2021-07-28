import React, { Component } from 'react';
import InfoNewCard1 from './InfoNewCard1';
import InfoNewCard2 from './InfoNewCard2';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }
  addNewMovie() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <form method='get' data-testid='add-movie-form'>
        <InfoNewCard1 state={ this.state } handleChange={ this.handleChange } />
        <InfoNewCard2 state={ this.state } handleChange={ this.handleChange } />
        <button type='submit' data-testid='send-button' onClick={this.addNewMovie}>
          Adicionar filme
        </button>
      </form>
    )
  }
}
export default AddMovie;
