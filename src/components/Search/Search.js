import { nanoid } from 'nanoid';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function Search({ onSubmit }) {
  const movieNameId = nanoid();
  const [keyWord, setKeyWord] = useState('');

  const handleChange = event => {
    setKeyWord(event.currentTarget.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (keyWord) {
      onSubmit(keyWord);
      reset();
    }
  };

  const reset = e => {
    setKeyWord('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={movieNameId}>
        Film Name
        <input
          type="text"
          name="name"
          value={keyWord}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={movieNameId}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}
Search.propTypes = {
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
};
