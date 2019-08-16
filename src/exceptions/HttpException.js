import ExtendableError from "./ExtendableError";

export default class HttpException extends ExtendableError {
    constructor(message, response) {
        super(message);
        this.response = response;
    }

    getMessage() {
        return this.message
    }

    getResponse() {
        return this.response;
    }
}