import {combineReducers} from 'redux';

import photoReducer from '../reducers/photoReducer';

const rootReducer = combineReducers({
  photos: photoReducer,
});

export default rootReducer;
