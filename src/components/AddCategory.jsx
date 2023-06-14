import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    const valorInput = inputValue.trim();
    if( valorInput.length <= 1) return;

    // setCategories( categories => [ inputValue, ...categories ]);
    setInputValue('');
    onNewCategory(valorInput.trim());
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder='Buscar gifs'
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
};
