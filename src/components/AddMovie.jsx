import React from 'react';
// https://stackoverflow.com/questions/45692537/proptypes-is-not-defined
// Para resolver PropTypes is nor defined:
// npm install --save prop-types
import PropTypes from 'prop-types';
// import Input from './Input';
// import InputNumber from './InputNumber';
import Textarea from './Textarea';
import SelectGender from './SelectGender';
import Button from './Button';
import Test from './Test';

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

    this.onChange = this.onChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
    // console.log(name);
    // console.log(event.target.value);
  }

  onChange() {
    const {
      onClick,
    } = this.props;
    this.setState((state) => {
      onClick(state);
      return {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      };
    });
  }

  render() {
    const {
      onClick,
    } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const addMovieProps = [subtitle, title, imagePath, rating];
    return (
      <div>
        <form data-testid="add-movie-form">
          <Test
            value={ addMovieProps }
            onChange={ this.handleOnChange }
          />
          <Textarea
            value={ storyline }
            onChange={ this.handleOnChange }
          />
          <SelectGender
            selectedGenre={ genre }
            onSelectedGenreChange={ this.handleOnChange }
          />
          <Button
            onClick={ this.onChange }
            onClickEsLint={ onClick }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
