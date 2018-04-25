// @flow

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';

// Actions
import { LOGOUT_SUCCESS } from 'services/Authentication/actions';

// Services
import languageProviderReducer from 'services/Language/reducer';
import authenticationServiceReducer from 'services/Authentication/reducer';

// Untils
import { clearCurrentTabsFromLocalStorage } from 'utils';

// Initial routing state
const routeInitialState = fromJS({
    location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state.merge({
                location: action.payload,
            });
        default:
            return state;
    }
}

const appReducer = combineReducers({
    language: languageProviderReducer,
    route: routeReducer,
    auth: authenticationServiceReducer,
    // Insert reducers here
});

const rootReducer = (state, action) => {
    // App state to be reset to initial state upon logout, this avoids the case of a subsequent user in the same machine having access to the state of the previous
    if (action.type === LOGOUT_SUCCESS) {
        // eslint-disable-next-line no-undefined
        state = undefined;
        // On Successful logout, clear currentTabs from LocalStorage
        clearCurrentTabsFromLocalStorage();
    }

    return appReducer(state, action);
};

export default rootReducer;
