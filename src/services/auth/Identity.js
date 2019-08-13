import Session from "./Session";
import { PermissionsInterface } from "./Permission";
import { JSONSerialize } from "./Serialize";

export default class Identity {

    static identityInstance = null;

    static getIdentity() {
        return Session.getSession();
    }

    static isGuest() {
        return Session.isGuest()
    }

    static getAccessToken() {
        return Identity.getIdentity().accessToken;
    }

    static getUser() {
        if (Identity.identityInstance !== null && Identity.identityInstance instanceof IdentityInterface) {
            return Identity.identityInstance;
        }

        return Identity.identityInstance = new IdentityInterface(JSONSerialize.unpack(Identity.getIdentity().user));
    }

    static login = (newSession) => {
        // Add Event before login

        if (Session.isSessionExist()) {
            Session.flushSession();
        }

        Session.setSession({
            user: JSONSerialize.pack(newSession.user),
            accessToken: newSession.token
        });

        // Add Event after login
    };

    static logout = () => {
        // Add Event before logout

        Session.flushSession();
        Identity.identityInstance = null;

        // Add Event after login
    };

    static setPermissions = (permissions) => {
        Identity.getUser().setPermissions(permissions);
    };

    static getPermissions = () => {
        return Identity.getUser().getPermissions();
    };

    static can = (permission) => {
        return Identity.getUser().getPermissionInstance().can(permission);
    }
}

class IdentityInterface {
    constructor(userProps, options) {
        let defaultOptions = {
            serializer: JSONSerialize,
            ...options
        };

        this.permissionInstance = new PermissionsInterface();

        this.userProps = userProps;
        this.serializer = defaultOptions.serializer;
    }

    field = (property) => {
        if (!this.availableProps().includes(property)) {
            return false;
        }

        return this.userProps[property];
    };

    availableProps = () => {
        return [
            'username', 'email', 'avatar'
        ];
    };

    getPermissionInstance = () => {
        if (this.permissionInstance !== null && this.permissionInstance instanceof PermissionsInterface) {
            return this.permissionInstance;
        }

        return null;
    };

    setPermissions = (permissions) => {
        this.getPermissionInstance().set(permissions);
    };

    getPermissions = () => {
        return this.getPermissionInstance().get();
    };
}