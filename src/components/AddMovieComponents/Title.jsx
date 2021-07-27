import React from 'react';

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          id="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChangeTitle }
        />
      </label>
    );
  }
}

export default Title;
