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

    async getById(id: IEvent['id']): Promise<IEvent>{
        
        
        try {
            const event = await EventModel.findById(id);
            return event;
          
        } catch (error) {
            throw new NotCreatedError();
        }
    }

    async update(id: IEvent['id'], event: IEventCreate): Promise<IEvent> {
        try {
            const updatedEvent = await EventModel.findByIdAndUpdate(id, event, { new: true });
            if (!updatedEvent) {
                throw new NotFoundError(`Event not found`);
            }
            return updatedEvent;
        } catch (error) {
            throw new NotFoundError(`Error at updating: ${error.message}`);
        }
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
            const events = EventModel.find(); 
            return await events;
        } catch (error) {
            throw new NotFoundError("Error information not found");
        }
    }
}