import React from 'react';

class Rating extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          value={ state }
          onChange={ evento }
          name="rating"
          type="number"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

export default Rating;
