import decode from "jwt-decode";
import Identity from "./Identity";
import Helper from "./Helper";

export default class AuthService {

    login(username, password, rememberMe = true) {
        return this.apiFetch('/api/v1/auth/login', {
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
        }).then((response) => {

            /**
             * todo создать автопродлевание жизни токена при remember me
             */
            if(rememberMe) {
                Identity.login(response)
            }

            return Promise.resolve(response);
        });
    }

    permissions() {
        return this.apiFetch('/api/v1/auth/access', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Identity.getAccessToken()
            },
        });
    }

    apiFetch(url, options) {
        const defaultHeaders = {
            'Accept': "application/json",
            "Content-Type": "application/json"
        };

        if (!Identity.isGuest()) {
            defaultHeaders["Authorization"] = 'Bearer ' + Identity.getAccessToken();
        }

        return fetch(this.apiUrl(url), {
            defaultHeaders,
            ...options
        })
            .then(this.isSuccess)
            .then(response => response.json());
    }

    isSuccess = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }

        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    };

    getConfirm = () => {
        let answer = decode(Identity.getAccessToken());
        console.log("Recieved answer!");
        return answer;
    };

    apiUrl = (url) => {
        return Helper.authorizationDomain + url;
    };
}