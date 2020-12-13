import { combineReducers } from 'redux';
import favorite from './favorite/favorite.reducer';
import commentsReducer from './comments/comments.reducer';

const rootReducer = combineReducers({
    favorite,
    commentsReducer,
});

export default rootReducer;
