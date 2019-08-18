import ExtendableError from "./ExtendableError";

export default class UnauthorizedException extends ExtendableError {
    constructor() {
        super('The error is related to the authentication.');
    }
}