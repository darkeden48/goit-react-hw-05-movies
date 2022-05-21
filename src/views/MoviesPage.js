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
  // const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(undefined);
  const searched=searchParams.get('query');

  useEffect(() => {
    if (searched === null) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searched}&api_key=070151ea430b4e74dbca9bca592b262c`,
    )
      .then(response => response.json())
      .then(data => {  
        if (data.results.length > 0) {
        setMovieName(data.results);
        setError(false)
        return
      }
      throw Error();
      })
      .catch(error=>{
        setError(true)
      })
    
  }, [searched]);

  const handleFormSubmit = keyWord => {
    // setQuery(keyWord);
    navigate({ ...location, search: `query=${keyWord}` });
  };
 
  return (
    <div>
      <Search onSubmit={handleFormSubmit} />
      <ul>
        {movieName&&!error&&
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
      {error&&(<h1>This film it`s not found</h1>)}
    </div>
  );
}
