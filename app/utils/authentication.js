// @flow

// Authentication related utility functions

/**
 * Returns true if the user is logged in (jwt token present) and false otherwise
 */
const isAuthenticated = () =>
    localStorage.getItem('api_token') && localStorage.getItem('api_token') !== 'undefined';

const deAuthenticate = () => localStorage.removeItem('api_token');

export { deAuthenticate, isAuthenticated };
