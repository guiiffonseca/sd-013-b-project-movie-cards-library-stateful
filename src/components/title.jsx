import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          id="title"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;
