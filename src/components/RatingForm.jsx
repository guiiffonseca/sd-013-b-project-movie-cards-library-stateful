import React from 'react';
import PropTypes from 'prop-types';

class Assessment extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating-input"
          value={ value }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Assessment.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Assessment;
