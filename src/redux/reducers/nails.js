const inititialState = {
  items: [],
  isLoaded: false,
};

const nails = (state = inititialState, action) => {
  if (action.type === 'SET_NAILS') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default nails;
