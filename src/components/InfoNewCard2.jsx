import React, { Component } from 'react';

class InfoNewCard2 extends Component {
  render() {
    const { state, handleChange } = this.props;
    const { storyline, rating, genre } = state;

    return (
      <div>
        <label data-testid='storyline-input-label'>
          Sinopse{' '}
          <textarea
            name='storyline'
            value={storyline}
            cols='30'
            rows='5'
            data-testid='storyline-input'
            onChange={handleChange}
          ></textarea>
        </label>
        <label data-testid='rating-input-label'>
          Avaliação
          <input
            type='number'
            value={rating}
            name='rating'
            onChange={handleChange}
            data-testid='rating-input'
          />
        </label>
        <label data-testid='genre-input-label'>
          Gênero
          <select
            name='genre'
            value={genre}
            data-testid='genre-input'
            onChange={handleChange}
          >
            <option value='action' data-testid='genre-option'>
              Ação
            </option>
            <option value='comedy' data-testid='genre-option'>
              Comédia
            </option>
            <option value='thriller' data-testid='genre-option'>
              Suspense
            </option>
          </select>
        </label>
      </div>
    );
  }
}
export default InfoNewCard2;
