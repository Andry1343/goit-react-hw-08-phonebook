import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { visibleContacts } from 'components/redux/selectors';
import style from '../contactList/ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <ul className={style.contact_position}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
