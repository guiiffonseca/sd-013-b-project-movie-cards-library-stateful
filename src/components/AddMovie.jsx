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
  };

  render() {
    const { onclick } = this.props;
    return <h1>test</h1>
  };
}
