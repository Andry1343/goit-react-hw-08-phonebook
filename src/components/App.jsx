import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from './App.style';

import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout.js';
import HomePage from './pages/Home.js';
import RegisterPage from './pages/Register.js';
import { RestrictedRoute } from './RestrictedRoute.js';
import LoginPage from './pages/Login.js';
import { PrivateRoute } from './PrivateRoute.js';
import { ContactsPage } from './pages/ContactPage.js';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from './redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};
