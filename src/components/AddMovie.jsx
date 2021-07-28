import React from 'react';
// https://stackoverflow.com/questions/45692537/proptypes-is-not-defined
// Para resolver PropTypes is nor defined:
// npm install --save prop-types
import PropTypes from 'prop-types';
import Input from './Input';
import InputNumber from './InputNumber';
import Textarea from './Textarea';

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

    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  // onSearchTextChange(event) {
  //   this.setState({
  //     searchText: event.target.value,
  //   });
  //   console.log(this.state.searchText);
  // }

  render() {
    const {
      onClick,
    } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Input
            id="title-input"
            labelTest="title-input-label"
            name="Título"
          />
          <Input
            id="subtitle-input"
            labelTest="subtitle-input-label"
            name="Subtítulo"
          />
          <Input
            id="image-input"
            labelTest="image-input-label"
            name="Imagem"
          />
          <Textarea
            id="storyline-input"
            labelTest="storyline-input-label"
            name="Sinopse"
          />
          <InputNumber
            id="rating-input"
            labelTest="rating-input-label"
            name="Avaliação"
          />
          <div>
            {
              subtitle + title + imagePath + storyline + rating + genre + onClick
            }
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
