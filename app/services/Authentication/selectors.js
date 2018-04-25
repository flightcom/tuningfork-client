// @flow

import { createSelector } from 'reselect';

/**
 * Direct selector to the auth state domain
 */
const selectAuthState = () => (state) => state.get('auth');

/**
 * Select the auth state
 */

const selectUser = () => createSelector(selectAuthState(), (substate) => substate.get('user'));

const selectPasswordResetMessage = () => createSelector(
    selectAuthState(), (substate) => substate.get('passwordResetMessage')
);

const selectPasswordCreateMessage = () => createSelector(
    selectAuthState(), (substate) => substate.get('passwordCreateMessage')
);

const selectErrors = () => createSelector(selectAuthState(), (substate) => substate.get('errors'));

export {
    selectAuthState,
    selectUser,
    selectPasswordResetMessage,
    selectPasswordCreateMessage,
    selectErrors,
};
