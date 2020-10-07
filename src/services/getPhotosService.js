import {GET_PHOTOS_URL} from '../constants/urls';

const getPhotos = async (page) => {
  const uri = page ? GET_PHOTOS_URL + '&page=' + page : GET_PHOTOS_URL;
  const result = await fetch(uri);
  return result.json();
};

export default getPhotos;
