import { useDispatch } from 'react-redux';
import { logIn } from '../redux/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from '../loginForm/LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label className={style.label}>
        <TextField id="outlined-basic-email" label="Email" variant="outlined" type="email" name="email"  />
      </label>
      <label className={style.label}>
        <TextField id="outlined-basic-password" label="Password" variant="outlined" type="password" name="password"  />
      </label>
      <Button type="submit" variant="outlined">Log In</Button>
    </form>
  );
};