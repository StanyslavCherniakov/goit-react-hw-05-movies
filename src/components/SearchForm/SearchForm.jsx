import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name='search' />
      <button type='submit'>Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
