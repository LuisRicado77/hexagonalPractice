import { IEvent, IEventCreate } from "../interfaces/Event.interface"

export interface IEventService{
    create: (event: IEventCreate) => Promise<IEvent>
    get: (id: IEvent['id']) => Promise<IEvent>
}