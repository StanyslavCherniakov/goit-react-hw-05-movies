import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '../../components/FilmsList/FilmList.styled';
import { fetchPopularMovies } from '../../api-servises';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/trending/all/day?api_key=8fd7ea3a669b814effbf3238ac2d6fc5').then(res => res.json().then(res => setTrendingFilms(res.results)));
  // }, []);
  useEffect(() => {
    (async function getPopularMovies() {
      const res = await fetchPopularMovies();
      setTrendingFilms(res.data.results);
    })();
  }, []);


  return (
    <List>
      {trendingFilms.map(film => <ListItem key={film.id}><Link to={`movies/${film.id}`}
                                                               state={{ from: '/' }}>{film.title ?? film.name}</Link>
      </ListItem>)}
    </List>
  );
};

export default Home;
