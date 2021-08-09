import React from 'react';
import PropTypes from 'prop-types';
import Title from './Titulo';
import Subtitle from './Subtitulo';
import Image from './Image';
import Storyline from './Textarea';
import InputNumber from './inputNumber';
import Select from './Select';
import Button from './Button';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      title: target.value,
      subtitle: target.value,
      imagePath: target.value,
      storyline: target.value,
      rating: target.value,
      genre: target.value,
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
      <form data-testid="add-movie-form">
        {/*  Referencia usada apenas para visualizar como seria a componentização(toda construção dos componentes e codigos foram meus) https://github.com/tryber/sd-013-b-project-movie-cards-library-stateful/pull/130/files */}
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <Image imagepath={ imagePath } handleChange={ this.handleChange } />
        <Storyline storyline={ storyline } handleChange={ this.handleChange } />
        <InputNumber rating={ rating } handleChange={ this.handleChange } />
        <Select genre={ genre } handleChange={ this.handleChange } />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
