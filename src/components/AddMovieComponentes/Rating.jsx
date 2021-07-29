import React from 'react';

class Rating extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="rating">
        Avaliação:
        <input
          id="rating"
          value={ state }
          onChange={ evento }
          name="rating"
          type="text"
        />
      </label>
    );
  }
}

export default Rating;
