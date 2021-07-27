import React from 'react';

export default class AddMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: "",
      title:"",
      imagePath:"",
      storyLine:"",
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <p>teste</p>
      </form>
    );
  }
}
