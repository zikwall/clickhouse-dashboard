import Identity from './Identity';

export class PermissionsInterface {
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

    can = (permission, callback = null, options = {}) => {
        if (callback !== null) {
            return callback(Identity.getUser(), options);
        }

        return this.permissions.includes(permission);
    };
}