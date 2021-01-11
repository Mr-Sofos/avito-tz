const initialState = {
  comments: [],
  opened: null,
  bigPhotos: [],
  loading: false,
  loadingComments: false,
};

export const bigPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'popUp/load/start':
      return {
        ...state,
      };

    case 'popUp/load/success':
      return {
        ...state,
        bigPhotos: action.payload,
        comments: action.payload.comments,
        opened: action.payload,
        loading: false,
      };

    case 'close/modal':
      return {
        ...state,
        opened: null,
      };

    default:
      return state;
  }
};
