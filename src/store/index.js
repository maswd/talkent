import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import { getAllCategories } from '../actions/categories';
// import { getAllUsers } from '../actions/user';

const compose = composeWithDevTools({});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'loadingBar', 'category' ]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(persistedReducer, compose(applyMiddleware(thunk, loadingBarMiddleware(), logger)));
// export let store = createStore(persistedReducer, compose(applyMiddleware(thunk, loadingBarMiddleware())))
export let persistor = persistStore(store); // subscribe
// store.dispatch(getAllCategories());
// store.dispatch(getAllUsers())
// store.subscribe(() => console.log(store.getState()))
