import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {

  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};

export default TextArea;
