import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastByFilm } from '../../api-servises';

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
    <ul>
      {castInfo.map(({
                       profile_path = 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png',
                       name,
                       character,
                     }, idx) => (
        <li key={idx}>
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt='' />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
