import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const {
      title,
      handleChange,
    } = this.props;

    return (
      <section>
        <label data-testid="title-input-label" htmlFor="title">
          Título:
          <input
            type="text"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTitle;
