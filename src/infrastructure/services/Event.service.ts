import { v4 } from 'uuid';
import {Types} from "mongoose"
import { IEvent, IEventCreate } from '../../domain/interfaces/iEvent.interface';
import { IEventService } from "../../domain/services/IEvent.service";
import { EventModel } from '../database/models/event.model';
import { NotCreatedError } from '../../domain/errors/NotCreateError';
import { NotFoundError } from '../../domain/errors/NotFoundError';



export class EventService implements IEventService {
    
    async create(event: IEventCreate): Promise<IEvent>{
            const newEvent = new EventModel({
                ...event
            });


            try {
                return await newEvent.save()
            } catch (error) {
                throw new NotCreatedError();
            }
        
    };

    async get(id: IEvent['id']): Promise<IEvent>{
        
        
        try {
            const event = await EventModel.findById(id);
            return event;
          
        } catch (error) {
            throw new NotCreatedError();
        }
    }

    async update(event: IEventCreate): Promise<IEvent>{

        const updatedEvent = await EventModel.findByIdAndUpdate(event, { new: true });
        if (!updatedEvent) {
            throw new NotFoundError(`Event not found`);
        }
        return updatedEvent;
    }


   async delete(id: IEvent['id']): Promise<void>{
        try {
            await EventModel.findByIdAndDelete(id)
        } catch (error) {
            throw new NotFoundError("Error at deleting");
        }
    }

    async getAll(): Promise<IEvent[]>{
        try {
            return await EventModel.find();
        } catch (error) {
            throw new NotFoundError("Error information not found");
        }
    }
}