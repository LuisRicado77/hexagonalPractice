import { IEvent, IEventCreate } from "../interfaces/iEvent.interface"

export interface IEventService{
    create: (event: IEventCreate) => Promise<IEvent>,
    get: (id: IEvent['id']) => Promise<IEvent>
}