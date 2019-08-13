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

    can = (permission) => {
        return this.permissions.includes(permission);
    };
}