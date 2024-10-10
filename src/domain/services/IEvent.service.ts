import { IEvent, IEventCreate } from "../interfaces/iEvent.interface"

export interface IEventService{
    create: (event: IEventCreate) => Promise<IEvent>,
    get: (id: IEvent['id']) => Promise<IEvent>,
    update: (event: IEvent)=> Promise<IEvent>,
    delete:(id: IEvent['id']) => void,
    getAll:() => Promise<IEvent[]>
}