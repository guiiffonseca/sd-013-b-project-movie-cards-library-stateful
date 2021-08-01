import React from 'react';
import PropTypes from 'prop-types';

export default class TextAreaSynopsis extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextAreaSynopsis.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
