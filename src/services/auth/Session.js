import Helper from "./Helper";
import decode from "jwt-decode";

class SessionStorange {

    /**
     * Storage Interface
     *
     * @returns {Storage}
     */
    static getStorange = () => {
        return localStorage;
    };

    static get = (item) => {
        return this.getStorange().getItem(item);
    };

    static set = (item, value) => {
        this.getStorange().setItem(item, value);
    };

    static remove = (item) => {
        this.getStorange().removeItem(item);
    }
}

export default class Session {

    static isGuest = () => {
        return !Session.isLogged();
    };

    static isLogged = () => {
        const token = SessionStorange.get(Helper.accessTokenKey);
        return !!token && !Session.isSessionExpired(token);
    };

    static setSession = (session) => {
        SessionStorange.set(Helper.userStorangeKey, session.user);
        SessionStorange.set(Helper.accessTokenKey, session.accessToken);
    };

    static getSession = () => {
        return {
            user: SessionStorange.get(Helper.userStorangeKey),
            accessToken: SessionStorange.get(Helper.accessTokenKey)
        };
    };

    static flushSession = () => {
        SessionStorange.remove(Helper.accessTokenKey);
        SessionStorange.remove(Helper.userStorangeKey);
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