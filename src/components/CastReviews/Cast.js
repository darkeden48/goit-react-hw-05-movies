import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=070151ea430b4e74dbca9bca592b262c`,
    )
      .then(response => response.json())
      .then(data => data.cast)
      .then(setCast);
  }, [movieId]);

  console.log(cast);

  return (
    <div>
      <ul>
        {cast &&
          cast.map(el => (
            <li key={el.id}>
              {el.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${el.profile_path}`}
                  alt={el.name}
                  width={100}
                />
              ) : (
                <img
                  src='https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'
                  alt='No poster'
                  width={100}
                />
              )}
              <p>{el.name}</p>
              <p>Character: {el.character.split('(voice)')}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
Cast.propTypes = {
  searchFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    }),
  ),
};
