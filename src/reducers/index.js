import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';
import { categoriesReducer } from './categories';
import { userReducer, usersReducer } from './user';

export const reducers = combineReducers({
    users: usersReducer,
    user: userReducer,
    category: categoriesReducer,
    loadingBar: loadingBarReducer

})