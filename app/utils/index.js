// @flow

import { decamelize } from 'humps';
import moment from 'moment';
import { List } from 'immutable';

import { dateFormat, characterLimit } from 'utils/constants';

// Converts bytes to friendly format
export const formatBytes = (a, b) => {
    if (a === 0) {
        return '0 Bytes';
    }
    const c = 1024;
    const d = b || 2;
    const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const f = Math.floor(Math.log(a) / Math.log(c));
    return `${parseFloat((a / Math.pow(c, f)).toFixed(d))} ${e[f]}`;
};

// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
export const isValidDate = (dateString: string, dateStringFormat: string = 'mm/dd/yyyy') =>
    moment(dateString, dateStringFormat).isValid();

// export const isValidDate = (dateString: string) => {
//     // First check for the pattern
//     if (!(/^\d{1,2}\/\d{1,2}\/\d{4}$/).test(dateString)) {
//         return false;
//     }

//     // Parse the date parts to integers
//     const parts = dateString.split('/');
//     const day = parseInt(parts[1], 10);
//     const month = parseInt(parts[0], 10);
//     const year = parseInt(parts[2], 10);

//     // Check the ranges of month and year
//     if (year < 1000 || year > 3000 || month === 0 || month > 12) {
//         return false;
//     }

//     const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     // Adjust for leap years
//     if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
//         monthLength[1] = 29;
//     }

//     // Check the range of the day
//     return day > 0 && day <= monthLength[month - 1];
// };

// Convert mysql datetime to frontend date format
export const formatDate = (dateString: string) =>
    moment(dateString, 'YYYY-MM-DD HH:mm:ss').format(dateFormat);

export const createFormData = (data: Object) => {
    if (data) {
        // Remove empty fields. This matches what RequestHelper was doing on the backend.
        const newData = data
            .filter(
                (value) =>
                    (value && ((List.isList(value) && value.size !== 0) || !List.isList(value))) ||
                    value === 0 ||
                    value === false ||
                    value === ''
            )
            .toJS();

        // Create FormData
        const formData = new FormData();
        for (const topKey in newData) {
            if (newData.hasOwnProperty(topKey)) {
                const value = newData[topKey];
                if (Array.isArray(value) && value.length > 0) {
                    // Array of objects
                    value.forEach((val: Object, i: number) => {
                        // Append string/number
                        if (typeof val === 'string' || typeof val === 'number') {
                            formData.append(decamelize(`${topKey}[${i}]`), val);
                        }
                        // Loop over object content
                        if (typeof val === 'object') {
                            Object.keys(val).forEach((key: string) => {
                                if (val[key]) {
                                    formData.append(
                                        decamelize(`${topKey}[${i}][${key}]`),
                                        val[key]
                                    );
                                }
                            });
                        }
                    });
                } else {
                    formData.append(decamelize(topKey), value);
                }
            }
        }
        // Inspect formData
        // for (const pair of formData.entries()) {
        //     console.log('createFormData', pair);
        // }
        return formData;
    }
};

export const limitString = (string: string, length: number = characterLimit) => {
    const append = string.length > length ? ' ...' : '';
    return `${string.substring(0, length)}${append}`;
};

export const queryBuilder = (obj: Object) => {
    const esc = encodeURIComponent;
    // Build query
    const query = Object.keys(obj)
        .filter((k) => obj[k] !== null)
        .map((k) => `${esc(k)}=${esc(obj[k])}`)
        .join('&');
    return query;
};

export const getRouteFromLocation = (location: Object) => {
    // Pass location object from props
    const pathname = location && location.pathname;
    // Grab pathname from location, remove leading '/' via .replace()
    // Split string via '/'
    const parts = pathname && pathname.replace(/^\/+/g, '').split('/');
    // Return index 0 of parts, else null
    return (parts && parts[0]) || null;
};

export const getCurrentTabFromLocalStorage = (route: string) => {
    // Build keyName from route
    const keyName = route && `currentTab:${route}`;
    // Return keyValue, else null
    return (route && localStorage.getItem(keyName)) || null;
};

export const saveCurrentTabToLocalStorage = (route: string, keyValue: string | number) => {
    // Build keyName from route
    const keyName = route && `currentTab:${route}`;
    if (keyName && keyValue) {
        localStorage.setItem(keyName, keyValue.toString());
    }
};

export const clearCurrentTabsFromLocalStorage = () => {
    // Set array to hold keyNames
    const array = [];
    // Iterate over localStorage and insert the keyNames that meet the condition into array
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage && localStorage.key(i);
        if (key && key.indexOf('currentTab:') !== -1) {
            array.push(localStorage.key(i));
        }
    }
    // Iterate over array and remove the items by keyName
    for (let i = 0; i < array.length; i++) {
        const key = array[i];
        if (key) {
            localStorage.removeItem(key);
        }
    }
};
