import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { onChange, value } = this.props;
      return (
        <label htmlFor="textArea" data-testid="storyline-input-label">
        Sinopse:
        <textarea name="storyline" id="textArea" data-testid="storyline-input"
          value={ value }
          onChange={ onChange } >
        </textarea>
        </label>
    );
  }
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default TextArea;
