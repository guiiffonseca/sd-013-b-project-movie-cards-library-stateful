import React from 'react';

class Rating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
    };

    this.handleChangeRating = this.handleChangeRating.bind(this);
  }

  handleChangeRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  }

  render() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChangeRating }
        />
      </label>
    );
  }
}

export default Rating;
