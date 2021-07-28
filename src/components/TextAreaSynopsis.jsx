import React from 'react';
import PropTypes from 'prop-types';

export default class TextAreaSynopsis extends React.Component {

  render() {
    const { storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline-input"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

TextAreaSynopsis.propTypes = {
  storyline: PropTypes.string.isRequired,
};
