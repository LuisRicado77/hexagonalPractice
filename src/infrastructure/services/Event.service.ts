import { IEventService } from "../../domain/services/IEvent.service";

export class EventService implements IEventService {
    async create (event: IEventCreate) : Promise<IEvent>{

    }
    get: (id: IEvent['id']) => Promise<IEvent>
}