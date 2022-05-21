import { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import Search from '../components/Search/Search';

export default function MoviesPage({ onSubmit }) {
  const [movieName, setMovieName] = useState([]);
  const [query, setQuery] = useState('');
  // const [searched, setSearch] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get('query');
  console.log(location);
  console.log(search)
  useEffect(() => {
    if (query === '') {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=070151ea430b4e74dbca9bca592b262c`,
    )
      .then(response => response.json())
      .then(data => data.results)
      .then(setMovieName);
  }, [query]);

  const handleFormSubmit = keyWord => {
    setQuery(keyWord);
    navigate({ ...location, search: `query=${search}` });
  };

  return (
    <div>
      <Search onSubmit={handleFormSubmit} />
      <ul>
        {movieName &&
          movieName.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}
              state={{from:location}}
              >
                {movie.original_name}
                {movie.original_title}{' '}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
