import React from 'react';
import PropTypes from 'prop-types';

import Title from './title';
import Subtitle from './subtitle';
import Image from './image';
import Storyline from './storyline';
import Rating from './rating';
import Genre from './genre';
import Button from './button';

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

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
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
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
    // tive que alterar o nome da props de "value" para "ranting" do componente Rating, pois passando "value" o teste não estava reconhecendo o estado inicial de "rating", então mudei o nome das demais props para padronizar a chamada dos componentes;
      <form data-testid="add-movie-form">
        <Title title={ title } handleOnChange={ this.handleOnChange } />
        <Subtitle subtitle={ subtitle } handleOnChange={ this.handleOnChange } />
        <Image imagePath={ imagePath } handleOnChange={ this.handleOnChange } />
        <Storyline storyline={ storyline } handleOnChange={ this.handleOnChange } />
        <Rating rating={ rating } handleOnChange={ this.handleOnChange } />
        <Genre genre={ genre } handleOnChange={ this.handleOnChange } />

        <Button handleClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
