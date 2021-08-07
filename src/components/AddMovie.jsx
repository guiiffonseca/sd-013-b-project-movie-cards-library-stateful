import React, { Component } from 'react';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
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

  handleChange({ target }) {
    console.log(this.props);
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput
            title={ title }
            handleChange={ this.handleChange }
          />
          <SubtitleInput
            subtitle={ subtitle }
            handleChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

export default AddMovie;
