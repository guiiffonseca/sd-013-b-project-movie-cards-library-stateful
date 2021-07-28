import React, { Component } from 'react';
import PropTypes from 'prop-types';

// a tag select deve receber 4 tags option, cada uma com um valor e um texto diferentes. Tinha feito tudo a mão mas o lint reclamou da quantidade de linhas do metodo render (50) e percebi que posso armazenar essas informaçoes em um array de objetos e fazer um map (como feito nas aulas) para renderizar as 4 tags option.
// idéia tirada de https://scriptverse.academy/tutorials/reactjs-select.html

const selectOptions = [
  { text: 'Todos', value: '', id: '#00' },
  { text: 'Ação', value: 'action', id: '#01' },
  { text: 'Comédia', value: 'comedy', id: '#02' },
  { text: 'Suspense', value: 'thriller', id: '#03' },
];

class SelectInput extends Component {
  render() {
    const { labelText, tagId, testIdLabel, testIdTag, tagValue, onChange } = this.props;
    // fazendo deste jeito, e passando os valores que o requisito pede como props na tag que vai renderizar esse componente no SearchBar o teste reconhece os valores que preciso passar pedidos no requisito 5. E dessa forma o lint nao reclama do limite maximo de linhas do metodo render que precisa ser 50.

    return (
      <label htmlFor={ tagId } data-testid={ testIdLabel }>
        { labelText }
        <select
          id={ tagId }
          data-testid={ testIdTag }
          value={ tagValue }
          onChange={ onChange }
        >
          {selectOptions.map(({ text, value, id }) => (
            <option key={ id } value={ value } data-testid="select-option">
              {text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  tagId: PropTypes.string.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  testIdTag: PropTypes.string.isRequired,
  tagValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
