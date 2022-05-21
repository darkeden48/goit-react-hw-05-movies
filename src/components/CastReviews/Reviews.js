import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US&page=1`,
    )
      .then(response => response.json())
      .then(data => data.results)
      .then(setReviews);
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(el => (
            <li key={el.id}>
              <h3>Author: {el.author}</h3>
              {el.content})
            </li>
            ))
            ) : (
            <p>We haven't had any reviews yet</p>
          )}
      </ul>
    </div>
  );
}
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};
