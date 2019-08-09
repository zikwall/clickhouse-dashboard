import React from 'react';
import Session from "./Session";

export default class Identity {

    static identityInstance = null;
    static permissions = [];

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
        if (Identity.identityInstance !== null && Identity.identityInstance instanceof IdenityInterface) {
            return Identity.identityInstance;
        }

        return Identity.identityInstance = new IdenityInterface(JSONSerizlizer.unpack(Identity.getIdentity().user));
    }

    static login = (newSession) => {
        Session.setSession({
            user: JSON.stringify(newSession.user),
            accessToken: newSession.token
        });
    };

    static logout = () => {
        Session.flushSession();
        Identity.identityInstance = null;
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

/**
 * todo Создать общий интерфес для хранения данных с возможностью выбора провайдера для сериализации данных
 *
 *  - Identity
 *  - SessionStorange
 */
class IdentitySerialize {
    constructor(serializeInterface) {
        this.serializeInterface = serializeInterface;
    }

    getSerializer() {
        return this.serializeInterface;
    }
}

class JSONSerizlizer {
    static unpack(data) {
        return JSON.parse(data);
    }

    static pack(data) {
        return JSON.stringify(data);
    }
}

class PermissionsInterface {
    constructor() {
        this.permissions = [];
    }

    get = () => {
        return this.permissions;
    };

    set = (permissions) => {
        if (!Array.isArray(permissions)) {
            this.permissions.append(permissions);
        } else {
            this.permissions = permissions;
        }
    };

    can = (permission) => {
        return this.permissions.includes(permission);
    };
}

class IdenityInterface {
    constructor(userProps, options) {
        let defaultOptions = {
            serializer: JSONSerizlizer,
            ...options
        };

        this.permissionInstance = null;

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

        return this.permissionInstance = new PermissionsInterface();
    };

    setPermissions = (permissions) => {
        this.getPermissionInstance().set(permissions);
    };

    getPermissions = () => {
        return this.getPermissionInstance().get();
    };
}