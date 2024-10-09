import {Schema, model} from "mongoose"
import {v4 as uuidv4} from "uuid"
import { IEvent } from "../../../domain/interfaces/iEvent.interface"


const eventSchema = new Schema<IEvent>({
    id: {type: String,   default: uuidv4, required: true },
    title: {type: String, required: true },
    description: {type: String, required: true},
    date:  {type: Date,required: true},
    location:  {type: String, required: true},
    organizer:  {type: String, required: true}
})


export const EventModel = model("events",eventSchema);