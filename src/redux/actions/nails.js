import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchNails = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:3001/nails').then(({ data }) => {
    dispatch(setNails(data));
  });
};

export const setNails = (items) => ({
  type: 'SET_NAILS',
  payload: items,
});
