import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {
  photos: {
    data: [],
    loading: false,
    page: 1,
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
