// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: 0,
      rating: 0,
      genre: '',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <p>AddMovie</p>
    );
  }
}

export default AddMovie;
