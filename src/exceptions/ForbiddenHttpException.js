import HttpException from "./HttpException";

export default class ForbiddenHttpException extends HttpException {
    constructor(response) {
        super('Not enough rights to perform this action', response);
    }
}