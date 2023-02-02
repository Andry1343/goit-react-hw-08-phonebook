import { useDispatch } from 'react-redux';
import { register } from '../redux/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LableRegisterForm } from './Register.style.form';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <LableRegisterForm>
        <TextField
          id="outlined-basic-name"
          label="Username"
          variant="outlined"
          type="text"
          name="name"
          required
        />
      </LableRegisterForm>
      <LableRegisterForm>
        <TextField
          id="outlined-basic-email"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          required
        />
      </LableRegisterForm>
      <LableRegisterForm>
        <TextField
          id="outlined-basic-password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          required
        />
      </LableRegisterForm>
      <Button type="submit" variant="outlined">
        Register
      </Button>
    </form>
  );
};
