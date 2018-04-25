// @flow

// react-final-form related utility functions

/**
 * react-final-form - Validation - Validation method for a required field
 */
// eslint-disable-next-line no-undefined
const required = (value: any) =>
    value ? undefined : 'components.ErrorMessage.formFieldValidationRequired';

/**
 * react-final-form - Validation - Validation method for checking that a pasword matches its confirmation
 */
// eslint-disable-next-line no-undefined
const passwordConfirmationMatch = (value: any, values: any) =>
    (values.newPassword &&
        values.newPasswordConfirmation &&
        values.newPassword === values.newPasswordConfirmation) ||
    (!values.newPassword &&
        (!values.newPasswordConfirmation || typeof values.newPasswordConfirmation == undefined))
        ? undefined
        : 'components.ErrorMessage.formFieldValidationPasswordConfirmationMatch';

/**
 * react-final-form - Validation - Validation method for enforcing a numeric value
 */
// eslint-disable-next-line no-undefined
const mustBeNumber = (value: any) =>
    isNaN(value) ? 'components.ErrorMessage.formFieldValidationMustBeANumber' : undefined;

/**
 * react-final-form - Validation - Validation method for enforcing a minimum for numeric value
 */
// eslint-disable-next-line no-undefined
const minValue = (min: number) => (value: any) =>
    isNaN(value) || value >= min
        ? undefined
        : 'components.ErrorMessage.formFieldValidationMinValue';

/**
 * react-final-form - Validation - Method for allowing several validations on the same field
 */
// eslint-disable-next-line no-undefined
const composeValidators = (...validators) => (value: any) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export { required, passwordConfirmationMatch, mustBeNumber, minValue, composeValidators };
