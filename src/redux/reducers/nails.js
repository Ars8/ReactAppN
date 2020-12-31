const inititialState = {
  items: [],
  isLoaded: false,
};

const nails = (state = inititialState, action) => {
  if (action.type === 'SET_NAILS') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default nails;
