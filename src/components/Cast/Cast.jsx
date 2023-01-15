import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastByFilm } from '../../api-servises';
import { ListItem, ImgItem, List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    (async function getCastByFilm() {
      const res = await fetchCastByFilm(movieId);
      setCastInfo(res.data.cast);
    })();
  }, [movieId]);

  if (!castInfo) {
    return null;
  }

  return (
    <List>
      {castInfo.map(({
                       profile_path = 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png',
                       name,
                       character,
                     }, idx) => (
        <ListItem key={idx}>
          <ImgItem src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt='' />
          <p>{name}</p>
          <p>Character: {character}</p>
        </ListItem>
      ))}
    </List>
  );
};

export default Cast;
