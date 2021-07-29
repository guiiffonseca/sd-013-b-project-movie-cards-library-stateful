import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import FromRating from './FromRating';
import Select from './Select';

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
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onclick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title valor={ title } handleChange={ this.handleChange } />
        <SubTitle valor={ subtitle } handleChange={ this.handleChange } />
        <ImagePath valor={ imagePath } handleChange={ this.handleChange } />
        <Storyline valor={ storyline } handleChange={ this.handleChange } />
        <FromRating valor={ rating } handleChange={ this.handleChange } />
        <Select valor={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
