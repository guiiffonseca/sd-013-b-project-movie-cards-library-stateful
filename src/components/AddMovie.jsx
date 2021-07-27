import React from 'react';
import TextInput from './TextInput';

export default class AddMovie extends React.Component {
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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { onclick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          text="Título:"
          value={ title }
          dataTestid="title-input"
          dataTestidLabel="title-input-label"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}
