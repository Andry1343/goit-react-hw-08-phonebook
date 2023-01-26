import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
/* import { nanoid } from 'nanoid'; */
/* import style from '../filter/Filter.module.css'; */

import TextField from '@mui/material/TextField';
/* import Button from '@mui/material/Button'; */

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div style={{marginTop: "15px"}}>
      {/* <p className={style.filter_text}>Find contacts by name</p> */}
      {/* <input
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        id={nanoid()}
      /> */}
      <TextField id="outlined-basic" label="Find contacts by name" variant="outlined" 
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        /* id={nanoid()} */
         />
    </div>
  );
};
