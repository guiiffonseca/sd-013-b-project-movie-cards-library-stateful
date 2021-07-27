import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const p = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="addmovierating">
          Avaliação
          <input
            type="number"
            id="addmovierating"
            value={ p.value }
            data-testid="rating-input"
            onChange={ p.onChange }
            name="rating"
          />
        </label>
      </div>);
  }
}

Rating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
