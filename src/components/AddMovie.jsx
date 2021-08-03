// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './Pages/Title';
import Subtitle from './Pages/Subtitle';
import Image from './Pages/Image';
import Storyline from './Pages/Storyline';
import Rating from './Pages/Rating';
import Button from './Pages/Button';
import Genre from './Pages/Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.baseState = this.state;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  resetState = (event) => {
    event.preventDefault();
    this.setState(this.baseState);
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form onSubmit={ this.resetState } data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <Button onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
