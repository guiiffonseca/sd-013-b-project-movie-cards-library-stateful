// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import Button from './Button';
import Title from './Title';
import SubTitle from './SubTitle';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;

    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    });
    console.log('teste');
  }

  render() {
    const { rating, genre, storyline, title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title onChange={ this.handleChange } title={ title } />
        <SubTitle onChange={ this.handleChange } subtitle={ subtitle } />
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
            name="imagePath"
          />
        </label>
        <TextArea onChange={ this.handleChange } storyline={ storyline } />
        <label data-testid="rating-input-label" htmlFor="title">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
            name="rating"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {

  onClick: PropTypes.func.isRequired,

};

export default AddMovie;
