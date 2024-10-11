import Joi from "joi";

const title = Joi.string();
const description = Joi.string();
const date = Joi.string();
const location = Joi.string();
const organizer = Joi.string();



export const eventSchemaCreate = Joi.object({
    title : title.required(),
    description: description.required(),
    date: date.required(),
    location: location.required(),
    organizer: organizer.required()
})

export const eventSchemaUpdate = Joi.object({
    title : title,
    description: description,
    date: date,
    location: location,
    organizer: organizer
})