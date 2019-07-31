import decode from "jwt-decode";

export default class AuthService {
    constructor(domain) {
        this.domain = domain || "http://clh.limehd.tv";
    }

    login = (username, password, rememberMe = true) => {
        return this.fetch('/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            if(rememberMe) {
                this.setToken(res.token); // Setting the token in localStorage
            }
            return Promise.resolve(res);
        });
    };

    loggedIn = () => {
        const token = this.getToken(); // Getting token from localstorage
        return !!token && !this.isTokenExpired(token); // handwaiving here
    };

    isTokenExpired = token => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            console.log("expired check failed! Line 42: AuthService.js");
            return false;
        }
    };

    getUrl = (url) => {
        return this.domain + url;
    }

    setToken = idToken => {
        localStorage.setItem("id_token", idToken);
    };

    getToken = () => {
        return localStorage.getItem("id_token");
    };

    logout = () => {
        localStorage.removeItem("id_token");
    };

    getConfirm = () => {
        let answer = decode(this.getToken());
        console.log("Recieved answer!");
        return answer;
    };

    fetch = (url, options) => {
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        };

        if (this.loggedIn()) {
            headers["Authorization"] = this.getToken();
        }

        return fetch(this.getUrl(url), {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json());
    };

    _checkStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    };
}
