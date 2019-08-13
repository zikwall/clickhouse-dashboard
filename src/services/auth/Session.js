import Helper from "./Helper";
import decode from "jwt-decode";

class SessionStorageInterface {}
class SessionNativeLocalStorage extends SessionStorageInterface {}
class SessionStorage extends SessionStorageInterface {
    sessionData = {};

    constructor(data) {
        super();
        this.sessionData = data;

        this.everyRequired().then(() => {
            this.initialSession();
        });
    }

    requiredSessionItems = () => {
        return [
            Helper.accessTokenKey, Helper.userStorangeKey
        ];
    };

    everyRequired = async () => {
        for await (let sessionItem of this.requiredSessionItems()) {
            if (!this.sessionData.hasOwnProperty(sessionItem)) {
                throw new Error('Session does\'t contain required properties.');
            }
        }
    };

    initialSession = async () => {
        for (let item in this.sessionData) {
            if (!this.sessionData.hasOwnProperty(item)) {
                continue;
            }
            await this.set(item, this.sessionData[item]);
        }
    };

    destroy = async () => {
        for (let item in this.sessionData) {
            await this.remove(item);
        }
    };

    static getStorage = () => {
        return localStorage;
    };

    static get = (item) => {
        return this.getStorage().getItem(item);
    };

    static set = (item, value) => {
        this.getStorage().setItem(item, value);
    };

    static remove = (item) => {
        this.getStorage().removeItem(item);
    }
}


export default class Session {

    static instance = null;

    static isGuest = () => {
        return !Session.isLogged();
    };

    static isLogged = () => {
        const token = SessionStorage.get(Helper.accessTokenKey);
        return !!token && !Session.isSessionExpired(token);
    };

    static setSession = (session) => {
        SessionStorage.set(Helper.userStorangeKey, session.user);
        SessionStorage.set(Helper.accessTokenKey, session.accessToken);

        /*Session.instance = new SessionStorage({
            user: session.user,
            accessToken: session.accessToken
        });*/
    };

    static getSession = () => {
        return {
            user: SessionStorage.get(Helper.userStorangeKey),
            accessToken: SessionStorage.get(Helper.accessTokenKey)
        };
    };

    static flushSession = () => {
        SessionStorage.remove(Helper.accessTokenKey);
        SessionStorage.remove(Helper.userStorangeKey);
    };

    static isSessionExist = () => {
        return typeof Session.getSession().accessToken !== 'undefined';
    };

    static isSessionExpired = (accessToken) => {
        try {
            const decoded = decode(accessToken);

            return (decoded.exp < Date.now() / 1000);
        } catch (err) {
            console.log('Expired token! Logout...');
            return false;
        }
    };
}