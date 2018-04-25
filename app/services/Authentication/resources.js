// @flow

import request from 'request';

import type { UserType } from 'types';

/**
 * Authenticates a user if the credentials are correct
 *
 * @param {string} email
 * @param {string} password
 */
export function authenticate(email: string, password: string): Promise<UserType> {
    return request('login', {
        method: 'POST',
        data: {
            email,
            password,
        },
    });
}

/**
 * Checks the user Authentication token and returns the user
 */
export function retrieveAuthenticatedUser(): Promise<UserType> {
    return request('whoami', {
        method: 'GET',
    });
}

/**
 * Logs a user out by sending a request to invalidate the token
 */
export function logout(): Promise<Object> {
    return request('logout', {
        method: 'GET',
    });
}

/**
 * Registers a new user with the given information
 *
 * @param {string} email
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} password
 * @param {string} passwordConfirmation
 */
export function register(
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirmation: string
): Promise<UserType> {
    return request('register', {
        method: 'POST',
        data: {
            email,
            firstName,
            lastName,
            password,
            passwordConfirmation,
        },
    });
}

/**
 * Sends a password reset request
 *
 * @param {string} email
 */
export function passwordResetRequest(email: string, locale: string): Promise<Object> {
    return request('password/email', {
        method: 'POST',
        data: {
            email,
            locale,
        },
    });
}

/**
 * Sends a password create request
 *
 * @param {string} email
 */
export function passwordCreateRequest(email: string, locale: string): Promise<Object> {
    return request('password/create/email', {
        method: 'POST',
        data: {
            email,
            locale,
        },
    });
}

/**
 * Resets a user password
 *
 * @param {string} email
 * @param {string} token
 * @param {string} password
 * @param {string} passwordConfirmation
 */
export function passwordReset(
    email: string,
    token: string,
    password: string,
    passwordConfirmation: string
): Promise<Object> {
    return request('password/reset', {
        method: 'POST',
        data: {
            email,
            token,
            password,
            passwordConfirmation,
        },
    });
}
