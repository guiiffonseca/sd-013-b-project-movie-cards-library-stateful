import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    // const { name } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ title: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <fieldset>
            <legend>== Adicionar filme ==</legend>
            <label htmlFor="title" data-testid="title-input-label">
              Título
              <input
                id="title"
                name="title"
                data-testid="title-input"
                type="text"
                value={ title }
                onChange={ this.handleChange }
              />
            </label>
            { subtitle}
            { title }
            { imagePath }
            { storyline }
            { rating }
            { genre }
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddMovie;
