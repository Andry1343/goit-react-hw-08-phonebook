import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { visibleContacts } from 'components/redux/selectors';
import { ContactListItems } from './ContactList.style';

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <ContactListItems>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ContactListItems>
  );
};