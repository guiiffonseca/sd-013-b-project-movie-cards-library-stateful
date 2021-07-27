import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="a" data-testid="title-input-label">
            Título
            <input value={ title } type="text" name="" id="a" data-testid="title-input" />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AddMovie;
