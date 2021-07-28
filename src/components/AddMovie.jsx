import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     title: event.target.value,
  //   });
  // }

  // handleClickBtn(event) {
  //   console.log('cliquei');
  // }

  render() {
    const movie = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = movie;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="text"
            id="text"
            value={ this.title }
            data-testid="title-input"
            onChange={ title }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};

AddMovie.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: '',
}
export default AddMovie;
