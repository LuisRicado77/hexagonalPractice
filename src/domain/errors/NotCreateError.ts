import { ERROR_MESSAGE } from "./Messages";

export class NotCreatedError extends Error {
    constructor() {
        super(ERROR_MESSAGE.NOT_CREATED);
    }
}