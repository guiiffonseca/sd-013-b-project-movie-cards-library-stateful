import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor(props){
    super(props);
    
  }
  render(){
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return(

    )
  }
}

export default addMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};