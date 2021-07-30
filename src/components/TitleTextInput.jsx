import React from 'react';

class TitleTextInput extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleChangeOnTitle = this.handleChangeOnTitle.bind(this);
  }

  handleChangeOnTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
    console.log(this);
  };

  render() {
    const { title } = this.state;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="title-input"
          value={ title }
          onChange={ this.handleChangeOnTitle }
        />
      </label>
    );
  }
}

export default TitleTextInput;
