import { NavLink } from 'react-router-dom';
import MovCar from './MovieCard.module.css';
import { PropTypes } from 'prop-types';

export default function MovieCard({ film }) {
  console.log(film);
  return (
    <div>
      <div className={MovCar.movieCard}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt="poster"
            width={300}
          />
        </div>
        <div className={MovCar.cardContent}>
          <h2>
            {film.original_title} (
            {film.release_date && film.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {film.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Genres</h3>
          <ul className={MovCar.genres_list}>
            {film.genres &&
              film.genres.map(el => <li key={el.id}>{el.name}</li>)}
          </ul>
        </div>
      </div>
      <h2>Additional information</h2>
      <ul className={MovCar.additoins}>
        <li>
          <NavLink to={'cast'}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
}
MovieCard.propTypes = {
  overview: PropTypes.string,
  original_title: PropTypes.string,
  release_date: PropTypes.number,
  backdrop_path: PropTypes.string,
  vote_count: PropTypes.number,
  vote_average: PropTypes.number,
  genes: PropTypes.arrayOf,
  id: PropTypes.number,
  name: PropTypes.string,
};
