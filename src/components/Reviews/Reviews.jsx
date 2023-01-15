import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByFilm } from '../../api-servises';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState(null);

  useEffect(() => {
    (async function getReviewsByFilm() {
      const res = await fetchReviewsByFilm(movieId);
      setReviewsInfo(res.data.results);
    })();
  }, [movieId]);

  if (!reviewsInfo) {
    return null;
  }
  return (
    reviewsInfo.length > 0 ? (<ul>
      {reviewsInfo.map(({ author, content }, idx) => (
        <li key={idx}>
          <p>{author}</p>
          <p>{content}</p>
        </li>))}
    </ul>) : <p>There is no reviews for this Film:(</p>
  );
};

export default Reviews;
