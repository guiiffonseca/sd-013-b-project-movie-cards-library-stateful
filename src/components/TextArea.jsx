import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { OnChange } = this.props;
    const { storyline } = this.props;
    return (
      <label
        htmlFor="textarea"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="textarea"
          name="textarea"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ OnChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string,
  OnChange: PropTypes.func,
}.isRequired;

export default TextArea;
