import {createAsyncThunk, createAction} from '@reduxjs/toolkit';

import {GET_PHOTOS, GET_NEXT, INCREMENT} from '../../constants/actions';
import getPhotos from '../../services/getPhotosService';

export const getPhotosAction = createAsyncThunk(GET_PHOTOS, async () => {
  const response = await getPhotos();
  return response;
});

export const getNextPageAction = createAsyncThunk(
  GET_NEXT,
  async (_, thunkAPI) => {
    const currentPage = await thunkAPI.getState();
    const response = await getPhotos(currentPage.photos.page);
    return response;
  },
);

export const incrementPage = createAction(INCREMENT);
