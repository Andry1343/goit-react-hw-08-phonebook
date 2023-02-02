import { useAuth } from 'hooks/useAuth';
import { NavigationNavlink } from './Navigation.style';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationNavlink to="/">Home</NavigationNavlink>
      {isLoggedIn && (
        <NavigationNavlink to="/contacts">Contacs</NavigationNavlink>
      )}
    </nav>
  );
};
