import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=8fd7ea3a669b814effbf3238ac2d6fc5').then(res => res.json().then(res => setTrendingFilms(res.results)));
  }, []);

  return (
    <ul>
      {trendingFilms.map(film => <li key={film.id}><Link to={`movies/${film.id}`}>{film.title ?? film.name}</Link>
      </li>)}
    </ul>
  );
};

export default Home;
