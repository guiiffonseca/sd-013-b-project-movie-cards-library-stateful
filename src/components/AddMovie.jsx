import React from 'react';
import AddSubtitle from './AddSubtitle';
import Addtitle from './AddTitle';
import AddImagePath from './AddImagePath';
import StoryLine from './storyline';
import AddRating from './AddRating';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Addtitle />
        <AddSubtitle />
        <AddImagePath />
        <StoryLine />
        <AddRating />
      </form>
    );
  }
}

export default AddMovie;
