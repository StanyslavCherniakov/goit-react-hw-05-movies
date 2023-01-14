import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilmsList from '../../components/FilmsList/FilmsList';

const Movies = props => {
  const [filmName, setFilmName] = useState('');
  const [filmsBySearch, setFilmsBySearch] = useState([]);

  useEffect(() => {
    if (filmName === '') {
      return;
    }
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&query=${filmName}&language=en-US&page=1&include_adult=false`).then(res => res.json()).then(res => setFilmsBySearch(res.results));
  }, [filmName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilmName(e.target.elements.search.value);
    e.target.reset();
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {filmsBySearch.length > 0 ? <FilmsList films={filmsBySearch} /> : null}
    </div>
  );
};

Movies.propTypes = {};

export default Movies;
