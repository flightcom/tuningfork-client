// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

const configureStore = (initialState = {}, history) => {
    // List middleware here
    let middlewares = [];

    if (__PROD__) {
        middlewares = [routerMiddleware(history), thunk];
    } else {
        middlewares = [routerMiddleware(history), thunk];
    }

    // Add support for Redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        fromJS(initialState),
        composeEnhancers(applyMiddleware(...middlewares))
    );

    return store;
};

export default configureStore;
