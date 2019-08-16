import ExtendableError from "./ExtendableError";

export default class Exception extends ExtendableError {
    constructor(message) {
        super(message);
    }
}