import React, { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilmsList from '../../components/FilmsList/FilmsList';
import { fetchFilmsBySearch } from '../../api-servises';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [filmsBySearch, setFilmsBySearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    (async function getFilmsBySearch() {
      const res = await fetchFilmsBySearch(searchQuery);
      setFilmsBySearch(res.data.results);
    })();
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams({ query: value });
    e.target.reset();
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {filmsBySearch.length > 0 ? <FilmsList films={filmsBySearch} /> : null}
    </div>
  );
};

export default Movies;
