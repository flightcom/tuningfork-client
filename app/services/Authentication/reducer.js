// @flow

/*
 *
 * Authentication reducer
 *
 */

import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';
import {
    USER_AUTHENTICATION_SUCCESS,
    USER_AUTHENTICATION_FAIL,
    WHOAMI_SUCCESS,
    WHOAMI_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FAIL,
    PASSWORD_CREATE_REQUEST_SUCCESS,
    PASSWORD_CREATE_REQUEST_FAIL,
    PASSWORD_CREATE_SUCCESS,
    PASSWORD_CREATE_FAIL,
    PASSWORD_RESET_REQUEST_SUCCESS,
    PASSWORD_RESET_REQUEST_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
} from './actions';

import type { GenericActionType } from 'types';

const initialState = fromJS({
    user: null,
    passwordResetMessage: null,
    errors: {},
});

function storeApiTokenAndPopulateStateWithUser(state, action: GenericActionType) {
    const { payload: { user } } = action;

    localStorage.setItem('api_token', user.token);

    delete user.token;

    return state.set('user', fromJS(user)).set('errors', fromJS({}));
}

function authenticationServiceReducer(state = initialState, action: GenericActionType) {
    switch (action.type) {
        case USER_AUTHENTICATION_SUCCESS: {
            return storeApiTokenAndPopulateStateWithUser(state, action);
        }
        case USER_REGISTRATION_SUCCESS: {
            return storeApiTokenAndPopulateStateWithUser(state, action);
        }
        case USER_AUTHENTICATION_FAIL:
            return state.set('errors', fromJS(action.payload.errors));
        case WHOAMI_FAIL:
            return state.set('user', null).set('errors', action.payload.errors);
        case USER_REGISTRATION_FAIL:
            return state.set('errors', fromJS(action.payload.errors));
        case WHOAMI_SUCCESS:
            return state.set('user', fromJS(action.payload.user)).set('errors', fromJS({}));
        case LOGOUT_SUCCESS:
            localStorage.removeItem('api_token');

            return state.set('user', null).set('errors', fromJS({}));
        case LOGOUT_FAIL:
            localStorage.removeItem('api_token');

            return state.set('user', null).set('errors', fromJS(action.payload.errors));
        case PASSWORD_CREATE_REQUEST_SUCCESS:
        case PASSWORD_CREATE_SUCCESS:
            return state
                .set('passwordCreateMessage', action.payload.message)
                .set('errors', fromJS({}));
        case PASSWORD_CREATE_REQUEST_FAIL:
        case PASSWORD_CREATE_FAIL:
            return state.set('passwordCreateMessage', null).set('errors', fromJS(action.payload.errors));
        case PASSWORD_RESET_REQUEST_SUCCESS:
        case PASSWORD_RESET_SUCCESS:
            return state
                .set('passwordResetMessage', action.payload.message)
                .set('errors', fromJS({}));
        case PASSWORD_RESET_REQUEST_FAIL:
        case PASSWORD_RESET_FAIL:
            return state.set('passwordResetMessage', null).set('errors', fromJS(action.payload.errors));
        case LOCATION_CHANGE:
            if (state.get('errors') && state.get('errors').size !== 0) {
                return state.set('errors', fromJS({}));
            }

            return state;
        default:
            return state;
    }
}

export default authenticationServiceReducer;
