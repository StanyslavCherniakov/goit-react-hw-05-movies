import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = props => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=8fd7ea3a669b814effbf3238ac2d6fc5').then(res => res.json().then(res => setTrendingFilms(res.results)));
  }, []);

  return (
    <div>
      {trendingFilms.map(film => <li key={film.id}><Link to=':filmId'>{film.title ?? film.name}</Link></li>)}
    </div>
  );
};

Home.propTypes = {};

export default Home;
