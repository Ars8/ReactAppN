import axios from 'axios';

export const fetchNails = () => (dispatch) => {
  axios.get('http://localhost:3001/nails').then(({ data }) => {
    dispatch(setNails(data));
  });
};

export const setNails = (items) => ({
  type: 'SET_NAILS',
  payload: items,
});
