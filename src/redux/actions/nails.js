import axios from 'axios';
import { useDispatch } from 'react-redux';

export const fetchNails = () => {
  const dispatch = useDispatch();
  axios.get('http://localhost:3001/nails').then(({ data }) => {
    dispatch(setNails(data));
  });
};

export const setNails = (items) => ({
  type: 'SET_NAILS',
  payload: items,
});
