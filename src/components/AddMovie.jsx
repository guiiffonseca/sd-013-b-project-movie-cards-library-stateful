import React from 'react';
import InputAddMovie from './InputAddMovie';

class AddMovie extends React.Component {
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
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const inputValue = event.target.value;
    this.setState({
      [event.target.name]: inputValue,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputAddMovie
            title={ title }
            subtitle={ subtitle }
            image={ imagePath }
            handleInput={ this.handleInput }
          />
        </form>
      </div>
    );
  }
}

export default AddMovie;
