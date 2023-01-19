import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { MdClose } from 'react-icons/md';
import style from '../contactList/ContactList.module.css';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <p>
        {' '}
        <button
          type="button"
          className={style.form_btn_del}
          onClick={handleDelete}
        >
         <MdClose style={{width: '15px', color: 'red'}}/>
        </button>
        {name} : {number}
      </p>
    </>
  );
};
