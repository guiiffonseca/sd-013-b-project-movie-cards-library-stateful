// implement AddMovie component here
import React from 'react';
import MovieTitle from './AddMoviesubComponents/MovieTitle';
import MovieSubTitle from './AddMoviesubComponents/MovieSubTitle';
import ImgPath from './AddMoviesubComponents/ImgPath';
import StorylineTextArea from './AddMoviesubComponents/StorylineTextArea';

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

    this.handleChange = this.handleChange.bind(this);
  }

  // func pra mudar os states
  // font https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/formularios-no-react/537fc0f4-1be1-4cd8-8333-9432fa722672/conteudos/815da631-cbdb-4637-b7fb-17e29240a8d1/event-handlers-genericos/20a033ed-ccfc-4e65-b6cb-53abf58039bb?use_case=side_bar
  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MovieTitle value={ title } callBack={ this.handleChange } />
        <MovieSubTitle value={ subtitle } callBack={ this.handleChange } />
        <ImgPath value={ imagePath } callBack={ this.handleChange } />
        <StorylineTextArea value={ storyline } callBack={ this.handleChange } />
      </form>
    );
  }
}
