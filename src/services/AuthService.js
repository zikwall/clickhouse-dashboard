import decode from "jwt-decode";
import UserService from "./UserService";

export default class AuthService {

    accessTokenKey = 'access_token';
    authorizationDomain = "http://account.limehd.local";

    login = (username, password, rememberMe = true) => {
        return this.fetch('/api/v1/auth/login', {
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

        return fetch(this.getAuthorizationUrl(url), {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json());
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
