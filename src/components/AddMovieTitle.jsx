import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { title, changeHandler } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ changeHandler }
          />
        </label>
      </div>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default AddMovieTitle;
