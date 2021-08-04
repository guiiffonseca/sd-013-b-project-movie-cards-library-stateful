import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ onChange }
          name="title"
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
