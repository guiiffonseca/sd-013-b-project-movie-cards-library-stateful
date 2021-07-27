import React from 'react';

export default class AddMovie extends React.Component {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onclick } = this.props;
    return (
      <form data-testid="add-movie-form" />
    );
  }
}
