import { ERROR_MESSAGE } from "./Messages";

export class NotFoundError extends Error {
    constructor() {
        super( ERROR_MESSAGE.NOT_FOUND);
    }
}