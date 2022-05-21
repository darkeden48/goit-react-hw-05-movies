import { Link } from 'react-router-dom';

export default function NotFoundView() {
  return (
    <div>
      <h1> 404: This page it`s not found </h1>{' '}
      <Link to={'/'}>To HomePage </Link>
    </div>
  );
}
