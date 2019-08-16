import HttpException from "./HttpException";

export default class NotFoundHttpException extends HttpException {
    constructor(response) {
        super('An error occurred while the resource did not exist. Could not fetch, received 404.', response);
    }
}