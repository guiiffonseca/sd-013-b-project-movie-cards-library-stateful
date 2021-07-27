// implement AddMovie component here
import React from 'react';
import Title from './Title';

class AddMovie extends React.Component {

  constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.props = {
          title:"",
      }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name]: value,
    })
  }

  render() {
    return (
      <form data-testid="add-movie-form" action="">
        <Title value={this.props.title} handleChange = {this.handleChange}/>
      </form>
    )
  }
}

export default AddMovie;