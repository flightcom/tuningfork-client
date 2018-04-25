// @flow

import axios from 'axios';
import { API_URL, API_VER } from 'env';
import { camelizeKeys, decamelizeKeys } from 'humps';

/**
 * Requests a URL, returning a promise.
 *
 * Axios by default will reject a promise if it is not between status codes 200-300
 * (This can be modified by implementing the validateStatus method)
 *
 * @param {string} url       The URL we want to request
 * @param {object} [options] The options we want to pass to "fetch"
 * @param {apiVer} [optional] Optional api version (eg. /api/v2/)
 * @param {humps} [optional] Set to false to not camelize/decamelize keys
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(
    url: string,
    options?: { method?: string, data?: Object, headers?: Object } = {
        method: 'GET',
        data: {},
        headers: {
            contentType: 'application/json',
        },
    },
    params?: Object = {},
    apiVer?: string = API_VER,
    humps?: boolean = true,
    returnHumps?: boolean = true
) {
    return axios({
        url: `${API_URL}${apiVer}${url}`,
        method: options.method ? options.method : 'GET',
        data: humps ? decamelizeKeys(options.data) : options.data,
        headers: {
            Accept: 'application/json',
            'Content-Type':
                options.headers && options.headers.contentType
                    ? options.headers.contentType
                    : 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${localStorage.getItem('api_token') || ''}`,
        },
        params,
    })
        .then((response: Object) =>
            Promise.resolve(returnHumps ? camelizeKeys(response) : response)
        )
        .catch((error: Object) => {
            if (error && error.response) {
                error.response = {
                    data: error.response.data,
                    status: error.response.status,
                };
            } else {
                error.response = {
                    message: error.message,
                    stack: error.stack,
                };
            }
            return Promise.reject(returnHumps ? camelizeKeys(error.response) : error.response);
        });
}
