import { ERROR_MESSAGE } from "./Messages";

export class NotSendNotificationError extends Error {
    constructor() {
        super(ERROR_MESSAGE.NOT_SEND_ERROR);
    }
}