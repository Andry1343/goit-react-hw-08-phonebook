import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: '15px' }}>
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        style={{ marginBottom: '16px', width: '100%' }}
      />
    </div>
  );
};
