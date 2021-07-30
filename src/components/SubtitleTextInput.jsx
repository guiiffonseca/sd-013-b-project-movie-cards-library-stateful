import React from 'react';

class SubitleTextInput extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
    };
    this.handleChangeOnSubtitle = this.handleChangeOnSubtitle.bind(this);
  }

  handleChangeOnSubtitle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
    console.log(this);
  };

  render() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          id="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChangeOnSubtitle }
        />
      </label>
    );
  }
}

export default SubitleTextInput;
