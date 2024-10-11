import { NextFunction, Request, Response } from "express";
import Joi from "joi";

// Closure
export const schemaValidator = (schema: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const response = schema.validate(body);
            if(response.error) {
                res.status(400).send({
                    msg: "All the fields in payload must be set"
                });
            } else {
                next();
            }
        } catch (error) {
            
        }
    };
};