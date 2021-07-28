import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title state={ title } callback={ this.handleChange } />
        <Subtitle state={ subtitle } callback={ this.handleChange } />
        <ImagePath state={ imagePath } callback={ this.handleChange } />
        <StoryLine state={ storyLine } callback={ this.handleChange } />

      </form>
    );
  }
}

export default AddMovie;
