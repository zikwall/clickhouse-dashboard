import Identity from "../auth/Identity";
import {API_DOMAIN} from "../../constants";


export const apiFetch = (url, options) => {

    let headers = {
        'Accept': "application/json",
        "Content-Type": "application/json",
    };

    if (!Identity.isGuest()) {
        headers = {...headers, ...{"Authorization": getAuthorizationHeader()}}
    }

    return fetch(apiUrl(url), {
        headers: headers,
        ...options
    })
        .then(isSuccess)
        .then(response => response.json());
};

export const apiUrl = (url) => {
    return API_DOMAIN + url;
};

export const isSuccess = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    let error = new Error(response.statusText);
    error.response = response;
    throw error;
};

export const getAuthorizationHeader = () => {
    return 'Bearer ' + Identity.getAccessToken();
};
