import React from 'react';

class Subtitle extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
    };

    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
  }

  handleChangeSubtitle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
  }

  render() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChangeSubtitle }
        />
      </label>
    );
  }
}

export default Subtitle;
