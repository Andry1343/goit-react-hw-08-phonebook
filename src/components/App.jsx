import { ContactForm } from '../components/form/Form.jsx';
import { Filter } from '../components/filter/Filter.jsx';
import { ContactList } from '../components/contactList/ContactList.jsx';
import { fetchContacts } from './redux/operations.js';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from './redux/selectors';
import style from './form/Form.module.css';

import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout.js';
import HomePage from './pages/Home.js';
import RegisterPage from './pages/Register.js';
import { RestrictedRoute } from './RestrictedRoute.js';
import LoginPage from './pages/Login.js';
import { PrivateRoute } from './PrivateRoute.js';


export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.form}>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={{/* <TasksPage /> */}} />
          }
        />
      </Route>
    </Routes>
      
      <div className={style.form_name_number_filter}>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        {contacts.length !== 0 && <Filter />}
        {contacts.length !== 0 && <h2>Contacs</h2>}
      </div>
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};
