import React from 'react';

class SinopseTextArea extends React.Component {
  constructor() {
    super();
    this.state = {
      storyline: '',
    };
    this.handleChangeOnTextArea = this.handleChangeOnTextArea.bind(this);
  }

  handleChangeOnTextArea = (event) => {
    this.setState({
      storyline: event.target.value,
    });
    console.log(this);
  };

  render() {
    const { storyline } = this.state;

    return (
      <label htmlFor="textarea-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          id="textarea-input"
          value={ storyline }
          onChange={ this.handleChangeOnTextArea }
        />
      </label>
    );
  }
}

export default SinopseTextArea;
