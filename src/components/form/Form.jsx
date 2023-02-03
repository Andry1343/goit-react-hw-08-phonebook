import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations';
import { selectContacts } from 'components/redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LableForm } from './Form.style';

export function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const contactExists = contacts.find(contact => {
      return contact.name === name;
    });
    if (contactExists) {
      setName('');
      setNumber('');
      return toast.warn(`${name} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <LableForm>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LableForm>

      <LableForm>
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LableForm>
      <Button type="submit" variant="outlined">
        Add contact
      </Button>
      <ToastContainer />
    </form>
  );
}
