import React from 'react';
import PropTypes from 'prop-types';

class AddStoryline extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label
        htmlFor="add-movie-storyline"
        data-testid="storyline-input-label"
      >
        Sinopse:
        <textarea
          id="add-movie-storyline"
          className="search-field"
          data-testid="storyline-input"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
          rows="7"
          maxLength="400"
        />
      </label>
    );
  }
}

AddStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddStoryline;
