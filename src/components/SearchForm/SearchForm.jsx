import React from 'react';
import PropTypes from 'prop-types';
import { FormBox, InputField } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  return (
    <FormBox onSubmit={onSubmit}>
      <InputField name='search' />
      <button type='submit'>Search</button>
    </FormBox>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
