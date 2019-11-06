import Identity from "../auth/Identity";
import { API_DOMAIN } from "../../constants";
import {
    UnauthorizedException,
    ForbiddenHttpException,
    InternalServerErrorException,
    NotFoundHttpException,
    Exception
} from "../../exceptions";
import { History } from "../../components/history";

export const apiFetch = (url, options, useAuth = true) => {
    let headers = {};

    if (useAuth && Identity.isGuest()) {
        History.rememberAndRedirect(window.location.pathname, '/auth/login');
    }

    if (!Identity.isGuest()) {
        headers = {...headers, ...{"Authorization": getAuthorizationHeader()}}
    }

    return pureFetch(apiUrl(url), options, headers);
};

export const pureFetch = (url, options, headers) => {
    headers = {...headers, ...{
        'Accept': "application/json",
        "Content-Type": "application/json",
    }};

    return fetch(url, {
        headers: headers,
        ...options
    })
        .then(handleResponse)
        .then(response => response.json());
};

export const handleAuntification = (response) => {
    try {
        return response;
    } catch (e) {
        if (e instanceof UnauthorizedException) {
            this.props.router.push('/foo')
        }
    }
};

export const handleResponse = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    if (response.status === 401) {
        throw (new UnauthorizedException(response));
    }

    if (response.status === 403) {
        throw (new ForbiddenHttpException(response));
    }

    if (response.status === 404) {
        throw (new NotFoundHttpException(response));
    }

    if (response.status === 500) {
        throw (new InternalServerErrorException(response));
    }

    throw (new Exception('Server request execution error.'));
};

export const apiUrl = (url) => {
    return API_DOMAIN + url;
};

export const getAuthorizationHeader = () => {
    return 'Bearer ' + Identity.getAccessToken();
};
