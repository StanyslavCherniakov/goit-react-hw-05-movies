import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchFilmById } from '../../api-servises';
import {
  NavigationLink,
  GenreElement,
  Genres,
  Overview,
  Poster,
  Title,
  Wrapper,
  WrapperDescription,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    (async function getFilmById() {
      try {
        const res = await fetchFilmById(movieId);
        setMovieInfo(res.data);
      } catch {
      }
    })();
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres } = movieInfo;

  return (
    <div>
      <NavigationLink to={backLink}>Back</NavigationLink>
      <Wrapper>
        <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='' />
        <WrapperDescription>
          <Title>{title}</Title>
          <p>User Score: {parseInt(vote_average * 10)}%</p>
          <Overview>Overview</Overview>
          <p>{overview}</p>
          <Genres>Genres</Genres>
          <p>{genres.map(item => <GenreElement key={item.id}>{item.name}</GenreElement>)}</p>
        </WrapperDescription>
      </Wrapper>
      <Wrapper>
        <NavigationLink to='cast' state={{ from: backLink }}>Cast</NavigationLink>
        <NavigationLink to='reviews' state={{ from: backLink }}>Reviews</NavigationLink>
      </Wrapper>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
