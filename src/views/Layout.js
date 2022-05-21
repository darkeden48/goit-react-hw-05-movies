import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Container from '../components/Container/Container';

export default function Layout() {
  return (
    <Container>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
