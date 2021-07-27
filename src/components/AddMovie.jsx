// implement AddMovie component here
import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.EventSetstate = this.EventSetstate.bind(this);
  }

  EventSetstate(event) {
    this.setState(({ title: event.target.value }));
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="add" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            id="add"
            data-testid="title-input"
            onChange={ this.EventSetstate }
          />
        </label>
      </form>
    );
  }
}
