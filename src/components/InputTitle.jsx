import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, onChange } = this.props;
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

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;
