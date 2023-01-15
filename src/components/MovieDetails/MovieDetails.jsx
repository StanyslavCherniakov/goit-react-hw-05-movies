import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&language=en-US`).then(res => res.json()).then(setMovieInfo);
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres } = movieInfo;

  return (
    <div>
      <Link to={location.state.from}>Back</Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='' />
        <p>{title}</p>
        <p>User Score: {parseInt(vote_average * 10)}%</p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        <p>{genres.map(item => <span key={item.id}>{item.name}</span>)}</p>
      </div>
      <Link to='cast'>Cast</Link>
      <Link to='reviews'>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
