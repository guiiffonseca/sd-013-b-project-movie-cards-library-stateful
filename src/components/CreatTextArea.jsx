import React from 'react';
import PropTypes from 'prop-types';

export default class CreatTextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <textarea
        name="storyline"
        id="storyline"
        data-testid="storyline-input"
        value={ value }
        onChange={ onChange }
      >
        Sinopse
      </textarea>
    );
  }
}

CreatTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
