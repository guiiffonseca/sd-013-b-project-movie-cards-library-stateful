import React from 'react';
import PropTypes from 'prop-types';
import Select from '../formFields/Select';

class Genre extends React.Component {
  render() {
    const { value, change } = this.props;

    const label = {
      labelId: 'genre-input-label',
      txt: 'Gênero',
    };

    const select = {
      selectId: 'genre-input',
      id: 'genre',
    };

    const option = {
      optionId: 'genre-option',
      options: [
        { value: 'action', txt: 'Ação' },
        { value: 'comedy', txt: 'Comédia' },
        { value: 'thriller', txt: 'Suspense' }],
    };

    return (
      <Select
        label={ label }
        select={ select }
        option={ option }
        change={ change }
        selectValue={ value }
      />
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Genre;
