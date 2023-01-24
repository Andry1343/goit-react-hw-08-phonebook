import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import style from '../navigation/Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={style.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          Contacs
        </NavLink>
      )}
    </nav>
  );
};