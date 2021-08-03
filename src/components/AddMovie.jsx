// implement AddMovie component here
import React from 'react';
import Title from './Pages/Title';
import Subtitle from './Pages/Subtitle';
import Image from './Pages/Image';
import Storyline from './Pages/Storyline';
import Rating from './Pages/Rating';
import Button from './Pages/Button';

class AddMovie extends React.Component {
  
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
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="add-movie-form" data-testid="add-movie-form">
        <Title value={title} />
        <Subtitle value={subtitle} />
        <Image value={imagePath} />
        <Storyline value={storyline} />
        <Rating value={rating} />
        <Genre value={genre} />
        <Button />
      </form>
  );
  }
}

export default AddMovie;