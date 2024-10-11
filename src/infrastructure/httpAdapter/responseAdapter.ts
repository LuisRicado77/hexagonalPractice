import { NotSendNotificationError } from './../../domain/errors/NotSendNotificationError';
import { NotFoundError } from './../../domain/errors/NotFoundError';
import { NotCreatedError } from './../../domain/errors/NotCreateError';
import { Request, Response } from "express";

export class ResponseAdapter {
    // public -> private -> protected -> static
    static handler(func: Promise<any>, req: Request, res: Response) {
        func.then(data => {
            res.status(200).send(data);
        }).catch((error) => {
            if(error instanceof NotCreatedError) {
                res.status(400).send({
                    msg: error.message
                });
            } else if(error instanceof NotFoundError) {
                res.status(404).send({
                    msg: error.message
                });
            } else if(error instanceof NotSendNotificationError) {
                res.status(409).send({
                    msg: error.message
                });
            } else {
                res.status(500).send({
                    msg: "Internal server error"
                });
            }
        });
    }
}