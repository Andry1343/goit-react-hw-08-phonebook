import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';

import { ContactForm } from '../form/Form';
import { Filter } from '../filter/Filter';
import { ContactList } from '../contactList/ContactList';
import style from '../form/Form.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.form_name_number_filter}>
      <h2>Phonebook</h2>
      <ContactForm></ContactForm>
      {contacts.length !== 0 && <Filter />}
      {contacts.length !== 0 && <h3>Contacs</h3>}
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};