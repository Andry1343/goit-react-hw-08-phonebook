import { Navigation } from '../navigation/Navigation';
import { UserMenu } from '../userMenu/UserMenu';
import { AuthNav } from '../authNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.style';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
