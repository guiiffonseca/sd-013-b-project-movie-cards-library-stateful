import React from 'react';
import FormLabels from './FormLabels';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { ...addMovieState } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FormLabels handleChange={ this.handleChange } addMovieState={ addMovieState } />
        <button type="button" data-testid="send-button" onClick="">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // title: PropTypes.string,
  // subtitle: PropTypes.string,
  // imagePath: PropTypes.string,
  // storyline: PropTypes.string,
  // rating: PropTypes.number,
  // genre: PropTypes.string,
};

AddMovie.defaultProps = {
  title: '',
  // subtitle: '',
  // imagePath: '',
  // storyline: '',
  // rating: 0,
  // genre: '',
};
export default AddMovie;
