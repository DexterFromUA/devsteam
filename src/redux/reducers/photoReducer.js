import {createReducer} from '@reduxjs/toolkit';

import {GET_NEXT, GET_PHOTOS, INCREMENT} from '../../constants/actions';

const photoReducer = createReducer({}, (builder) => {
  builder
    .addMatcher(
      (action) => action.type.endsWith(GET_PHOTOS + '/pending'),
      (state) => {
        state.loading = true;
      },
    )
    .addMatcher(
      (action) => action.type.endsWith(GET_PHOTOS + '/fulfilled'),
      (state, action) => {
        state.loading = false;
        state.data = [...action.payload];
      },
    )
    .addMatcher(
      (action) => action.type === INCREMENT,
      (state) => {
        state.page += 1;
      },
    )
    .addMatcher(
      (action) => action.type.endsWith(GET_NEXT + '/fulfilled'),
      (state, action) => {
        state.data = [...state.data, ...action.payload];
      },
    );
});

export default photoReducer;
