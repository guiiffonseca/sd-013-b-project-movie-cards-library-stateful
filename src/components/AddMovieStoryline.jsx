import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { storyline, changeHandler } = this.props;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            name="storyline"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            onChange={ changeHandler }
          />
        </label>
      </div>
    );
  }
}

AddMovieStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default AddMovieStoryline;
