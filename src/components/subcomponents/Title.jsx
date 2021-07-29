import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="Input title" data-testid="title-input-label">
        Título
        <input
          value={ title }
          type="text"
          name="title"
          id="Input title"
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
