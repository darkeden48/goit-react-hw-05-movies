import { NavLink } from 'react-router-dom';
import Nav from './Navigation.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={Nav.link} activeclassname={Nav.active}>
      HomePage
    </NavLink>
    <NavLink to="/movies" className={Nav.link} activeclassname={Nav.active}>
      MoviesPage
    </NavLink>
  </nav>
);

export default Navigation;
