import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input-lab" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title-input-lab"
          name="title-input"
          value={ title }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InputTitle;
