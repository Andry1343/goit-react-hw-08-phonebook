import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { visibleContacts } from 'components/redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <ul>
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
