



import { Navigation } from '../navigation/Navigation';
import { UserMenu } from '../userMenu/UserMenu'
import { AuthNav } from '../authNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import style from '../appBar/AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={style.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};