import React from 'react';
import Genre from './components/Genre';
import RatingInput from './components/RatingInput';
import Storyline from './components/Storyline';
import Image from './components/Image';
import Subtitle from './components/Subtitle';
import Title from './components/Title';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title handleChange={ this.handleChange } title={ title } />
        <Subtitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <Image handleChange={ this.handleChange } imagePath={ imagePath } />
        <Storyline handleChange={ this.handleChange } storyline={ storyline } />
        <RatingInput handleChange={ this.handleChange } rating={ rating } />
        <Genre handleChange={ this.handleChange } genre={ genre } />
        <button type="button" data-testid="send-button">Adicionar Filme</button>
      </form>
    );
  }
}

export default AddMovie;
