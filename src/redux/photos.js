const initialState = {
  photos: [],
  loading: false,
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'photos/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'photos/load/success':
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
