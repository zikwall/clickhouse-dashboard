import decode from "jwt-decode";
import Identity from "./Identity";
import { apiFetch } from "../api/Api";
import { History } from "../../components/history";

export default class AuthService {

    login(username, password, rememberMe = true) {
        return apiFetch('/api/v1/auth/login', {
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
        }, false).then((response) => {

            /**
             * todo создать автопродлевание жизни токена при remember me
             */
            if(rememberMe) {
                Identity.login(response);

                if (History.hasReturned()) {
                    alert(11);
                    History.redirectToRemember();
                }
            }

            return Promise.resolve(response);
        });
    }

    permissions() {
        return apiFetch('/api/v1/auth/access', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Identity.getAccessToken()
            },
        });
    }

    getConfirm = () => {
        let answer = decode(Identity.getAccessToken());
        return answer;
    };
}