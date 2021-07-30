import React from 'react';

class NumberInput extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: '',
    };
    this.handleChangeOnRating = this.handleChangeOnRating.bind(this);
  }

  handleChangeOnRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
    console.log(this);
  };

  render() {
    const { rating } = this.state;

    return (
      <label htmlFor="number-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          id="number-input"
          value={ rating }
          onChange={ this.handleChangeOnRating }
        />
      </label>
    );
  }
}

export default NumberInput;
