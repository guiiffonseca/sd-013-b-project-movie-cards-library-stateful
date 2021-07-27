// implement AddMovie component here

import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.props;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <h1>teste</h1>
      </form>
    );
  }
}

export default AddMovie;
