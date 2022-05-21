import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';

const Layout = lazy(() =>
  import('./views/Layout.js' /* webpackChunkName: "layout-view" */),
);
const Cast = lazy(() =>
  import('./components/CastReviews/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('./components/CastReviews/Reviews' /* webpackChunkName: "reviews" */),
);
const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-view" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
);
const MovieDetails = lazy(() =>
  import(
    './views/MovieDetails.js' /* webpackChunkName: "movie-details-view" */
  ),
);

export default function App() {
  return (
    <Container>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
