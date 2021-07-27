import React from 'react';
import PropTypes from 'prop-types';

class TextAreaLabeled extends React.Component {
  render() {
    const { value, handleData } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="30"
          rows="10"
          name="storyline"
          id="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleData }
        />
      </label>
    );
  }
}

TextAreaLabeled.propTypes = {
  value: PropTypes.string.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default TextAreaLabeled;
