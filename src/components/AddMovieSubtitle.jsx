import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const {
      subtitle,
      handleChange,
    } = this.props;

    return (
      <section>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo:
          <input
            type="text"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieSubtitle;
