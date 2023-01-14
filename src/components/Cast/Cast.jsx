import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&language=en-US`).then(res => res.json()).then(res => setCastInfo(res.cast));
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
