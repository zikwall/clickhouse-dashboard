import HttpException from "./HttpException";

export default class BadRequestException extends HttpException {
    constructor(response) {
        super('The server detected a syntax error in the client request. Could not fetch, received 400.', response);
    }
}