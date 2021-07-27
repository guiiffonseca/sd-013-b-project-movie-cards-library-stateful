import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingInput from './RatingInput';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <Title handleChange={ this.handleChange } value={ title } />
          <Subtitle handleChange={ this.handleChange } value={ subtitle } />
          <ImagePath handleChange={ this.handleChange } value={ imagePath } />
          <Storyline handleChange={ this.handleChange } value={ storyline } />
          <RatingInput handleChange={ this.handleChange } value={ rating } />
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
