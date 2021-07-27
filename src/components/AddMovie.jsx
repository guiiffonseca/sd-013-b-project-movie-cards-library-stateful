import React, { Component } from 'react';


class AddMovie extends Component {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.setState;
    return (
      <div>
        <h1>Opa</h1>
      </div>
    );
  }
}

export default AddMovie;
