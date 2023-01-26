import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
import TextField from '@mui/material/TextField';
import style from '../filter/Filter.module.css';


export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div style={{marginTop: "15px"}}>
      <TextField id="outlined-basic" label="Find contacts by name" variant="outlined" 
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        className = {style.filter_imput}
         />
    </div>
  );
};
