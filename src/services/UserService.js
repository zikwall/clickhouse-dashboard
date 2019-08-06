import React from 'react';

class UserIndentity {
    constructor(user) {
        this.user = user;
    }

    username() {
        return this.user.username;
    }

    email() {
        return this.user.email;
    }
}

export default class UserService extends React.Component {

    static userStorangeKey = 'user';

    static getUser = () => {
        return new UserIndentity(JSON.parse(localStorage.getItem(UserService.userStorangeKey)));
    };

    static setUser = (user) => {
        localStorage.setItem(UserService.userStorangeKey, JSON.stringify(user));
    };

    static removeUser = () => {
        localStorage.removeItem(UserService.userStorangeKey);
    };
}