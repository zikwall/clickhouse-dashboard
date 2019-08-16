import ExtendableError from "./ExtendableError";

export default class UnathorizeException extends ExtendableError {
    constructor() {
        super('The error is related to the authentication.');
    }
}