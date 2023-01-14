import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&language=en-US&page=1`).then(res => res.json()).then(res => setReviewsInfo(res.results));
  }, [movieId]);

  if (!reviewsInfo) {
    return null;
  }
  return (
    reviewsInfo.length > 0 ? (<div>
      {reviewsInfo.map(({ author, content }) => (
        <div>
          <p>{author}</p>
          <p>{content}</p>
        </div>))}
    </div>) : <p>There is no reviews for this Film:(</p>
  );
};

export default Reviews;
