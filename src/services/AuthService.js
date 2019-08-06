import decode from "jwt-decode";
import UserService from "./UserService";

export default class AuthService {

    accessTokenKey = 'access_token';
    authorizationDomain = "http://clh.limehd.tv";

    login = (username, password, rememberMe = true) => {
        return this.authFetch('/api/v1/auth/login', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            /**
             * TODO Тут кака-нибудь логика для Remember Me
             */
            if(rememberMe) {
                this.setToken(res.token);
                UserService.setUser(res.user);
            }
            return Promise.resolve(res);
        });
    };

    permissions = () => {
        return this.authFetch('/api/v1/auth/permissions', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        }).then(res => {
            return res;
        });
    };

    logout = () => {
        localStorage.removeItem(this.accessTokenKey);
        UserService.removeUser();
    };

    loggedIn = () => {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    };

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            console.log('Expired token! Logout...');
            return false;
        }
    };

    getAuthorizationUrl = (url) => {
        return this.authorizationDomain + url;
    };

    setToken = (idToken) => {
        localStorage.setItem(this.accessTokenKey, idToken);
    };

    getToken = () => {
        return localStorage.getItem(this.accessTokenKey);
    };

    getConfirm = () => {
        /*if (this.getToken() === null) {
            return false
        }*/

        let answer = decode(this.getToken());
        console.log("Recieved answer!");
        return answer;
    };

    fetch = (url, options) => {
        const headers = {
            'Accept': "application/json",
            "Content-Type": "application/json"
        };

        if (this.loggedIn()) {
            headers["Authorization"] = 'Bearer ' + this.getToken();
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json());
    };

    authFetch = (url, options) => {
        return this.fetch(this.getAuthorizationUrl(url), options);
    };

    _checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    };
}
