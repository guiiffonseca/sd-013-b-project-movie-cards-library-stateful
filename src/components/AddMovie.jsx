import React from 'react';
import AddTitle from './addMovie/AddTitle';
import AddSubtitle from './addMovie/AddSubtitle';
import AddImage from './addMovie/AddImage';
import AddStoryline from './addMovie/AddStoryline';
import AddRating from './addMovie/AddRating';
import AddGenre from './addMovie/AddGenre';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <AddTitle />
          <AddSubtitle />
          <AddImage />
          <AddStoryline />
          <AddRating />
          <AddGenre />
          <button data-testid="send-button" type="button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
