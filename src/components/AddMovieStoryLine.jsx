import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryLine extends React.Component {
  render() {
    const {
      storyline,
      handleChange,
    } = this.props;

    return (
      <section>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse:
          <textarea
            id="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

AddMovieStoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieStoryLine;
