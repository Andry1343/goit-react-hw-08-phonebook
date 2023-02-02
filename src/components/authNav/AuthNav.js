import { StyleNavLink } from '../authNav/AuthNav.style.js';

export const AuthNav = () => {
  return (
    <div>
      <StyleNavLink to="/register">Register</StyleNavLink>
      <StyleNavLink to="/login">Log In</StyleNavLink>
    </div>
  );
};
