// @flow

import {
    receivedAuthenticationSuccess,
    receivedAuthenticationFail,
    receivedWhoamiSuccess,
    receivedWhoamiFail,
    receivedLogoutSuccess,
    receivedLogoutFail,
    receivedRegistrationSuccess,
    receivedRegistrationFail,
    receivedPasswordCreateRequestSuccess,
    receivedPasswordCreateRequestFail,
    receivedPasswordCreateSuccess,
    receivedPasswordCreateFail,
    receivedPasswordResetRequestSuccess,
    receivedPasswordResetRequestFail,
    receivedPasswordResetSuccess,
    receivedPasswordResetFail,
} from './actions';

import {
    authenticate,
    retrieveAuthenticatedUser,
    logout,
    register,
    passwordCreateRequest,
    passwordResetRequest,
    passwordReset,
} from 'services/Authentication/resources';

import { replace } from 'react-router-redux';

import { deAuthenticate } from 'utils/authentication';
import type { ReduxDispatch, ResponseErrorType } from 'types';

/**
 * Authenticates a user
 */
export type AuthenticateUserType = (email: string, password: string) => void;
export const authenticateUser = (email: string, password: string) => (dispatch: ReduxDispatch) =>
    authenticate(email, password)
        .then((response: Object) => {
            dispatch(receivedAuthenticationSuccess(response.data));
            dispatch(replace('/'));
        })
        .catch((response: ResponseErrorType) => {
            dispatch(receivedAuthenticationFail(response.data.errors));
        });

/**
 * Checks the user authentication token
 */
export type WhoamiType = () => void;
export const whoami = () => (dispatch: ReduxDispatch) =>
    retrieveAuthenticatedUser()
        .then((response: Object) => {
            dispatch(receivedWhoamiSuccess(response.data));
        })
        .catch((response) => {
            deAuthenticate();
            dispatch(receivedWhoamiFail(response.data.errors));
            dispatch(replace('/'));
        });

/**
 * Invalidates a user token
 */
export type LogoutUserType = () => void;
export const logoutUser = () => (dispatch: ReduxDispatch) =>
    logout()
        .then((response: Object) => {
            dispatch(receivedLogoutSuccess(response.data));
            dispatch(replace('/'));
        })
        .catch((response: ResponseErrorType) => {
            dispatch(receivedLogoutFail(response.data.errors));
        });

/**
 * Registers a user
 */
export type RegisterUserType = (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirmation: string
) => void;
export const registerUser = (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirmation: string
) => (dispatch: ReduxDispatch) =>
    register(email, firstName, lastName, password, passwordConfirmation)
        .then((response: Object) => {
            dispatch(receivedRegistrationSuccess(response.data));
            dispatch(replace('/'));
        })
        .catch((response: ResponseErrorType) => {
            dispatch(receivedRegistrationFail(response.data.errors));
        });

/**
 * Sends a password create request
 */
export type UserPasswordCreateRequestType = (email: string, locale: string) => void;
export const userPasswordCreateRequest = (email: string, locale: string) => (
    dispatch: ReduxDispatch
) =>
    passwordCreateRequest(email, locale)
        .then((response: Object) => {
            dispatch(receivedPasswordCreateRequestSuccess(response.data));
        })
        .catch((response: ResponseErrorType) => {
            dispatch(receivedPasswordCreateRequestFail(response.data.errors));
        });

/**
 * Creates the user password
 */
export type UserPasswordCreateType = (
    email: string,
    token: string,
    password: string,
    passwordConfirmation: string
) => void;
export const userPasswordCreate = (
    email: string,
    token: string,
    password: string,
    passwordConfirmation: string
) => (dispatch: ReduxDispatch) =>
    passwordReset(email, token, password, passwordConfirmation)
        .then((response: Object) => {
            dispatch(receivedPasswordCreateSuccess(response.data));
            dispatch(authenticateUser(email, password));
        })
        .catch((response: ResponseErrorType) => {
            dispatch(receivedPasswordCreateFail(response.data.errors));
        });

/**
 * Sends a password reset request
 */
export type UserPasswordResetRequestType = (email: string, locale: string) => void;
export const userPasswordResetRequest = (email: string, locale: string) => (
    dispatch: ReduxDispatch
) =>
    passwordResetRequest(email, locale)
        .then((response: Object) => {
            dispatch(receivedPasswordResetRequestSuccess(response.data));
        })
        .catch((response: ResponseErrorType) => {
            dispatch(receivedPasswordResetRequestFail(response.data.errors));
        });

/**
 * Resets the user password
 */
export type UserPasswordResetType = (
    email: string,
    token: string,
    password: string,
    passwordConfirmation: string
) => void;
export const userPasswordReset = (
    email: string,
    token: string,
    password: string,
    passwordConfirmation: string
) => (dispatch: ReduxDispatch) =>
    passwordReset(email, token, password, passwordConfirmation)
        .then((response: Object) => {
            dispatch(receivedPasswordResetSuccess(response.data));
            dispatch(authenticateUser(email, password));
        })
        .catch((response: ResponseErrorType) => {
            dispatch(receivedPasswordResetFail(response.data.errors));
        });
