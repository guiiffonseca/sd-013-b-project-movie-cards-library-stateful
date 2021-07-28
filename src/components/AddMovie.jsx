import React from 'react';

class AddMovie extends React.Component {
  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.props;

    return (
      <form data-testid="add-movie-form" />
    );
  }
}

export default AddMovie;
