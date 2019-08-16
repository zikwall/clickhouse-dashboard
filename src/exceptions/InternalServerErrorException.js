import ExtendableError from "./ExtendableError";

export default class InternalServerErrorException extends ExtendableError {
    constructor(response) {
        super('An internal server error has occurred.', response);
    }
}