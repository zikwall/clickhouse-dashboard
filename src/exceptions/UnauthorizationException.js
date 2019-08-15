export default class UnauthorizationException extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, UnauthorizationException);
    }
}