const inititialState = {
  items: [],
  isLoaded: false,
};

const nails = (state = inititialState, action) => {
  switch (action.type) {
    case 'SET_NAILS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default nails;
