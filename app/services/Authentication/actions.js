// @flow

import type { ErrorsType } from './types';

import type { GenericActionType, UserType } from 'types';

export const USER_AUTHENTICATION_SUCCESS =
    'app/services/Authentication/USER_AUTHENTICATION_SUCCESS';
export const USER_AUTHENTICATION_FAIL = 'app/services/Authentication/USER_AUTHENTICATION_FAIL';

export const WHOAMI_SUCCESS = 'app/services/Authentication/WHOAMI_SUCCESS';
export const WHOAMI_FAIL = 'app/services/Authentication/WHOAMI_FAIL';

export const LOGOUT_SUCCESS = 'app/services/Authentication/LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'app/services/Authentication/LOGOUT_FAIL';

export const USER_REGISTRATION_SUCCESS = 'app/services/Authentication/USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_FAIL = 'app/services/Authentication/USER_REGISTRATION_FAIL';

export const PASSWORD_CREATE_REQUEST_SUCCESS =
    'app/services/Authentication/PASSWORD_CREATE_REQUEST_SUCCESS';
export const PASSWORD_CREATE_REQUEST_FAIL =
    'app/services/Authentication/PASSWORD_CREATE_REQUEST_FAIL';

export const PASSWORD_CREATE_SUCCESS = 'app/services/Authentication/PASSWORD_CREATE_SUCCESS';
export const PASSWORD_CREATE_FAIL = 'app/services/Authentication/PASSWORD_CREATE_FAIL';

export const PASSWORD_RESET_REQUEST_SUCCESS =
    'app/services/Authentication/PASSWORD_RESET_REQUEST_SUCCESS';
export const PASSWORD_RESET_REQUEST_FAIL =
    'app/services/Authentication/PASSWORD_RESET_REQUEST_FAIL';

export const PASSWORD_RESET_SUCCESS = 'app/services/Authentication/PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAIL = 'app/services/Authentication/PASSWORD_RESET_FAIL';

export const receivedAuthenticationSuccess = (user: UserType): GenericActionType => ({
    type: USER_AUTHENTICATION_SUCCESS,
    payload: { user },
});

export const receivedAuthenticationFail = (errors: ErrorsType): GenericActionType => ({
    type: USER_AUTHENTICATION_FAIL,
    payload: { errors },
});

export const receivedWhoamiSuccess = (user: UserType): GenericActionType => ({
    type: WHOAMI_SUCCESS,
    payload: { user },
});

export const receivedWhoamiFail = (errors: ErrorsType): GenericActionType => ({
    type: WHOAMI_FAIL,
    payload: { errors },
});

export const receivedLogoutSuccess = (response: Object): GenericActionType => ({
    type: LOGOUT_SUCCESS,
    payload: { response },
});

export const receivedLogoutFail = (errors: ErrorsType): GenericActionType => ({
    type: LOGOUT_FAIL,
    payload: { errors },
});

export const receivedRegistrationSuccess = (user: UserType): GenericActionType => ({
    type: USER_REGISTRATION_SUCCESS,
    payload: { user },
});

export const receivedRegistrationFail = (errors: ErrorsType): GenericActionType => ({
    type: USER_REGISTRATION_FAIL,
    payload: { errors },
});

export const receivedPasswordCreateRequestSuccess = (message: string): GenericActionType => ({
    type: PASSWORD_CREATE_REQUEST_SUCCESS,
    payload: { message },
});

export const receivedPasswordCreateRequestFail = (errors: ErrorsType): GenericActionType => ({
    type: PASSWORD_CREATE_REQUEST_FAIL,
    payload: { errors },
});

export const receivedPasswordCreateSuccess = (message: string): GenericActionType => ({
    type: PASSWORD_CREATE_SUCCESS,
    payload: { message },
});

export const receivedPasswordCreateFail = (errors: ErrorsType): GenericActionType => ({
    type: PASSWORD_CREATE_FAIL,
    payload: { errors },
});

export const receivedPasswordResetRequestSuccess = (message: string): GenericActionType => ({
    type: PASSWORD_RESET_REQUEST_SUCCESS,
    payload: { message },
});

export const receivedPasswordResetRequestFail = (errors: ErrorsType): GenericActionType => ({
    type: PASSWORD_RESET_REQUEST_FAIL,
    payload: { errors },
});

export const receivedPasswordResetSuccess = (message: string): GenericActionType => ({
    type: PASSWORD_RESET_SUCCESS,
    payload: { message },
});

export const receivedPasswordResetFail = (errors: ErrorsType): GenericActionType => ({
    type: PASSWORD_RESET_FAIL,
    payload: { errors },
});
