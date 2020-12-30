import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { albumReducer } from './photos';
import { bigPhotosReducer } from './bigPhotos';

const logger = createLogger({
  diff: true,
  collapsed: true,
});
const rootReducer = combineReducers({
  photos: albumReducer,
  bigPhotos: bigPhotosReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
