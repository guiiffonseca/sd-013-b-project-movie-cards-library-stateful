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
      <span>Olá</span>
    );
  }
}

export default AddMovie;
