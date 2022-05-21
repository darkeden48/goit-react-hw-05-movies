import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  // movieApi
  // .ApiTrend()
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=070151ea430b4e74dbca9bca592b262c',
    )
      .then(response => response.json())

      .then(data => data.results)
      .then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                {movie.original_name}
                {movie.original_title}{' '}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
