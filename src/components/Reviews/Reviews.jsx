import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/Api';

import {
  ReviewsContainer,
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [reviewsResults, setReviewsResults] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  useEffect(() => {
    setReviewsResults(reviews.results);
  }, [reviews.results]);

  return (
    <ReviewsContainer>
      {reviewsResults?.length > 0 ? (
        <ReviewsList>
          {reviews.results?.map(({ author, content, id }) => (
            <ReviewsItem key={id}>
              <ReviewsAuthor>{`Author: ${author}`}</ReviewsAuthor>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        'We do not have any reviews for this movie'
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
