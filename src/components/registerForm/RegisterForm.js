import { useDispatch } from 'react-redux';
import { register } from '../redux/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from '../registerForm/RegisterForm.module.css';


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
    <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={style.label}>
        {/* Username */}
        {/* <input placeholder="Username" type="text" name="name" /> */}
        <TextField id="outlined-basic" label="Username" variant="outlined" type="text" name="name"  />
      </label>
      <label className={style.label}>
        {/* Email */}
        {/* <input placeholder="Email" type="email" name="email" /> */}
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email"  />
      </label>
      <label className={style.label}>
        {/* Password */}
        {/* <input placeholder="password" type="password" name="password" /> */}
        <TextField id="outlined-basic" label="password" variant="outlined" type="password" name="password"  />
      </label>
      {/* <button type="submit">Register</button> */}
      <Button type="submit" variant="outlined">Register</Button>
      
    </form>


  );
};
