import { v4 } from 'uuid';
import {Types} from "mongoose"
import { IEvent, IEventCreate } from '../../domain/interfaces/iEvent.interface';
import { IEventService } from "../../domain/services/IEvent.service";
import { EventModel } from '../database/models/event.model';
import { NotCreatedError } from '../../domain/errors/NotCreateError';



export class EventService implements IEventService {
    
    async create(event: IEventCreate): Promise<IEvent>{
            const newEvent = new EventModel();
            return await newEvent.save()
        
    };

    async get(id: IEvent['id']): Promise<IEvent>{
        try {
            return await EventModel.findById(id);
        } catch (error) {
            throw new NotCreatedError();
        }
    }
}