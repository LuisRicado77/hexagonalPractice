import { IEvent, IEventCreate } from "../interfaces/iEvent.interface"

export interface IEventService{
    create: (event: IEventCreate) => Promise<IEvent>,
    getById: (id: IEvent['id']) => Promise<IEvent>,
    update: (id: string, event: IEvent)=> Promise<IEvent>,
    delete:(id: IEvent['id']) => Promise<void>,
    getAll:() => Promise<IEvent[]>
}