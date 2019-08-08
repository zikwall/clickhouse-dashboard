import React from 'react';
import Session from "./Session";

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
        if (Identity.identityInstance === null && Identity.identityInstance instanceof IdenityInterface) {
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

class IdenityInterface {

    constructor(userProps, options) {
        let defaultOptions = {
            serializer: JSONSerizlizer,
            ...options
        };

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
    }
}