import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Reviews = props => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&language=en-US&page=1`).then(res => res.json()).then(setReviewsInfo);
  }, [movieId]);

  if (!reviewsInfo) {
    return null;
  }
  return (
    <div>
      REVIEWS
    </div>
  );
};

Reviews.propTypes = {};

export default Reviews;
