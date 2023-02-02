import { useDispatch } from 'react-redux';
import { logOut } from '../redux/operations';
import { useAuth } from 'hooks/useAuth';

import Button from '@mui/material/Button';
import { Username, Wrapper } from './UserMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        variant="outlined"
        size='small'
      >
        Logout
      </Button>
    </Wrapper>
  );
};
