import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="title-input-movie">
            Título
            <input
              id="title-input-movie"
              type="text"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input-label"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
