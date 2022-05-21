import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, Outlet, useNavigate} from 'react-router-dom';
import MovieCard from '../components/MovieCard/MovieCard';

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  // const [searchParams] = useSearchParams();
  // const search = searchParams.get('query');

 useEffect(() => {
    if (!film) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=070151ea430b4e74dbca9bca592b262c`,
    )
      .then(response =>
        {
          if(response.ok){
         return response.json();
        }
        alert('Sorry page it`s not found');
        navigate(location?.state?.from ?? '/');
        })
      .then(data => data)
      .then(setFilm)
  }, [movieId]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <div>
      <button type="button" onClick={onGoBack}>
        Go BACK
      </button>
      <MovieCard film={film} />
      <Outlet />
    </div>
  );
}
