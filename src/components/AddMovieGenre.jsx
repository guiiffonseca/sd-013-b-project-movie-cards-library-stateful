AddMovieGenre

<section>
  <label data-testid="genre-input-label" htmlFor="genre">
    Gênero
    <select
      id="genre"
      value={ genre }
      data-testid="genre-input"
      onChange={ this.handleChange }
    >
      <option data-testid="genre-option" value="action">Ação</option>
      <option data-testid="genre-option" value="comedy">Comédia</option>
      <option data-testid="genre-option" value="thriller">Suspense</option>
    </select>
  </label>
</section>
